import {v4} from 'uuid'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase/config.js'
import { BadRequestError } from '../errors/customError.js'
export const deleteImage = async (imageUrl) => {
  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
    console.log(`Image at ${imageUrl} has been deleted.`);
  } catch (error) {
    if (error.code === 'storage/object-not-found') {
      console.error('The image does not exist.');
    } else {
      console.error('An error occurred while deleting the image:', error);
    }
  }
};
export const uploadImage = async (file, path) => {
    try {
        const fileName = `${v4()}${file.originalname}`
        const storageRef = ref(storage, `${path}/${fileName}`)
        const metadata = {
            contentType: file.minetype
        }
        const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata)
        const imageUrl = await getDownloadURL(snapshot.ref)
        return imageUrl
    } catch (error) {
        throw new BadRequestError('There was an Error uploading your image to the database!')
    }
}