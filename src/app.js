const app = require('./server/server')
require('./database/db');
require('dotenv').config();
const axios= require ('axios');





const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})



axios.get ("https://jsonplaceholder.typicode.com/todos")
     .then ((result)=> {
        console.log (result);
     })
     .catch ((err)=>{
        console.log(err);
     })
axios.get ("https://jsonplaceholder.typicode.com/todos", {
   method: 'POST',
   body: JSON.stringify({
      userId: 9,
      id: 115,
      title: 'Carpe Diem',
      completed: false,
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   },
 })
     .then ((result)=> {
        console.log (result);
     })
     .catch ((err)=>{
        console.log(err);
     })

axios.get ("https://jsonplaceholder.typicode.com/todos", {
      method: 'PUT',
      body: JSON.stringify({
         userId: 5,
         id: 10,
         title: 'vivamus mia Lesbia et atque amemus',
         completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
        .then ((result)=> {
           console.log (result);
        })
        .catch ((err)=>{
           console.log(err);
        })

axios.get ("https://jsonplaceholder.typicode.com/todos/5", {
   method: 'DELETE',
 });

