import axios from "axios";

export const uploadImage = async (file) => {
  if (!file) return;

  try {
    const formData = new FormData();
    formData.append('upload_preset', 'curso-vue');
    formData.append('file', file);

    const url = 'https://api.clodinary.com/v1_1/my-key/image/upload';
    const { data } = await axios.post(url, formData);
    return data.secure_url;
  } catch (error) {
    console.error('Error al cargar la imagen, revisar logs');
    console.log(error);
    return null;
  }
}
