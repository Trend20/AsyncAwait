const posts=[
    { title: 'Post One', body:'This is post One'},
    { title: 'Post Two', body:'This is post Two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) =>{
            output += `<li>${post.title}</li>`;
        })
    })
}