let input =document.querySelector(".input ")
let submit = document.querySelector(".submit")

function findGitUser(user){
     return fetch(`https://api.github.com/users/${user}`).then((raw) =>{
                if(!raw.ok) throw Error("user not found")
                return raw.json()
     } )
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let username = input.value.trim();
    findGitUser(username).then((data)=>{
  displayDetails(data)
})
    
})





function displayDetails(data){

    document.querySelector(".details").innerHTML = ` <div class="flex flex-col sm:flex-row items-center gap-6">
        <img
          src="${data.avatar_url}"
          alt="User Avatar"
          class="w-24 h-24 rounded-full border-4 border-indigo-400 shadow-lg"
        />
        <div>
          <h2 class="text-2xl font-bold text-gray-800">${data.name}</h2>
          <p class="text-gray-600 text-sm">@${data.login}</p>
          <p class="text-gray-500 mt-2 text-sm">${data.bio} 🐙</p>
        </div>
      </div>

      <div class="mt-6 flex justify-around text-center text-sm text-gray-800">
        <div>
          <p class="font-bold text-xl">${data.public_repos}</p>
          <p class="text-gray-600">Repos</p>
        </div>
        <div>
          <p class="font-bold text-xl">${data.followers}</p>
          <p class="text-gray-600">Followers</p>
        </div>
        <div>
          <p class="font-bold text-xl">${data.following}</p>
          <p class="text-gray-600">Following</p>
        </div>
      </div>
    </div>`
}
