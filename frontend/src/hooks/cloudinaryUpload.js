import axios from 'axios'
 
const url = "https://api.cloudinary.com/v1_1/dscbiu2km/image/upload"
export const cloudinaryUpload = (body) =>{
    
    const response = axios.post(url, body)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err.response.data.error.message))

    // for reaponse we have res.data.pages and original_filename and bytes and url
    // console.log(response);
    // const url = "https://res.cloudinary.com/dscbiu2km/image/upload/v1687048319/PDF/h56gv5c3mad2azhnm1ac.pdf"
// const Image = url.replace(".pdf", ".jpg")
// console.log(Image)   
}
//secure_url
