// Location testing script
// import "../_mockLocation";
//_______________________//
// Basic imports
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
// Components
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
//
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
// custom hook
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);

    const [err] = useLocation(isFocused, () => {
        addLocation(location, state.recording);
    });

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
