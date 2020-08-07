import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
    let points = [];
    const negPos=[1,-1];
    for (let i = 0; i < 20; i++) {
        points.push({
            latitude: 52.052141 + (Math.random()*negPos[Math.floor(Math.random()*2)] * 0.001),
            longitude: -1.223817 + (Math.random()*negPos[Math.floor(Math.random()*2)] * 0.001),
        });
    }
    return (
        <>
            <MapView
                initialRegion={{
                    latitude: 52.052141,
                    longitude: -1.223817,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0053,
                }}
                style={styles.map}>
                <Polyline coordinates={points}/>
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
