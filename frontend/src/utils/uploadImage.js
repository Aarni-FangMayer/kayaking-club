import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";

export async function uploadImage(file, folder = "uploads") {
  const fileRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);

  await uploadBytes(fileRef, file);

  const downloadURL = await getDownloadURL(fileRef);
  return downloadURL;
}