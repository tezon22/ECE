import axios from 'axios'

const API_URL = 'http://localhost:5000/api/ece/email'

// Register user
export const emailService = async (olddata) => {
  const response = await axios.post(API_URL, olddata)

  return response.data
}


