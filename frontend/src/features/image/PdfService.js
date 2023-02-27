import axios from 'axios'

const API_URL = '/api/uploadpics/'

// Register user
const getPdfs = async (id) => {
 const response = await axios.get(API_URL + id)
 
  return(response.data) 
  // console.log(response.data)
}

export default getPdfs
