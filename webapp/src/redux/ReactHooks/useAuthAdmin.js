import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { adminverification } from './../../service';


const mapState = ({ user}) => ({
    currentUser: user.currentUser
});
const useAuthAdmin = props =>{
    const { currentUser } = useSelector(mapState);
    const history = useHistory();
    useEffect(() => {
        if (!adminverification(currentUser)){
            history.push('/login');
        }
    }, [currentUser]);

    return currentUser;
}
export default useAuthAdmin;

