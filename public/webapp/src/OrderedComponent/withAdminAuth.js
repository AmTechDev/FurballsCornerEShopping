import { useAuthAdmin } from './../redux/ReactHooks';

const WithAdminAuth = props => useAuthAdmin(props) && props.children;

export default WithAdminAuth;

 