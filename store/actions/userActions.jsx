import cuid from 'cuid';
export const uploadProfileImage = (file, fileName='hello_!') => async (
      dispatch,
      getState,
      { getFirebase, getFirestore }
    ) => {
      const imageName = cuid();
      const firebase = getFirebase();
      const firestore = getFirestore();
      const user = getState().firebase.auth.uid;
      const path = `${user.uid}/user_images`;
      const options = {
        name: imageName
      };
      try {
        
        // upload the file to firebase storage
        let uploadedFile = await firebase.uploadFile(path, file, null, options);
        console.log('uploaded file',uploadedFile)
        // get url of the image
        let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
        // get userdoc
        let userDoc = await firestore.get(`users/${user.uid}`);
        // check if user has photo, if not update profile
        if (!userDoc.data().photoURL) {
          await firebase.updateProfile({
            photoURL: downloadURL
          });
          await user.updateProfile({
            photoURL: downloadURL
          });
        }
        // add the image to firestore
        await firestore.add(
          {
            collection: 'users',
            doc: user.uid,
            subcollections: [{ collection: 'photos' }]
          },
          {
            name: imageName,
            url: downloadURL
          }
        );

      } catch (error) {
        console.log(error);

      }
    };
    