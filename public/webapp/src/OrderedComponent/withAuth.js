import { useAuth } from '../redux/ReactHooks';


const WithAuth = props => useAuth(props) && props.children; 
//passing props to reactHooks


export default WithAuth;