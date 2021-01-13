import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
    return(dispatch) => {

        setTimeout(() => {
            dispatch( login(123, 'Ismael'));
        }, 35000);

    }
}

export const startRegisterWithEmailPasswordAndName = ( email , password, name ) => {
    return ( dispatch ) => {
        
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {
                
                await user.updateProfile({ displayName: name})
                
                console.log(user);
            })
            .catch( e => {
                console.log(e);
            })

    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch( 
                    login(user.uid, user.displayName) 
                );
            })
    } 
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})