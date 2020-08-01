import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

const AuthForm = ({ header, errormessage, onSubmit, sumbitButtonText }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
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
            {state.errorMessage ? (
                <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => signup({ email, password })}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({});

export default AuthForm;
