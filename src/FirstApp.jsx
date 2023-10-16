import Proptypes from "prop-types";

const saludo = {
  nombre: "Fernando",
  edad: 35,
  clave: "Ironman",
};
export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <code>{title}</code>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.number,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
  name: "Fernando",
};
