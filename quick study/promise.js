
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
]

const getPosts=() => {
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index) =>{
             output +=`<li>${post.title}</li>`
            output += post.title

            output += post.title
        })
        document.body.innerHTML =output;
        console.log(output)

    }, 1000)


} 
const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            const error = false;

            if (!error){
                resolve();
            }else {
                reject('Error: something went wrong')
            }
           
         }, 1000)

    })


}


// createPost({title:'Post Three', body:'This is post Three'})
// .then(getPosts)
// .catch(err => console.log(err)) 




//Async / Await
const init = async () =>{
    await createPost({ title: "Post Three", body: "This is post three"})
    getPosts();
}
init();
//async await  fetch
async function fetchUser(){
  const res = await  fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  console.log(data);

}

fetchUser();
//Promise.all
// const promise1 = Promise.resolve("Hello World")
// const promise2= 10;
// const promise3 =new Promise((resolve,reject) => {
//     setTimeout(resolve,2000,'Goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values))