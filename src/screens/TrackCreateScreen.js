import '../_mockLocation';
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import Map from "../components/Map";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            const {granted} = await requestPermissionsAsync();
            if (!granted) {
                throw new Error("I need that doo-doo to do do");
            }else{
                setErr(null)
            }
            await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
            },(location)=>{
                console.log('hihih')
                console.log(location)
            });
        } catch (e) {
            setErr(e);
        }
    };
    useEffect(() => {
        startWatching();
    }, []);
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
