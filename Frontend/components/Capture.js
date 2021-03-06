import React, { useRef } from 'react';
import { SafeAreaView, Button, PermissionsAndroid, Platform, 
  Text, View } from 'react-native';
import ViewShot, { captureScreen } from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';

export default () => {
   const captureRef = useRef();

   const getPhotoUri = async (): Promise<string> => {
     const uri = await captureRef.current.capture();
     console.log('๐๐ Image saved to', uri);
     return uri;
   };

   const hasAndroidPermission = async () => {
     const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

     const hasPermission = await PermissionsAndroid.check(permission);
     if (hasPermission) {
       return true;
     }

     const status = await PermissionsAndroid.request(permission);
     return status === 'granted';
   };

   const onSave = async () => {
     if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
       toast('๊ฐค๋ฌ๋ฆฌ ์ ๊ทผ ๊ถํ์ด ์์ด์');
       return;
     } 
     const uri = await getPhotoUri();
     const result = await CameraRoll.save(uri);
     console.log('๐คresult', result);
 };

  return (
    <SafeAreaView>
      <ViewShot ref={captureRef} options={{ format: 'jpg', quality: 0.9 }}>
        <View style={{ marginTop: 10, height: 200, 
          justifyContent: 'center', alignItems: 'center',
          borderWidth: 2,borderRadius: 5,borderStyle: 'solid'}}> 
          <Text>์ด ๋ฐ์ค๊ฐ ์บก์ณ๋ฉ๋๋ค</Text>
        </View>
      </ViewShot>

      <Button title="๊ฐค๋ฌ๋ฆฌ์ ์ ์ฅ" onPress={onSave} />
    </SafeAreaView>
  );
};