let titleele = document.getElementById("title") as HTMLInputElement
let descriptionele = document.getElementById("description") as HTMLInputElement
let statusele = document.getElementById("status") as HTMLSelectElement
let dateele = document.getElementById("dueDate") as HTMLInputElement
let formele = document.querySelector("form") as HTMLFormElement

interface Todo{
    
    title : string,
    desc : string,
    status:string,
    date : Date
}
formele.addEventListener("submit",(e)=>{
    e.preventDefault()
   const object : Todo = {
    title : titleele.value,
    desc : descriptionele.value,
    status : statusele.value,
    date : new Date(dateele.value)

   }
    fetch(`http://localhost:3000/data`,{
        method : "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body : JSON.stringify(object)
    })
    .then(r=>r.json())
    .then((data)=>{console.log(data)})
    .catch(e=>console.log(e))
})