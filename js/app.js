// (()=>{
// const Datas = "https://api.github.com/users/mojombo"
// fetch(Datas)
// .then(res => res.json())
// .then(data =>{

//       const ApiInfor = document.querySelector(".ApiInfor")
//             const render = `<div>
//             <div>${data.public_repos}</div>
//             </div>`  
            
//             ApiInfor.innerHTML += render

//             // console.log(Data);
// })
// })()


const Search = document.querySelector('#Search')

Search.addEventListener('click', ()=>{
      const input = document.querySelector('#input').value
      let Inputs = input.split(' ').join('')
      // alert(Inputs)
      const Datas = "https://api.github.com/users/"+Inputs
      fetch(Datas)
      .then(res => res.json())
      .then(data => {
            const ApiInfor = document.querySelector(".ApiInfor")
            const render = `<div>
            <div><img src=${data.avatar_url}></div>
            <div>${data.login}</div>
            </div>`  
            
            ApiInfor.innerHTML += render

      console.log(data)
      })
})





