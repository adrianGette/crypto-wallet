import React from 'react';

const GoTo = () => {
    return (
        <div className="container-fluid">
        <h3 className="text-center mt-4 mb-2">Saldo total AR$</h3>
        <h3 className="text-center mb-5">AR$ 0</h3>

        <div className="row m-4 d-flex align-items-center">
          <div className="col-xs-12 d-flex justify-content-center mb-2 mx-xs-auto">
            <img src="/pesos-card2.png" className="rounded-circle mx-xs-auto" width="60px"/>
          </div>
          <div className="col-xs-12 d-flex justify-content-center mx-xs-auto">
            <p className="ml-2">Bienvenido Adrián Gette</p>
          </div>
        </div>
        



      <div className="card-deck">
        <div className="card bg-primary shadow2 mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col">
                    <img src="/bitcoin.png" className="m-2" width="42px" height="42px"/>
                  </div>
              </div>
              
            <p className="card-text text-white m-0 p-0">Comprar</p>
            <p className="card-text text-white m-0 p-0">criptomonedas</p>
          </div>
        </div>

        <div className="card bg-primary shadow2 mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col">
                    <img src="/cargar-plata.png" className="m-2" width="42px" height="42px"/>
                  </div>
              </div>
              
            <p className="card-text text-white m-0 p-0">Cargar</p>
            <p className="card-text text-white m-0 p-0">plata</p>
          </div>
        </div>
        
        <div className="card bg-primary shadow2 mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col">
                    <img src="/pagar-con-lemon.png" className="m-2" width="42px" height="42px"/>
                  </div>
              </div>
              
            <p className="card-text text-white m-0 p-0">Pagar con</p>
            <p className="card-text text-white m-0 p-0">Lemon</p>
          </div>
        </div>

        <div className="card bg-primary shadow2 mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col">
                    <img src="/cobrar-con-lemon.png" className="m-2" width="42px" height="42px"/>
                  </div>
              </div>
              
            <p className="card-text text-white m-0 p-0">Cobrar con</p>
            <p className="card-text text-white m-0 p-0">Lemon</p>
          </div>
        </div>

        <div className="card bg-primary shadow2 mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col">
                    <img src="/enviar a amigos.png" className="m-2" width="42px" height="42px"/>
                  </div>
              </div>
              
            <p className="card-text text-white m-0 p-0">Enviar a</p>
            <p className="card-text text-white m-0 p-0">amigos</p>
          </div>
        </div>

        <div className="card bg-primary shadow2 mb-4 rounded">
          <div className="card-body text-center">
              <div className="row d-flex flex-row">
                  <div className="col">
                    <img src="/ver-billeteras.png" className="m-2" width="42px" height="42px"/>
                  </div>
              </div>
              
            <p className="card-text text-white m-0 p-0">Ver</p>
            <p className="card-text text-white m-0 p-0">billeteras</p>
          </div>
        </div>
      </div>

      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
    );
}
 
export default GoTo;