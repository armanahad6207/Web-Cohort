// function getUser() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res({ id: 1, user: "arman" });
//     }, 1000);
//   });
// }
// function getPost(postid) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(["title1", "title2"]);
//     }, 1000);
//   });
// }

// function getComent(cmt) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(["great Post ", "amazing post", "Looking awesome"]);
//     }, 1000);
//   });
// }
// // chained Promise this is also called flat promise chaining
// getUser().then((data) => {
//   console.log(data);
//   return getPost(data.id);
// }).then((data)=>{
// console.log(data)
// return getComent(data[0])
// }).then((data)=>{
//   console.log(data)
// }).finally(()=>{
//     console.log("fetched all data")
// });


// fake api call

function fakeApiCall(endpoint){

    const data = {
        user : ["arman" , "adi" , "anil"],
        post : ["amazing" , "nice janam" , "thats awosem"]
    }
  let delay = Math.random()*2000 + 1000
  return new Promise((res,rej)=>{
   setTimeout(() => {
      res(data[endpoint])
   }, delay);
  })
}

fakeApiCall("user").then((data)=>{
    console.log(data)
})

fakeApiCall("post").then((data)=>{
    console.log(data)
})