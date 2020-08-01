import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
const AuthForm = ({ header, errormessage, onSubmit, sumbitButtonText }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <Spacer>
                <Text h3>{header}</Text>
            </Spacer>
            <Spacer>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errormessage ? (
                <Text style={styles.errorMessage}>{errormessage}</Text>
            ) : null}
            <Spacer>
                <Button
                    title={sumbitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15,
    },
});

export default AuthForm;
