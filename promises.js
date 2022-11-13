
const posts=[
    {title:'Post One', body:'This is post one',createdAt:Date.now()},
    {title:'Post two', body:'This is post two',createdAt:Date.now()}
];


function getPosts() {
    setTimeout(() => {
       let output = '';
       posts.forEach((post) => {
            output += `<li>${post.title} created ${(Date.now()-post.createdAt)/1000}sec ago</li>`;
        });        
        document.body.innerHTML = output;
    }, 1000);
}
getPosts();


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;
            if(!err) {
                resolve();
            } else {
              reject('Error: Something Went Wrong');
            }
        }, 2000);
    }); 
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>=0){
                resolve(posts.pop());
            } else {
                reject('Error : Array Is Empty');
            }
        }, 1000);
    });
}


createPost({title:'Post Three', body: 'this is Post Three',createdAt:Date.now() })
    .then(() => {
     getPosts();
        deletePost().then(() => {
        getPosts();
            deletePost().then(() => {
            getPosts();
                deletePost().then(() => {
                getPosts();     
                    deletePost().then(() => {})
                    .catch((err) => {
                        console.log('inside catch block', err)
                    })
                })
            })  
        })
    })    
    .catch(err => console.log(err))
   

    // createPost({title:'Post Four', body: 'this is Post Four',createdAt:Date.now() })
    // .then(() => {
    //     getPosts();
    //     deletePost().then(() => {
    //         getPosts();
    //     })
    // })
    


// async function init(){    
// await createPost({ title:'post Three', body: 'this is Post Three'}).then(getPosts).catch(err => console.log(err)),createPost({ title:'post Four', body: 'this is Post Four'});
// //  getPosts();
// }
// init();



// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data); 
// }
// fetchUsers();



//promise All
const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>{
 setTimeout(resolve, 2000 , 'GoodBye');
});
 // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([promise1, promise2, promise3])
.then(value => console.log(value));


const User ={
    username: "Vivek",
    lastActiveTime : '17 Feb'
}


updateLastActiveTime = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            User.lastActiveTime = new Date.getTime();
        },2000);
    });
}


 
