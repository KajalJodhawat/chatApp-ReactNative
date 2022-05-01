import firebase from 'firebase';

class FirebaseSDK{
    constructor(){
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyAHWc-h-KW508sTSYEkpIKDdVf_qWVIENY",
                authDomain: "chatapplication-952ae.firebaseapp.com",
                databaseURL: "https://chatapplication-952ae-default-rtdb.firebaseio.com",
                projectId: "chatapplication-952ae",
                storageBucket: "chatapplication-952ae.appspot.com",
                messagingSenderId: "646423521725",
                appId: "1:646423521725:web:5e8092ef9503f39d160ad4",
                measurementId: "G-HSEC3RNSD4"
            });
        }
    }
    login = async (user, success_callback, failed_callback) => {
        await firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(success_callback, failed_callback);
    };
}

const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;