import axios from 'axios'

const API_URL = '/api/ece/resetPassword/'

// Register user
const resetPassword = async (data, id) => {
 const response = await axios.put(API_URL + id, data)
 
  return response.data
}

export default resetPassword
