const key = process.env.API_KEY
const cors = 'https://cors-anywhere.herokuapp.com/'

export const projects = name => `https://api.behance.net/v2/users/${name}/projects?api_key=${key}`

export const singleProject = id => `${cors}https://api.behance.net/v2/projects/${id}?api_key=${key}`
