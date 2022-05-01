createAccount = async user => {
    firebase
        .auth()
        .createUserWithEmailPassword(user.email, user.password)
        .then(
            function(){
                console.log(
                    'created user successfully, user email:'+
                    user.email+
                    'name:'+
                    user.name
                );
                var userf = firebase.auth().currentUser;
                userf.updateProfile({ displayName: user.name}).then(
                    function(){
                        console.log('updated disolayName successfully. name:'+ user.name);
                        alerrt(
                            'user'+user.name + 'was created successfully. please login'
                        );
                    },
                    function(error){
                        console.warn('Error update displayName.';)
                    }
                );
            },
            function(error){
                console.errror('got error:'+ typeof error+ 'string:' + error.message);
                alert('Create account failed. Error:' + error.message);
            }
        );
};