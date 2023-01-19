

fetch("http://localhost:3000/")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        console.log(element);
        const h1 = document.createElement('h2');
        h1.innerHTML="ID : "+element.id+" -- Nombre: "+element.nombre+" -- Apellidos: "+element.apellidos;
        document.body.appendChild(h1);
    }); 
})



