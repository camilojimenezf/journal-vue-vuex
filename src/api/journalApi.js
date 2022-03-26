import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demos-c4816-default-rtdb.firebaseio.com'
})

export default journalApi
