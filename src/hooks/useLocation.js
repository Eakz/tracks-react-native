import { useState, useEffect } from "react";
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);
    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error("I need that doo-doo to do do");
            } else {
                setErr(null);
            }
            const sub = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                callback,
            );
            setSubscriber(sub);
        } catch (e) {
            setErr(e);
        }
    };
    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        } else {
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack, callback]);
    return [err];
};
