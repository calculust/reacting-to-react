import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';
import styled from 'styled-components';

const App = () => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [loginDisplay, setLoginDisplay] = useState({display: 'none'});

    const handleUsernameChange = e => {
        setUsername(e.target.value);
        if (e.target.value != '' && loginDisplay.display == 'none') setLoginDisplay({display:'block'});
        else if (e.target.value == '') setLoginDisplay({display:'none'});
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 33000);
    }, [loaded]);

    if (!loaded) return (
        <Wrapper className="min-vh-100 container position-relative">
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h1 className="mb-5">Website Loading...</h1>
                <button className="btn btn-primary" onClick={() => setLoaded(true)}>Load Website</button>
            </div>
        </Wrapper>
    )

    return (
        <Wrapper className="container p-5">
            <Greeter phrase="Hello there" name="Vishal" />
            <Greeter phrase="Good Morning" name="Luke" />
            <Greeter phrase="What up" name="Andrew" />
            <div className="form-floating mb-3">
                <input type="email" value={username} className="form-control" id="floatingInput" onChange={handleUsernameChange} />
                <label for="floatingInput">Username</label>
            </div>
            
            <p style={loginDisplay}>You are logged in as: {username}</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color:inherit;
`;

export default App;