const axios = require('axios').default;
const config = require('./config.js')
var productionKey = config.PRODUCTION_API_KEY;
var sandboxKey = config.SANDBOX_API_KEY;

//Replace MMS ID with the id from your system here
const mmsid = "99128574202441"
const holdings_id = "22511514500002441"
const item_pid = "23862752450002441"

//Switch between production and sandbox keys by changing sandboxKey to productionKey

const url = `https://api-na.hosted.exlibrisgroup.com/almaws/v1/bibs/${mmsid}/holdings/${holdings_id}/items/${item_pid}?apikey=${sandboxKey}`

//&format=json

axios.get(url)
.then(res => {

    console.log(res)

}).catch(error => {
    console.log(error)
})


