import React, {useState} from 'react';
import Login from "../Components/Login";
import Registration from "../Components/Registration";

const Auth = () => {
    const [reg, isReg] = useState(true)
    return (
        <div className='Auth'>
            {
                reg ? <Login isReg={isReg}/> : <Registration isReg = {isReg}/>
            }
        </div>
    );
}

export default Auth;