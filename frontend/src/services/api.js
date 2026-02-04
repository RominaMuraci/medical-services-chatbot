import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const checkAPIHealth = async () => {
  try {
    const response = await axios.get(`${API_URL}/health`, {
      timeout: 2000
    })
    return response.data.status === 'healthy'
  } catch (error) {
    return false
  }
}

export const sendMessage = async (message, useRAG = true) => {
  try {
    const response = await axios.post(
      `${API_URL}/chat`,
      {
        message: message,
        use_rag: useRAG
      },
      {
        timeout: 30000 // 30 seconds timeout for AI responses
      }
    )
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'API Error')
    } else if (error.request) {
      throw new Error('Cannot connect to API. Make sure it is running.')
    } else {
      throw new Error(error.message)
    }
  }
}

export const addDocuments = async (documents) => {
  try {
    const response = await axios.post(`${API_URL}/rag/add`, documents)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Failed to add documents')
  }
}

