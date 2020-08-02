import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
                header="Sign In to Your Account"
                errormessage=""
                onSubmit={() => {}}
                sumbitButtonText="Sign In"
            />
            <NavLink
                text="Don't have an account? Sign up instead."
                routeName="Signup"
            />
        </View>
    );
};
SigninScreen.navigationOptions = {
    header: () => false,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250,
    },
});

export default SigninScreen;
