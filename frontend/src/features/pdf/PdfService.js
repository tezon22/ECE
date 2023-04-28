import axios from 'axios'

const API_URL = '/api/pdf/'

// Register user
const getPdfs = async () => {
 const response = await axios.get(API_URL)
 localStorage.setItem('pdfs', JSON.stringify(response.data))
  return(response.data) 
  // console.log(response.data)
}

export default getPdfs
