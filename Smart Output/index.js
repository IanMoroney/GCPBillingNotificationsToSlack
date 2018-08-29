const slack = require('slack');
const BOT_ACCESS_TOKEN = 'xxxx-111111111111-abcdefghidklmnopq';
const CHANNEL = 'general';

exports.subscribe = (event) => {

    console.log('[INFO] Subscribe event recieved')
    console.log(event); 
    console.log('[INFO] Raw data.data payload')
    console.log(event.data);
    console.log('[DEBUG] Parsing event.data.data to JSON')

    var jsonData =  JSON.parse(Buffer.from(event.data, 'base64').toString());
    console.log('[INFO] data.data conversion to JSON object')
    console.log(jsonData);

    console.log('[INFO] Sending message to slack ')
    return slack.chat.postMessage({
        token: BOT_ACCESS_TOKEN,
        channel: CHANNEL,
        text: 'We are exceeding our Google budget! ' + jsonData.costAmount + ' of ' + jsonData.budgetAmount + ' has been spent',
    });
};