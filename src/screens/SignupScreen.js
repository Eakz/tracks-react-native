import React, { useContext } from "react";
import { StyleSheet,KeyboardAvoidingView } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
    const { state, signup } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView
        keyboardVerticalOffset={5}
        style={styles.container}>
            <AuthForm
                header="Sign Up for Tracker"
                errormessage={state.errorMessage}
                sumbitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
        </KeyboardAvoidingView>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",

    },
});

export default SignupScreen;
