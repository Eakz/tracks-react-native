import React, {useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text} from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                header="Sign Up for Tracker"
                errormessage={state.errorMessage}
                sumbitButtonText="Sign Up"
                onSubmit={signup}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text style={styles.link}>
                    Already have an account? Sign in instead...
                </Text>
            </TouchableOpacity>
        </View>
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
        marginBottom: 200,
    },

    link: {
        color: "blue",
    },
});

export default SignupScreen;
