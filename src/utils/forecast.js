const request = require('request')


const forecast = (latitude,longitude,callback) => {
  // console.log(location)
    const url = 'https://api.darksky.net/forecast/d0d160ff68b7e7883a52cca4dc2b7d72/' + latitude + ',' + longitude+'?units=si' 
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. High Temperature is:  '+body.daily.data[0].temperatureHigh +'with a low of '+body.daily.data[0].temperaturelow+' There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}


module.exports = forecast