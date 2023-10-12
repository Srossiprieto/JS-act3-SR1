/*Bienvenidos de nuevo a la pizzeria de Nucba!🍕 

Para esta entrega vamos a estar mezclando el array de pizzas de la anterior entrega con el DOM y el Localstorage.

El ejercicio que deberán realizar es el siguiente:

👉 Crear un archivo HTML que tenga un input de tipo "number", un botón y un contenedor en el cual renderizar el resultado de la búsqueda que se haga. si

👉 Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) mediante el evento "submit" si están usando un formulario o bien el evento "click" si quieren manejarlo desde el botón. si

👉 Si el número ingresado en el input es valido(existe una pizza cuyo id coincida con el número ingresado en el input), se deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input. La card deberá contener mínimamente el nombre, imagen y y precio de la pizza (Estilizarlo con CSS 🎨) 

🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. El resto del contenido de nuestro contenedor se deberá pisar por lo nuevo.

El input y el botón no se debén pisar, ya que debemos poder seguir haciendo busquedas.

¿Cuál es el desafío final?

Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página. No guardar en el localstorage en caso de que lo buscado haya generado un error, solamente persistir los datos cuando se haya encontrado una pizza.
*/

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const btn = document.getElementById('button');
const input = document.getElementById('input-pizza');
const box = document.getElementById('container');
const small = document.getElementById('small');

const pizza = JSON.parse(localStorage.getItem('pizza')) || null;

const saveLocalStorage = (pizza) => {
  localStorage.setItem('pizza', JSON.stringify(pizza));
}


const renderCard = (pizza) => {

  return `
  <div class="card-container2">
    <img src="${pizza.imagen}" alt="${pizza.nombre}" class="pizzas-img2">
    <div class="card-info">
        <div class="pizza-name2">
            <h3>
                ${pizza.nombre}
            </h3>
        </div>
        <div class="pizza-info2">
            <p>Ingredientes: ${pizza.ingredientes.join(', ')}</p>
            <p>$${pizza.precio}</p>
        </div>
    </div>
  </div>
  `;
  
}

const pizzaValue = () => {
  const value = input.value;
  const pizza = pizzas.find(e => Number(e.id) === Number(value));
  console.log(pizza)
  if(!pizza){
    small.textContent = 'Pizza inexistente.';
    box.innerHTML = '';
    localStorage.removeItem('pizza')
  }
  
  box.innerHTML = renderCard(pizza);
  saveLocalStorage(pizza)
  small.textContent = '';
}

const renderPizza = () => {
  if(!pizza) return;
  box.innerHTML = renderCard(pizza);
}




const init = () => {
  document.addEventListener('DOMContentLoaded', renderPizza);
  btn.addEventListener('click', pizzaValue); 
}


init()























