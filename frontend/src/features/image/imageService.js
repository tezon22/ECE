import axios from 'axios'

const API_URL = 'http://localhost:5000/api/uploadpics/'

// Register user
export const getImage = async (id) => {
 const response = await axios.get(API_URL + id)
 
  return(response.data) 
  // console.log(response.data)
}
export const uploadImage = async ({body, id}) => {
  console.log(typeof id)
  await fetch("https://api.cloudinary.com/v1_1/dscbiu2km/image/upload", {
    method: "post",
    body
  })
    .then((res) => res.json())
    .then((data) => {
    const response = axios.post(API_URL + id,{ pic: data.url.toString()})
     console.log(response.data,  data.url.toString())
    })
    .catch((err) => {
      console.log(err);
    });
}


