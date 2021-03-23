import { useAuthAdmin } from './../redux/ReactHooks';

const AdminAuth = props => useAuthAdmin(props) && props.childern;

export default AdminAuth;