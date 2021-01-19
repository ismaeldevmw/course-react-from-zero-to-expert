import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

import { firebase } from '../firebase/firebase-config';

export const AuthRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( user => {
        
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
            }
            
        });
        
    }, [ dispatch ]);

    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ LoginScreen }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ RegisterScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>

        </div>
    )
}
