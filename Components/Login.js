import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import firebaseSDK from "../CONFIG/firebaseSDK";

export default class Login extends React.Component{
    static navigationOptions = {
        title: 'RN + Chat Application'
    };

    state = {
        name: 'alice',
        email: 'test@live.com',
        passowrd: '123456',
        avatar: ''
    };

    onPressLogin = async () => {
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar
        };

        const response = firebaseSDK.login(
            user,
            this.loginSuccess,
            this.loginFailed
        );
    };

    loginSuccess = () => {
        console.log('login successful, navigate to chat.');
        this.props.navigation.navigate('Chat',{
            name: this.state.name,
            email: this.state.email,
            avatar: this.state.avatar
        });
    };

    loginFailed = () => {
        alert('Login failure. please tried agail.');
    };

    onChangeTextEmail = email => this.setState({ email });
    onChangeTextPassword = passowrd => this.setState({ passowrd });

    render(){
        return(
                <View>
                    <Text style={styles.title}>Email:</Text>
                    <TextInput
                        style={styles.nameInput}
                        placeholder='test@gmail.com'
                        onChangeTextEmail={this.onChangeTextEmail}
                        value={this.state.email} 
                    />
                    <Text style={styles.title}>Password:</Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={this.onChangeTextPassword}
                        value={this.state.passowrd} 
                    />
                    <Button
                        title="Login"
                        style={styles.buttonText}
                        onPress={this.onPressLogin}
                    />
                    <Button
                        title="signup"
                        style={styles.buttonText}
                        onPress={() => this.props.navigation.navigate('Signup')}
                    />
                </View>        

        );
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 16,
        marginLeft: 16,
        fontSize: 16
    },
    nameInput: {
        height: 16 * 2,
        margin: 16,
        paddingHorizontal: 16,
        borderColor: '#111111',
        borderWidth: 1,
        fontSize: 16
    },
    buttonText: {
        marginLeft: 16,
        fontSize: 42
    }
});