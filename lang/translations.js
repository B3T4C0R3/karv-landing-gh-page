import axios from 'axios'
export default async (context, locale) => {
  return await axios
    .get(`https://api.betacore.nl/language/5fcbaef0da2e2ee081cb7425`)
    .then(res => {
      var language = res.data.find(language => language.code === locale)
      return language.translations
    })
}
