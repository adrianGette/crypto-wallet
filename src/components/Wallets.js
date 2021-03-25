import React from "react";

const Wallets = () => {
  return (
    <div className="container-fluid">
      <div className="row pt-4 mb-5">
        <h3 className="mx-auto">
          Billeteras{" "}
          <button
            type="button"
            class="border-0 btn btn-info rounded-circle"
            data-toggle="modal"
            data-target="#myModal"
          >
            <i class="fa fa-question-circle" aria-hidden="true"></i>
          </button>
        </h3>
      </div>

      {/* <!-- The Modal --> */}
      <div class="modal fade" id="myModal">
        <div class="modal-dialog rounded">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title text-dark font-weight-bold">Tus saldos</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body text-dark">
              El saldo disponible de tu billetera en pesos es administrado por
              Findi S.A. de acuerdo a la normativa vigente. Las inversiones y
              los productos financieros son administrados por Kuku S.R.L.
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-block btn-info rounded border-0"
                data-dismiss="modal"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card-deck">
        <div className="card bg-light mb-4 rounded">
          <div className="card-body text-center">
            {/* <div className="row d-flex flex-row">
                  <div className="col-6">
                    <img src="/pesos.png" width="32px" height="32px"/>
                  </div>
                  <div className="col-6">
                      <p className="text-dark font-weight-bold">Pesos</p>
                  </div>
              </div>
              
            <p className="card-text text-dark">Saldo 0.00</p>
            <img src="/pesos-card2.png" className="img-fluid"/> */}
            <div className="row mb-0">
              <img src="/pesos-card2.png" className="img-fluid mx-auto" />
            </div>
            <br />
            
            
            
            <div className="row mb-0 pb-0 d-flex align-self-end">
              <p className="text-dark font-weight-bold mx-auto mt-1">Saldo 0.00</p>
            </div>
            <div className="row">
              <img
                src="/pesos.png"
                width="55px"
                height="55px"
                className="mx-auto mt-1"
              />
            </div>
            <div className="row mb-0 pb-0 d-flex align-self-end">
              <p className="text-dark font-weight-bold mx-auto mt-1">Pesos</p>
            </div>
          </div>
        </div>

        <div className="card bg-primary shadow1 mb-4 rounded-top">
        <img src="/grafico.jpeg" className="img-fluid mx-auto card-img-top border-dark" />
          <div className="card-body text-center">
            {/* <div className="row mb-0"> */}
              {/* <img src="/grafico.jpeg" className="img-fluid mx-auto card-img-top" /> */}
            {/* </div> */}
            <div className="row mt-3">
              <p className="card-text text-white col-12 font-weight-bold pt-0 mt-0">
                Saldo 0.00000000
              </p>
              <p className="card-text text-white col-12 font-weight-bold pt-0 mt-0">
                {" "}
                ~ AR$ 0
              </p>
            </div>
            <div className="row pt-0">
              <img
                src="/tether.png"
                width="42px"
                height="42px"
                className="mx-auto mt-4"
              />
            </div>
            <div className="row mb-0 pb-0">
              <p className="text-white font-weight-bold mx-auto mt-1">
                Tether USD
              </p>
            </div>
            <div className="row mb-0 pb-0">
              <p className="text-orange mx-auto mt-1">
                Lemon Earn
                <span className="badge badge-secondary ml-3">
              <i className="fa fa-line-chart icono-home" aria-hidden="true"></i>
            </span></p>
            </div>
          </div>
        </div>

        <div className="card bg-primary shadow1 mb-4 rounded-top">
        <img src="/grafico.jpeg" className="img-fluid mx-auto card-img-top border-dark" />
          <div className="card-body text-center">
            {/* <div className="row mb-0">
              <img src="/grafico.jpeg" className="img-fluid mx-auto p-3" />
            </div> */}
            <div className="row mt-3">
              <p className="card-text text-white col-12 font-weight-bold pt-0 mt-0">
                Saldo 0.00247486
              </p>
              <p className="card-text text-white col-12 font-weight-bold pt-0 mt-0">
                ~ AR$ 21,450
              </p>
            </div>
            <div className="row pt-0">
              <img
                src="/bitcoin.png"
                width="42px"
                height="42px"
                className="mx-auto mt-4"
              />
            </div>
            <div className="row mb-0 pb-0">
              <p className="text-white font-weight-bold mx-auto mt-1">Bitcoin</p>
            </div>
            <div className="row mb-0 pb-0">
              <p className="text-orange mx-auto mt-1">
                Lemon Earn
                <span className="badge badge-secondary ml-3">
              <i className="fa fa-line-chart icono-home" aria-hidden="true"></i>
            </span></p>
            </div>
          </div>
        </div>

        <div className="card bg-primary shadow1 mb-4 rounded-top">
        <img src="/grafico.jpeg" className="img-fluid mx-auto card-img-top border-dark" />
          <div className="card-body text-center">
            {/* <div className="row mb-0">
              <img src="/grafico.jpeg" className="img-fluid mx-auto p-3" />
            </div> */}
            <div className="row mt-3">
              <p className="card-text text-white col-12 font-weight-bold pt-0 mt-0">
                Saldo 0.00014500
              </p>
              <p className="card-text text-white col-12 font-weight-bold pt-0 mt-0">
                ~ AR$ 39
              </p>
            </div>
            <div className="row pt-0">
              <img
                src="/ethereum.png"
                width="42px"
                height="42px"
                className="mx-auto mt-4"
              />
            </div>
            <div className="row mb-0 pb-0">
              <p className="text-white font-weight-bold mx-auto mt-1">
                Ethereum
              </p>
            </div>
            <div className="row mb-0 pb-0">
              <p className="text-orange mx-auto mt-1">
                Lemon Earn
                <span className="badge badge-secondary ml-3">
              <i className="fa fa-line-chart icono-home" aria-hidden="true"></i>
            </span></p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Wallets;
