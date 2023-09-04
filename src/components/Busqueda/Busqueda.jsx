import "./Busqueda.css";

const Busqueda = ({ setSearch, textvalue, selectData, changeOrder }) => {
  return (
    <article className="buscador">
      <form action="">
        <label htmlFor="searchbar">Search Country</label>
        <input
          name="searchbar"
          type="text"
          onChange={setSearch}
          value={textvalue}
        />

        <label htmlFor="selectdata">Filter by Stage</label>
        <select name="selectdata" id="selectdata" onChange={selectData}>
          <option value="First stage">Group Stage</option>
          <option value="Round of 16">Round of 16</option>
          <option value="Quarter-final">Quarter Finals</option>
          <option value="Semi-final">Semi Finals</option>
          <option value="Final">Final</option>
        </select>

        <label htmlFor="selectorder">Order</label>
        <select name="selectorder" id="selectorder" onChange={changeOrder}>
          <option value="First to last">First to last</option>
          <option value="Last to first">Last to first</option>
        </select>
      </form>
    </article>
  );
};

export default Busqueda;
