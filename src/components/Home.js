import React from "react";

const Home = () => {
  return (
    <div className="container-fuid">
        
      <div className="row">
        <div className="col">
          <h3 className="pt-3 text-center">Saldo disponible</h3>
          <h3 className="pt-3 text-center">AR$ 0</h3>
        </div>
      </div>

      

      <div className="row">
        <div className="col">
          <p className="pt-3 text-left ml-4">Cuentas</p>
          <button
            type="button"
            className="btn btn-info ml-4 btn-lg rounded-circle"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col">
          <p className="pt-3 text-right mr-4">Depositar</p>
          <button
            type="button"
            className="btn btn-info float-right mr-4 btn-lg rounded-circle"
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
        
      </div>
      
      <h3 className="pt-5 text-left">Actividad</h3>
      
      

      <hr className="w100 mt-4 mb-4" />

      <div className="row text-center d-flex justify-content-around align-content-center mt-4">
        <div className="col-sm-12 col-md-4">
          <h1 className="ml-3">
            <span className="badge badge-secondary ml-3">
              <i className="fa fa-line-chart" aria-hidden="true"></i>
            </span>
          </h1>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 font-weight-bold">Interés Ganado BTC</h6>
          <p className="text-gray">
            Mar, 15 2021{" "}
            <i
              className="fa fa-check-circle-o text-success"
              aria-hidden="true"
            ></i>
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 text-success">BTC +0.00000166</h6>
        </div>
      </div>

      <hr className="w100 mt-4 mb-4" />

      <div className="row text-center d-flex justify-content-around align-content-center mt-4">
        <div className="col-sm-12 col-md-4">
          <h1 className="ml-3">
            <span className="badge badge-secondary ml-3">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </span>
          </h1>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 font-weight-bold">Transferencia de ETH</h6>
          <p className="text-gray">
            Mar, 15 2021{" "}
            <i
              className="fa fa-check-circle-o text-success"
              aria-hidden="true"
            ></i>
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 text-success">ETH +0.00004</h6>
        </div>
      </div>

      <hr className="w100 mt-4 mb-4" />

      <div className="row text-center d-flex justify-content-around align-content-center mt-4">
        <div className="col-sm-12 col-md-4">
          <h1 className="ml-3">
            <span className="badge badge-secondary ml-3">
              <i className="fa fa-rocket" aria-hidden="true"></i>
            </span>
          </h1>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 font-weight-bold">Transferencia de ETH</h6>
          <p className="text-gray">
            Mar, 15 2021{" "}
            <i
              className="fa fa-check-circle-o text-success"
              aria-hidden="true"
            ></i>
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 text-danger">ETH -0.00004</h6>
        </div>
      </div>

      <hr className="w100 mt-4 mb-4" />

      <div className="row text-center d-flex justify-content-around align-content-center mt-4">
        <div className="col-sm-12 col-md-4">
          <h1 className="ml-3">
            <span className="badge badge-secondary ml-3">
              <i className="fa fa-btc" aria-hidden="true"></i>
            </span>
          </h1>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 font-weight-bold">Compra de Criptos</h6>
          <p className="text-gray">
            Feb, 22 2021{" "}
            <i
              className="fa fa-check-circle-o text-success"
              aria-hidden="true"
            ></i>
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 text-danger">AR$ -20000.00</h6>
        </div>
      </div>

      <hr className="w100 mt-4 mb-4" />

      <div className="row text-center d-flex justify-content-around align-content-center mt-4">
        <div className="col-sm-12 col-md-4">
          <h1 className="ml-3">
            <span className="badge badge-secondary ml-3">
              <i className="fa fa-btc" aria-hidden="true"></i>
            </span>
          </h1>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 font-weight-bold">Compra de Criptos</h6>
          <p className="text-gray">
            Feb, 22 2021{" "}
            <i
              className="fa fa-check-circle-o text-success"
              aria-hidden="true"
            ></i>
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 text-success">BTC +0.00222411</h6>
        </div>
      </div>

      <hr className="w100 mt-4 mb-4" />

      <div className="row text-center d-flex justify-content-around align-content-center mt-4">
        <div className="col-sm-12 col-md-4">
          <h1 className="ml-3">
            <span className="badge badge-secondary ml-3">
              <i className="fa fa-university" aria-hidden="true"></i>
            </span>
          </h1>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 font-weight-bold">Carga de Saldo AR$</h6>
          <p className="text-gray">
            Feb, 22 2021{" "}
            <i
              className="fa fa-check-circle-o text-success"
              aria-hidden="true"
            ></i>
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6 className="ml-3 text-success">AR$ +20000.00</h6>
        </div>

        <hr className="w100 mt-4 mb-4" />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
