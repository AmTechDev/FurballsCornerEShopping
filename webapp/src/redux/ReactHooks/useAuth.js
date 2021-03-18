import { useEffect} from 'react';
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const useAuth = props => {
    const { currentUser } = useSelector(mapState);
    //currentUser be redirected

    useEffect(()  => {
        if(!currentUser){
            props.history.push('/login');
        }

    }, [currentUser]);
    //the dependency is currentUser

    return currentUser;
}

export default useAuth;