const fs = require('fs')
const fetch = require('node-fetch')

const url = 'https://jsonplaceholder.typicode.com/posts';

const fetchData = fetch(url)
fetchData.then(response => {
    return response.json()
})
    .then(data => {
      let result = JSON.stringify(data, null, 1)
        //console.log(result);
       fs.writeFile('./result/posts.json', result, (err) => {
            if(err) throw err
            console.log(result);
    });
 
})



