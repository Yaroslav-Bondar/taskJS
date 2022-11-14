// https://learn.javascript.ru/task/rewrite-async
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch: 
//  function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404  


import fetch from 'node-fetch'

async function loadJson(url) {
    let res = await fetch(url)
    if(res.status == 200) {
        console.log(await res.json())
        return res.json()
    }
    throw new Error(res.status)
}
// loadJson('no-such-url')
// loadJson('https://api.github.com/users/your_login_here')
loadJson('https://api.github.com/users')
    .catch(err => console.log(err))
    .then(res => console.log(res))
// console.log(loadJson('https://api.github.com/users'))

// loadJson('djfk')
//     .catch(err => console.log(err))