import React from 'react';

import './sign-in-sign-up.style.scss';

import SignIn from '../../componentes/sign-in/sign-in.component.jsx';
import SignUp from '../../componentes/sign-up/sign-up.component.jsx';

const SignInSignOutPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInSignOutPage