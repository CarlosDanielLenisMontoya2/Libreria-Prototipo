    let url = "http://localhost:8081/libreria-services/v1/todos";
        fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.error(error));

        const mostrarData = (data) => {
            console.log(data);
            let body = '';
            for (let i = 0; i < data.length; i++) {
                body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].edad}</td><td>${data[i].libro}</td><td>${data[i].unidades}</td></tr>`;
            }
            document.getElementById('data').innerHTML = body;
        }
        