import axios from 'axios'

const firstApiUrl = 'https://registree-coding-challenge.glitch.me/cornell'
const secondApiUrl = 'https://registree-coding-challenge.glitch.me/stanford'

const firstRequest = axios.get(firstApiUrl)
const secondRequest = axios.get(secondApiUrl)

export default class DegreeService {
  getAllDegree () {
    return axios
      .all([firstRequest, secondRequest])
      .then(
        axios.spread((...responses) => {
          return responses
        })
      )
      .catch(errors => {
        console.error(errors)
      })
  }
}
