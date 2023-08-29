import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import peliculas from "./peliculas";
import Paginacion from "./Paginacion";
import { useState } from "react";

function Listado() {
  const [pagina, setPagina] = useState(1);
  return (
    <PageWrapper>
      {peliculas.map((p) => (
        <Pelicula
          titulo={p.titulo}
          calificacion={p.calificacion}
          director={p.director}
          actores={p.actores}
          fecha={p.fecha}
          duracion={p.duracion}
          img={p.img}
        >
          {p.description}
        </Pelicula>
      ))}

      <Paginacion
        pagina={pagina}
        total={4}
        onChange={(pagina) => setPagina(pagina)}
      ></Paginacion>
    </PageWrapper>
  );
}

export default Listado;
