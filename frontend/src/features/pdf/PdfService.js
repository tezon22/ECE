import axios from 'axios'

const API_URL = '/api/pdf/'

// Register user
const getPdfs = async () => {
 const response = await axios.get(API_URL)
 
  return(response.data) 
}

export default getPdfs
