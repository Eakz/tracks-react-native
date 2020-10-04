import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    onChangetext={changeName}
                    placeholder="Enter name..."
                />
            </Spacer>
            <Spacer>
                {recording ? (
                    <Button title="Stop" onPress={stopRecording} />
                ) : (
                    <Button onPress={startRecording} title="Start Recording" />
                )}
            </Spacer>
            <Spacer>
                {!recording && locations.length ? (
                    <Button onPress={saveTrack} title="Save Recording" />
                ) : null}
            </Spacer>
        </>
    );
};

export default TrackForm;
