import axios from 'axios'

const API_URL = '/api/password-reset/'

// Register user
export const resetService  = async (data) => {
  const {id, token} = data[1]
  const password = data[0]
  const response = await axios.post(API_URL +`${id}/${token}` , password)

  return response.data
}


