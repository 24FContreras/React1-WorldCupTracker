import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h3>
        <i className="fa-regular fa-futbol"></i> WORLD CUP TRACKER
      </h3>

      <p>Made by Franco Contreras for Desafío Latam</p>
      <p>
        Big thanks to Eric Stiens for his world cup public API,{" "}
        <a
          href="https://worldcupjson.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WorldCupJson
        </a>
      </p>
    </footer>
  );
};

export default Footer;
