const request = require('request-promise');

const options = {
    'method': 'GET',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json'
};

request(options)
.then(function(response) {
    console.log(response);
})
.catch(function(err) {
    console.log(err);
});
