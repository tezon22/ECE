import axios from 'axios'
import {toast} from 'react-toastify'
const url = "api/upload"
export const cloudinaryUpload = async (data) =>{
    const body = {
        url: data.url,
        fileName: data.uploadTags.fileName,
        size: data.size / 1048576,
        title: data.filename,
        author: data.uploadTags.author,
        keywords: data.uploadTags.keywords,
        level: data.uploadTags.level,
        thumbnail: `https://cdn.filestackcontent.com/output=format:jpg/${data.handle}`
    }
   
    const response = await axios.post(url, body)
    .then((res)=>res.data.message)
    .catch((err)=>err.response.data.error.message)
    console.log(response, data)  
    toast.success(response)
}
