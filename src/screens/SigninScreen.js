import React, {useContext} from "react";
import { StyleSheet, KeyboardAvoidingView} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context} from '../context/AuthContext';

const SigninScreen = () => {
    const {state,signin} = useContext(Context);
    return (
        <KeyboardAvoidingView
        keyboardVerticalOffset={5}
        style={styles.container}
        >
            <AuthForm
                header="Sign In to Your Account"
                errormessage={state.errormessage}
                onSubmit={signin}
                sumbitButtonText="Sign In"
            />
            <NavLink
                text="Don't have an account? Sign up instead."
                routeName="Signup"
            />
        </KeyboardAvoidingView>
    );
};
SigninScreen.navigationOptions = {
    header: () => false,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center"
    },
});

export default SigninScreen;
