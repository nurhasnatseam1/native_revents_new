import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import {uploadProfileImage} from '../../store/actions/userActions';

const mapActions={
      uploadProfileImage,

}

class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
                <Button
          title="Take an image"
          onPress={this._pickImageFromCamera}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsyncForCameraRoll();
    this.getPermissionAsyncForCamera();
    console.log('hi');
  }
  _pickImageFromCamera=async ()=>{
      let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
          });
      
          
          if (!result.cancelled) {
            await this.uploadImage(result.uri)    
            this.setState({ image: result.uri });
          }
  }

  getPermissionAsyncForCameraRoll = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (Constants.platform.ios) {
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  getPermissionAsyncForCamera=async ()=>{
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (Constants.platform.ios) {
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  uploadImage = async(uri) => {
        //converting to bolb
      const response = await fetch(uri);
      const blob = await response.blob();
      //uploading to firebase
      this.props.uploadProfileImage(blob)
    }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    
    if (!result.cancelled) {
      await this.uploadImage(result.uri)    
      this.setState({ image: result.uri });
    }
  };
} 


export default connect(null,mapActions)(ImagePickerExample)