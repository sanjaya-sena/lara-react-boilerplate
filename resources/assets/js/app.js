import React from 'react';
import ReactDOM from 'react-dom';
import Users from "./components/user/Users";
import {login} from './actions/authActions'
import Login from './components/auth/Login'

login({
    email: 'test@gmail.om',
    password:'12345678'
});
let AppRoot = () => (
    <div>
        <Login />
    </div>
);

if (localStorage.getItem('jwtToken')){
     AppRoot = () => (
        <div>
            <Users />
        </div>
    );
}


if (document.getElementById('app')) {
    ReactDOM.render(<AppRoot />, document.getElementById('app'));
}