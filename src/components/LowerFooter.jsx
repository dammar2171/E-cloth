import style from "../css/Footer.module.css";
const LowerFooter = () => {
  return (
    <div className={`container-fluid py-2 ${style.costumLowerFooter}`}>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <p className={`${style.costumCopyright}`}>
              copyright © 2025 E-cloth. Designed by{" "}
              <a href="https://porfolio-website-eight-lac.vercel.app">
                Dammar Bhatt
              </a>{" "}
              ~All right reserved.
            </p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};
export default LowerFooter;
