// Location testing script
import "../_mockLocation";
//_______________________//
// Basic imports
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
// custom hook
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation(addLocation);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
