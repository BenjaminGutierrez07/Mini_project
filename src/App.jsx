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
          <div id="location">
          {data.map((el, i) => {
            return ( 
            <>
              <div>
              <img id="img" key={i}src={el.photo}/>
              <div id="info">
                <div id="date">
                <h1 key={i}>{el.superHost}</h1>
                <h1 key={i}>{el.type}</h1>
                <h1 key={i}>{el.beds}</h1>
                <h1 key={i}>{el.rating}</h1>
                </div>
                <h1 key={i}>{el.title}</h1>
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
