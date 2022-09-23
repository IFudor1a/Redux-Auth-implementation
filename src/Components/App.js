import AppRouter from '../Route';
import {useEffect} from "react";
import {handleInitialData, logOut} from "../Actions/User";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(handleInitialData());
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/login')
    }

    const values = useSelector(state => state.users);
    const users = Object.values(values);
    const user = users.filter(el => el.Access === true)[0]

  return (
        <div>
            <div onClick={(e) => handleClick(e)}>{user ? user[0].name : 'USER'}</div>
            {user && <div><button onClick={() => dispatch(logOut(user))}>Log Out</button></div>}
        <AppRouter state={user && user[0].Access}/>
        </div>
  );
}

export default App;
