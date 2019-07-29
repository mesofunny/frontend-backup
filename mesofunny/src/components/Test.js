import React from 'react';

const Test = (props) => {
    
    const logout = () => {
        localStorage.removeItem('token')
        props.history.push('/home')
    }
    
    return ( 
        <div>
            <p>test me</p>
            <button onClick={logout}>Logout</button>
        </div>
     );
}


 
export default Test;