import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./logo/Logo"

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <div id="container">
          <Logo />
          <div id="subtitle">
                <p id="A">Places</p>
                <p id="B">Number</p>
              </div>
          <div id="location">
          {data.map((el, i) => {
            return ( 
            <>
              <div>
              <img id="img" key={i}src={el.photo}/>
              <div id="info">
                <div id="date">
                  <div id="box">
                  <p key={i}>{el.superHost}</p>
                  <p key={i}>{el.type} .</p>
                  <p key={i}>{el.beds}</p>
                  </div>
                  <div id="star">
                  <svg className="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <p key={i}>{el.rating}</p>
                  </div>
                </div>
                <p id="title" key={i}>{el.title}</p>
              </div>
              </div>
            </>
            )
          })}
          </div>
      </div>
    </>
  );
}

export default App;
