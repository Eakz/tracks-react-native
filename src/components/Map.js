import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
    const {
        state: { currentLocation },
    } = useContext(LocationContext);
    let points = [];
    const negPos = [1, -1];
    // for (let i = 0; i < 20; i++) {
    //     points.push({
    //         latitude:
    //             52.052141 +
    //             Math.random() * negPos[Math.floor(Math.random() * 2)] * 0.001,
    //         longitude:
    //             -1.223817 +
    //             Math.random() * negPos[Math.floor(Math.random() * 2)] * 0.001,
    //     });
    // }
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
    return (
        <>
            <MapView
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.007,
                    longitudeDelta: 0.007,
                }}
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.007,
                    longitudeDelta: 0.007,
                }}
                style={styles.map}>
                <Circle
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor="rgba(158,158,255,1.0)"
                    fillColor="rgba(158,158,255,0.3)"
                />
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;
