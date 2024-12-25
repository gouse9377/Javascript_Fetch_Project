let postStart = 0;
document.getElementById("loadpost").addEventListener("click",function(){
    loadposts(postStart);

});
    
function loadposts(username){
    const url= 'https://jsonplaceholder.typicode.com/posts';
    // const url= 'https://jsonplaceholder.org/users';

    fetch(url)
    .then(respone=>{
        if(!respone.ok){
            throw new Error('post is not found: ${response.status}');
        }
        return respone.json();
    })
    .then(useData => {
        const postsContainer = document.getElementById("posts");
        useData.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("posts");
            postElement.innerHTML = `     
             <div class="post-title">post #${post.id}: ${post.title} </div>
            <p>${post.body}</p>
            `;
            postsContainer.appendChild(postElement); 
        });
        postStart +=10;
    })
    .catch(error =>{
        console.error("Error fetching user:",error);
    });
    
}
