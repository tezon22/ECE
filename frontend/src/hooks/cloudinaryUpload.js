import axios from 'axios'
 
const url = "api/upload"
export const cloudinaryUpload = (data) =>{
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
   
    const response = axios.post(url, body)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err.response.data.error.message))
    console.log(response, data)  
}
