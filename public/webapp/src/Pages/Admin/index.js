import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Buttons from '../../Components/Forms/Button';
//import UploadImage from '../../Components/Forms/UploadImage';
import TextfieldForm from '../../Components/Forms/TextfieldForm';
import SelectOption from '../../Components/Forms/SelectOption';
import Modal from '../../Components/Forms/Modal';

import '../style.css';
//REDUX
import { addProductStart, getProductStart } from '../../redux/Products/actions';

const mapState = ({ dataProducts }) =>({
  products: dataProducts.products
});
const Admin = props => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [concealModal, setConcealModal] = useState(true);
  const [productCategory, setProductCategory] = useState('accessories');
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');

  useEffect(() =>{
    dispatch(
    getProductStart()
    );
  }, []);

  const toggleModal = () => setConcealModal(!concealModal);

  const configModal = {
    concealModal,
    toggleModal
  };

  const handleSubmit = e =>{
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productImage,
        productDesc,
        productPrice,
        productStock
      })
    );
  }
  return (
    <div className="admin">

      <div className="callAction">
        <ul>
          <li>
            <Buttons onClick={() => toggleModal()}>
              Add New Product
            </Buttons>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add New Product
            </h2>

            <SelectOption
              label="Category"
              options={[{
                value: "accessories",
                name: "Accessories"
              }, {
                value: "clothes",
                name: "Clothes"
              }, {
                value: "foods",
                name: "Foods"
              }, {
                value: "Hygiene",
                name: "Hygiene"
              }, {
                value: "toys",
                name: "Toys"
              }
            ]}
              handleChange={e => setProductCategory(e.target.value)}
            />

            <TextfieldForm
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />
            
          <TextfieldForm
            label="Image"
            type="file"
            accept="image/*"
            value={productImage}
            handleChange={e => setProductImage(e.target.value)}
          />
           
           <TextfieldForm
           label="Description"
           type="text"
           value={productDesc}
           handleChange={e => setProductDesc(e.target.value)}
           />
            <TextfieldForm
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />
            <TextfieldForm
              label="Stock"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productStock}
              handleChange={e => setProductStock(e.target.value)}
            />

            <Buttons type="submit">
              Add Product
            </Buttons>

          </form>
        </div>
      </Modal>
    
    <div className="handleProduct">
      <table border="0" cellSpacing="0" cellPadding="0" >
        <tbody>
          <tr>
            <th>
              <h2>
                Products
              </h2>
            </th>
          </tr>
          <tr>
            <td>
              <table border="0" cellSpacing="10" cellPadding="0">
                <tbody>
                <th>
                      Category
                    </th>
                    <th>
                      Image
                    </th>
                    <th>
                     Name
                    </th>
                    <th>
                     Description
                    </th>
                    <th>
                     Price
                    </th>
                    <th>
                     Stock
                    </th>
                {products.map((product, index)=>{

                  const {
                    productCategory,
                    productName,
                    productImage,
                    productDesc,
                    productPrice,
                    productStock
                  } = product;
                  return(
                    <tr>
                      <td>
                          {productCategory}
                      </td>
                      <td>
                          <img className="imgProd" src={productImage}/>
                      </td>
                      <td>
                        {productName}
                      </td>
                      <td>
                        {productDesc}
                      </td>
                      <td>
                        P{productPrice}
                      </td>
                      <td>
                        {productStock}
                      </td>
                    </tr>
                  )
                })}
                 
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
     

    </div>
  );
}

export default Admin;