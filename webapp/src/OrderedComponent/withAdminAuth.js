import { useAuthAdmin } from './../redux/ReactHooks';

const withAdminAuth = props => useAuthAdmin(props) && props.childern;

export default withAdminAuth;

