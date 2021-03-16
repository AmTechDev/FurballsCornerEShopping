import { useAuth } from './../ReactHooks';
import { withRouter } from 'react-router-dom';

const WithAuth = props => useAuth(props) && props.children; 
//passing props to reactHooks


export default withRouter(WithAuth);