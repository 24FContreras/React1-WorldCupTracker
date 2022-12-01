import { useState } from "react";
import "./Busqueda.css";

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
          value={props.textvalue}
        />

        <fieldset>
          <legend>Filtrar</legend>
          <input
            type="radio"
            name="selectdata"
            id="data1"
            value="partidos"
            onChange={props.selectData}
            checked={props.mode === "partidos"}
          />
          <label htmlFor="data1">All Matches</label>
          <input
            type="radio"
            name="selectdata"
            id="data2"
            value="proximos"
            onChange={props.selectData}
            checked={props.mode === "proximos"}
          />
          <label htmlFor="data2">Next Matches</label>
          <input
            type="radio"
            name="selectdata"
            id="data3"
            value="pasados"
            onChange={props.selectData}
            checked={props.mode === "pasados"}
          />
          <label htmlFor="data3">Past Matches</label>
        </fieldset>
      </form>
    </section>
  );
};

export default Busqueda;
