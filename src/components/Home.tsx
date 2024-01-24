import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function CameraScreen() {
  const takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', textAlign: 'center', marginBottom: 12}}>
        Show the front View of the Car
      </Text>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={[styles.preview]}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{fontSize: 14, color: 'white'}}> Scan </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 612,
    width: '70%',
    marginHorizontal: 64,
    marginVertical: 165,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 164,
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  capture: {
    flex: 0,
    backgroundColor: '#101A56',
    borderRadius: 50,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
