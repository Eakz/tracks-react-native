// FOR TEST PURPOSES ONLY
// REMOVE ON PRODUCTION
import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
    return {
        timestamp: 1597053957000,
        coords: {
            speed: 0,
            heading: 90,
            accuracy: 20,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -1.221885 + increment * tenMetersWithDegrees,
            latitude: 52.0502733 + increment * tenMetersWithDegrees,
        },
        mocked:false
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter),
    });
    counter++;
}, 1000);
