import React from "react";
import perfil from "../../assets/Img/perfil.png";

const Header = () => {
  return (
    <>
      <div id="banner">
        {/* <img src="./img/ocean-g177104987_1920.jpg" alt=""></img> */}
        <div className="divNombre">
          <h1 className="nombre">Franco Herrera Ruiz</h1>
          <h2>
            <em className="subtitulo">Programador Web FullStack</em>
          </h2>
        </div>

        <div id="foto" style={{ display: "flex" }}>
          <img src={perfil} alt=""></img>
        </div>
        <br />
      </div>
      {/* <!-- Acerca de mi --> */}
      <section
        className="content-section  text-dark text-center  p-5"
        id="AcercaDeMi"
      >
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div>
            <h2 className="lead mb-5 descripcion">
              Soy Franco Herrera Ruiz de Río Cuarto, Córdoba, Argentina.
              <br />
              Actualmente soy Desarrollador Web FullStack y Chef Profesional.
              <br />
              Mi meta es continuar en mi formacion como programador, para
              acceder y manejar diferentes lenguajes.
              <br />
              Considero que siempre hay algo para hacer y aprender ante un
              desafio.
            </h2>
          </div>
        </div>
        {/*  <a className="button boton" href="#services">Experiencia</a> */}
      </section>
    </>
  );
};

export default Header;
