const axios = require('axios')
const url = require('url')
const api_base_url = 'https://od-api.oxforddictionaries.com/api/v2/'
const app_id = "0f889267"; // insert your APP Id
const app_key = "ff9d15c9bb7ca61e0bce37ebc0a50530"; // insert your APP Key
const wordId = process.argv[2];
const fields = "pronunciations";
const strictMatch = "false";
const request_url = url.resolve(api_base_url, `entries/en-us/${wordId}`);

async function getStarwarsPeople() {
    try {
        const response = await axios.get(request_url, {
            headers: {
                'app_id': app_id,
                'app_key': app_key
              }
        })
        const data = await response.data
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }
    
}
getStarwarsPeople()