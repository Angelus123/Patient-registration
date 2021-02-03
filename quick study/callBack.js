
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

    }, 1000);


} 
const createPost = (post, callback) => {
    setTimeout(()=>{
       posts.push(post);
       callback();

    }, 1000);

}


createPost({title:'Post Three', body:'This is post Three'}, getPosts) 