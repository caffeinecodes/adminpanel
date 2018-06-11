const fs = require('fs');
const moment = require('moment');
const cron = setInterval(() => {
    let date = moment().subtract(2, 'days', 'years');
    let yesterdayDate = date.format('YYYY-MM-DD');
    fs.readFile('./log/' + yesterdayDate + '-results.log', 'utf8', (err, data) => {
        if (data) {
            fs.unlink('./log/' + yesterdayDate + '-results.log', (err) => {
                console.log('file deleted successfully');
            });
        }
    });
}, 3600000);



