import axios from 'axios'

const firstApiUrl = 'https://registree-coding-challenge.glitch.me/cornell'
// let secondApiUrl = "https://registree-coding-challenge.glitch.me/stanford";

export default class DegreeService {
  getAllDegree () {
    return axios.get(`${firstApiUrl}`)
  }
}
