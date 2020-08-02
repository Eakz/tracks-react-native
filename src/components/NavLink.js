import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import {Text} from 'react-native-elements';
import Spacer from "./Spacer";
import { withNavigation, text, routeName } from "react-navigation";

const NavLink = ({ navigation,text,routeName }) => {
    return (
        <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    link: {
        color: "blue",
    },
});

export default withNavigation(NavLink);
