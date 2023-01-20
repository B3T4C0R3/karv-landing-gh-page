// import axios from 'axios'
// export default async function() {
//   return await axios
//     .get(`https://api.betacore.nl/language/5fcbaef0da2e2ee081cb7425`)
//     .then(res => {
//       var languages = []
//       res.data.forEach(language => {
//         languages.push({
//           code: language.code,
//           iso: language.iso,
//           name: language.name,
//           dir: language.dir,
//           file: 'translations.js'
//         })
//       })
//       return languages
//     })
// }

export default function() {
  return [
    {
      code: 'nl',
      iso: 'nl-NL',
      name: 'Dutch',
      file: 'nl-NL.js',
      dir: 'ltr'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en-US.js',
      dir: 'ltr'
    }
  ]
}
