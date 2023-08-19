let boxele = document.getElementById('appendHere') as HTMLDivElement
const popupForm = document.getElementById('popupForm')  as HTMLFormElement
const closePopup = document.getElementById('closePopup') as HTMLButtonElement

//edit
let submiteditele = document.getElementById("submitedit") as HTMLButtonElement
let editDateele = document.getElementById("editDate") as HTMLInputElement
let editStatusele = document.getElementById("editStatus") as HTMLInputElement
let editDescriptionele = document.getElementById('editDescription') as HTMLInputElement
let editTitleele = document.getElementById("editTitle") as HTMLInputElement
let editidele = document.getElementById("editid") as HTMLInputElement

// Instance
type TodoAdd={
    id:number,
    title:string,
    desc:string,
    status:string,
    date:Date
}


fetchAndRender()
function fetchAndRender() : void{
    fetch(`http://localhost:3000/data`)
    .then(r=>r.json())
    .then((data)=>{console.log(data); DisplayData(data);Delete();EditTodo()})
    .catch(e=>console.log(e))
}


const DisplayData = (data: []) : void => {
    boxele.innerHTML += `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${data.map((ele : any, i) => (
          `<div class="bg-white p-6 rounded-md shadow-md">
              <h2 class="text-xl font-semibold mb-2">Title: ${ele.title}</h2>
              <p class="text-gray-700 mb-4">Description: ${ele.desc}</p>
              <div class="flex justify-between items-center">
                <div class="text-green-600 font-semibold">Status: ${ele.status}</div>
                <div class="text-gray-500">Date: ${ele.date}</div>
              </div>
              <div class="mt-4 flex justify-end space-x-2">
                <button data-id=${ele.id}  class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 editele">Edit</button>
                <button data-id=${ele.id}  class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 deleteele">Delete</button>
              </div>
            </div>`
        )).join("")}
      </div>
    `;
  }
  
function Delete() : void{
    let deletebtn = document.querySelectorAll(".deleteele")
    for(let btn of deletebtn){
        btn.addEventListener("click",(e:any) =>{
            let id :number = e.target.dataset.id
            fetch(`http://localhost:3000/data/${id}`,{
                method : "DELETE"
            })
            .then(r=>r.json())
            .then((data)=>{
                console.log(data)
                DisplayData(data)
                // fetchAndRender(data)
            })
            .catch(e=>console.log(e))


        })
    }
}

function EditTodo() : void{
    let editbtn = document.querySelectorAll(".editele")
    for(let btn of editbtn){
        btn.addEventListener("click",(e:any) =>{
            popupForm.classList.remove('hidden');
            let id :number = e.target.dataset.id
            fetch(`http://localhost:3000/data/${id}`)
            .then(r=>r.json())
            .then((data)=>{
                console.log(data)
                editidele.value = data.id
                editTitleele.value = data.title
                editDescriptionele.value = data.desc
                editStatusele.value = data.status
                editDateele.value = data.date
                
            })
            .catch(e=>console.log(e))


        })
    }
}






closePopup.addEventListener('click', () => {
  popupForm.classList.add('hidden');
});


afterEditForm()
function afterEditForm():void{
    
submiteditele.addEventListener("click",()=>{
    const object : TodoAdd = {
        id : parseInt(editidele.value),
        title:editTitleele.value,
        desc : editDescriptionele.value,
        status:editStatusele.value,
        date : new Date(editDateele.value)

    }
    fetch(`http://localhost:3000/data/${editidele.value}`,{
        method : "PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(object)
    })
    .then(r=>r.json())
    .then((data)=>{
        console.log(data);
        editidele.value = "";
        editTitleele.value = ""
        editDescriptionele.value = ""
        editStatusele.value = ""
        editDateele.value= ""
    })
    .catch(e=>console.log(e))
})
}