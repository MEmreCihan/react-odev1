import axios from "axios";


async function getData(n){
    const { data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${n}`);
    const { data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts/${n}`)

    return {user, posts}
}


export default getData;

