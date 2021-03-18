import React from 'react';
import '../style.scss';

const Category = props => {
    return (
    <div>
        <div className="categories" id="category">
         <h2>Categories</h2>
     </div>
    <ul id="cat" className="catbox">
    <li className="item">
            <div className="category-box">
                <a href="#">
                    <img src="/assets/all.png"/>
                </a> 
                
            </div>
            <span>All</span>
        </li>
    <li className="item">
        <div className="category-box">
            <a href="caccesories.html">
                 <img src="/assets/1.png"/>
             </a> 
        </div>
         <span>Accessories</span>
    </li>
    <li className="item">
        <div className="category-box">
            <a href="cclothes.html">
                 <img src="/assets/2.png"/>
             </a> 
        </div>
        <span>Clothes</span>
    </li>
    <li className="item">
        <div className="category-box">
            <a href="cfood.html">
                 <img src="/assets/3.png"/>
             </a> 
        </div>
        <span>Foods</span>
    </li>
    <li className="item">
        <div className="category-box">
            <a href="chygiene.html">
                 <img src="/assets/4.png"/>
             </a> 
        </div>
        <span>Hygiene</span>
    </li>
    <li className="item">
        <div className="category-box">
            <a href="ctoys.html">
                 <img src="/assets/5.png"/>
             </a> 
        </div>
        <span>Toys</span>
    </li>
</ul>
    </div>
    );
};

export default Category;