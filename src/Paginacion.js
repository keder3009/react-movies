// import { useEffect } from "react";

export default function Paginacion(props) {
  const TotalPages = () => {
    const resultados = [];
    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      resultados.push(
        <a
          onClick={() => props.onChange(pagina)}
          className={props.pagina === pagina ? "active" : ""}
        >
          {pagina}
        </a>
      );
    }
    return resultados;
  };

  // esto es equivalente a un whatch de vue
  // useEffect(() => {
  //   alert("esto es un whatch");
  // }, [props.pagina]);
  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Page {props.pagina} of {props.total}:
        </span>
        {TotalPages()}
      </div>
    </div>
  );
}
