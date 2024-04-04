import axios from 'axios';
const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
console.log(data);
