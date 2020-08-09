// FOR TEST PURPOSES ONLY
// REMOVE ON PRODUCTION
import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
    return {
        timestamp: 1000000,
        coors: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 52.052141 + increment * tenMetersWithDegrees,
            latitude: -1.223817 + increment * tenMetersWithDegrees,
        },
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
