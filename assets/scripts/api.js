// // const timeStamp = '16701768767'
// // const md5 = '1cabeff08a14389596a7a8ff7c703320'
// const timeStamp = '16701776337'
// const md5 = 'd55792f9cd8e3777325ebc6ea6ac1bfb'

// // const timeStamp = Number(new Date())
// // const md5 = '68157fa84f34e7991f394123c82efdad'

// fetch(`http://gateway.marvel.com/v1/public/characters/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=6`
// ).then((response)=>{
//     return response.json()
// }).then((jsonParsed) =>{
//     console.log(jsonParsed)
// })
import md5  from "md5";

const baseURL = 'http://gateway.marvel.com/v1/public/'
const publicKey = 'd419385fd4b78199469ba8ab33b5205c'
const privateKey = '7adfdd4326e585c176cb9768e4e8d13d0c86593f'
const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

fetch(`http://gateway.marvel.com/v1/public/characters/comics?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=6`)


