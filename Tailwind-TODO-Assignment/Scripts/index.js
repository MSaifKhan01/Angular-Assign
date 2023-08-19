"use strict";
let titleele = document.getElementById("title");
let descriptionele = document.getElementById("description");
let statusele = document.getElementById("status");
let dateele = document.getElementById("dueDate");
let formele = document.querySelector("form");
formele.addEventListener("submit", (e) => {
    e.preventDefault();
    const object = {
        title: titleele.value,
        desc: descriptionele.value,
        status: statusele.value,
        date: new Date(dateele.value)
    };
    fetch(`http://localhost:3000/data`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
        .then(r => r.json())
        .then((data) => { console.log(data); })
        .catch(e => console.log(e));
});
