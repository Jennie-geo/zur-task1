// const fetch = require('node-fetch')
//     const { writeFile } = require('fs')

//     const url = 'https://jsonplaceholder.typicode.com/posts/1';
    
//     let content
           
//     async function fetchData() {
//         content = await fetch(url).then(results => {
//             if (results) {
//                 return results.json()
//             }
     
//         })
//         .then(json => {
//            writeFile('./result/posts.json',  content, (err) => {
//                 if (err) throw err
//                 console.log('Json data written to the file')
//                 console.log(json)   
//               })
//           })
//         }
//     fetchData()

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



// const fs = require('fs');
// const fetch = require('node-fetch')

// let jsonData = function(){
// let data = fetch('https://jsonplaceholder.typicode.com/posts/1');
// data.then(doc => {
//    return doc.json().then(result => {
//        console.log(`result: ` + result);
//    });
// })
// }
// let response = jsonData()
// fs.writeFile('./result/posts.json', response, (err) => {
//     if(err) throw err
//     console.log(response)
// })
//jsonData()
///////////////
//console.log(result);
//  let result = jsonData()
// fs.writeFile('./result/posts.json', result, (err) => {
//     if(err) throw err
// console.log(result)

//     console.log('Data created in the new file')
// })
console.log('i succeeded in creating the data');


// const fetch = require('node-fetch')
//     const { writeFile } = require('fs')

//     const url = 'https://jsonplaceholder.typicode.com/posts/1';
    
//     let content
           
//     async function fetchData() {
//         content = await fetch(url).then(results => {
//             if (results) {
//                 return results.json()
//             }
     
//         })
//         .then(json => {
//            writeFile('./result/posts.json',  content, (err) => {
//                 if (err) throw err
//                 console.log('Json data written to the file')
//                 console.log(json)   
//               })
//           })
//         }
//     fetchData()