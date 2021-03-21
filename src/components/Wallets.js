import React from "react";

const Wallets = () => {
  return (
    <div className="container-fluid">
      <div className="row pt-4 mb-5">
        <h3 className="mx-auto">Billeteras <button type="button" class="border-0 btn btn-info rounded-circle" data-toggle="modal" data-target="#myModal">
            <i class="fa fa-question-circle" aria-hidden="true"></i>
        </button></h3>
      </div>


        

  {/* <!-- The Modal --> */}
  <div class="modal fade" id="myModal">
    <div class="modal-dialog rounded">
      <div class="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <h4 class="modal-title text-dark font-weight-bold">Tus saldos</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body text-dark">
          El saldo disponible de tu billetera en pesos es administrado por Findi S.A.
          de acuerdo a la normativa vigente. Las inversiones y los productos financieros
          son administrados por Kuku S.R.L.
        </div>
        
        {/* <!-- Modal footer --> */}
        <div class="modal-footer">
          <button type="button" class="btn btn-block btn-info rounded border-0" data-dismiss="modal">Continuar</button>
        </div>
        
      </div>
    </div>
  </div>


      <div className="card-deck">
        <div className="card bg-primary shadow mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col-6">
                    <img src="/pesos.png" width="32px" height="32px"/>
                  </div>
                  <div className="col-6">
                      <p className="text-dark font-weight-bold">Pesos</p>
                  </div>
              </div>
              
            <p className="card-text text-dark">Saldo 0.00</p>
            <img src="/pesos-card2.png" className="img-fluid"/>
          </div>
        </div>

        <div className="card bg-primary shadow mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col-sm-6">
                    <img src="/tether.png" width="32px" height="32px"/>
                  </div>
                  <div className="col-sm-6">
                      <p className="text-dark font-weight-bold">Tether USD <i className="fa fa-line-chart billetera-icon" aria-hidden="true"></i></p>
                  </div>
              </div>
              
            <p className="card-text text-dark">Saldo 0.00000000</p>
            <p className="card-text text-dark"> ~ AR$ 0</p>
          </div>
        </div>
        
        <div className="card bg-primary shadow mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col-sm-6">
                    <img src="/bitcoin.png" width="32px" height="32px"/>
                  </div>
                  <div className="col-sm-6">
                      <p className="text-dark font-weight-bold">Bitcoin <i className="fa fa-line-chart billetera-icon" aria-hidden="true"></i></p>
                  </div>
              </div>
              
            <p className="card-text text-dark">Saldo 0.00247486</p>
            <p className="card-text text-dark"> ~ AR$ 21,450</p>
          </div>
        </div>

        <div className="card bg-primary shadow mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col-sm-6">
                    <img src="/ethereum.png" width="32px" height="32px"/>
                  </div>
                  <div className="col-sm-6">
                      <p className="text-dark font-weight-bold">Ethereum  <i className="fa fa-line-chart billetera-icon" aria-hidden="true"></i></p>
                  </div>
              </div>
              
            <p className="card-text text-dark">Saldo 0.00014500</p>
            <p className="card-text text-dark"> ~ AR$ 39</p>
          </div>
        </div>
      </div>

      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  );
};

export default Wallets;
