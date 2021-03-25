import React from "react";

const Card = () => {
  return (
    <div className="cointainer">
      <h3 className="text-center mt-3 mb-3">Tarjeta crypto</h3>
      <p className="text-center">
        Anotate en la lista de espera para recibir tu Lemon Card en cuanto este
        disponible!
      </p>
      <div className="col-12 text-center">
        <img src="/lemon-card2.png" className="m-4 img-fluid" />
      </div>
      <div className="row text-center">
        <div className="col-6">
          <img
            src="/cryptos-card.png"
            className="m-2"
            width="52px"
            height="52px"
          />
          <p>Usá tus cryptos</p>
        </div>
        <div className="col-6">
          <img
            src="/cashbacks-card.png"
            className="m-2"
            width="52px"
            height="52px"
          />
          <p>Generá intereses</p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-6">
          <img
            src="/international-card.png"
            className="m-2"
            width="52px"
            height="52px"
          />

          <p>Internacional y sin costo</p>
        </div>
        <div className="col-6">
          <img src="/btc-card.png" className="m-2" width="52px" height="52px" />

          <p>Cashbacks</p>
        </div>
      </div>

      <div className="row">
      <button
                type="button"
                class="btn btn-lg btn-info rounded2 border-0 mx-auto m-4 text-uppercase"
              >
                Reserva la tuya
              </button>
      </div>

      <p className="text-center">
        Si ya pediste tu Lemon Card no hace falta que te anotes de nuevo.
        Próximamente lanzamos las primeras 500!
      </p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Card;
