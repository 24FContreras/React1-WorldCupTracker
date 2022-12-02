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
          <legend>By round</legend>
          <input
            type="radio"
            name="selectdata"
            id="data1"
            value="FS"
            onChange={props.selectData}
            checked={props.mode === "FS"}
          />
          <label htmlFor="data1">Groups Stage</label>
          <input
            type="radio"
            name="selectdata"
            id="data4"
            value="R16"
            onChange={props.selectData}
            checked={props.mode === "R16"}
          />
          <label htmlFor="data4">Round of 16</label>
          <input
            type="radio"
            name="selectdata"
            id="data5"
            value="QF"
            onChange={props.selectData}
            checked={props.mode === "QF"}
          />
          <label htmlFor="data5">Quarter-finals</label>
          <input
            type="radio"
            name="selectdata"
            id="data6"
            value="SF"
            onChange={props.selectData}
            checked={props.mode === "SF"}
          />
          <label htmlFor="data6">Semi-finals</label>

          <input
            type="radio"
            name="selectdata"
            id="data7"
            value="F"
            onChange={props.selectData}
            checked={props.mode === "F"}
          />
          <label htmlFor="data7">Final</label>
        </fieldset>
      </form>
    </section>
  );
};

export default Busqueda;
