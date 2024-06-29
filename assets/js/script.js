document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/data/personajes.json')
        .then(response => response.json())
        .then(personajes => {
            const contenedor = document.getElementById('personajes');

            personajes.forEach(personaje => {
                const col = document.createElement('div');
                col.classList.add('col-md-4');

                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = personaje.imagen;
                img.classList.add('card-img-top');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = personaje.nombre;

                const cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.innerHTML = `
                    <strong>Edad:</strong> ${personaje.edad} <br>
                    <strong>Ocupación:</strong> ${personaje.ocupacion}
                `;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                card.appendChild(img);
                card.appendChild(cardBody);
                col.appendChild(card);

                contenedor.appendChild(col);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});

/*
//Metodo IndexOf & LastIndexOf & Includes

let frutas = ["manzana", "banana", "cereza", "durazno", "banana", "fresa", "mandarina","papaya"]; //Array que almacena elementos 

let frutaBuscada = "papaya"; //Especificamos el elemento que vamos a buscar

console.log(frutas.indexOf(frutaBuscada)); //Realiza la busqueda del elemento de izquierda a derecha e imprime su indice
console.log(frutas.lastIndexOf(frutaBuscada)); //Realiza la busqueda del elemento de derecha a izquierda e imprime su indice
console.log(frutas.lastIndexOf(frutaBuscada,2)); //Realiza la busqueda del elemento repetido e imprime su indice

console.log(frutas.includes(frutaBuscada)); //Realiza la busqueda del elemento, e imprime un valor booleano (true/false)

 */
