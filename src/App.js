import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import peliculas from "./peliculas";

function App() {
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
    </PageWrapper>
  );
}

export default App;
