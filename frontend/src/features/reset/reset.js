import axios from 'axios'

const API_URL = '/api/password-reset/:userId/:token'

// Register user
export const resetService  = async (data) => {
  const response = await axios.post(API_URL, data)

  return response.data
}


