import axios from 'axios';

let http = {
  post: "",
  get: ""
}

const serverUrl = 'https://api.it120.cc/monsterthirteen/';

function formatUri(url) {
  let uri = ''
  uri = process.env.NODE_ENV === 'production' ? '../' + url: './' + url
  if (url.indexOf('http') > -1) uri = url
  return uri
} 

http.get = ( url, data) => {
  return new Promise((resolve, reject) => {
    axios.get(formatUri(serverUrl + url),{
      params: data
    })
    .then(res=>{
      resolve(res.data)
    })
  })
}

http.post = ( url, data, options = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(formatUri(serverUrl + url), data, options)
    .then(res=>{
      resolve(res.data)
    })
  })
}

export default http;