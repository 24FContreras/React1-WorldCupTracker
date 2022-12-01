import { useState } from "react";

const Busqueda = (props) => {
  return (
    <section className="buscador">
      <h3>Buscar por Pais</h3>

      <form action="">
        <label htmlFor="searchbar">Busqueda por Pais</label>
        <input
          name="searchbar"
          type="text"
          onChange={props.setSearch}
          value={props.value}
        />

        <div>
          <input
            type="radio"
            name="modoLista"
            id="todos"
            value="todos"
            checked={props.data === "todos" ? true : false}
            onChange={props.chooseData}
          />
          <label htmlFor="todos">Ver Todos</label>
          <input
            type="radio"
            name="modoLista"
            id="finalizado"
            value="finalizado"
            checked={props.isChecked}
            onChange={props.chooseData}
          />
          <label htmlFor="finalizado">Ver finalizados</label>
          <input
            type="radio"
            name="modoLista"
            id="proximos"
            value="proximos"
            checked={props.isChecked}
            onChange={props.chooseData}
          />
          <label htmlFor="proximos">Ver Próximos Partidos</label>
        </div>
      </form>
    </section>
  );
};

export default Busqueda;
