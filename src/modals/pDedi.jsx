const Dedicaces = ({ id }) => {
  return (
    <div className="dedicaces">
      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-secondary"
                id="staticBackdropLabel"
              >
                Page de dédicaces
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start text-secondary">
              <ul>
                <li>Elle doit etre facultative</li>
                <li>
                  {" "}
                  Elle doit etre personnelle et s'adresse aux parents, aux
                  proches, aux amis...
                </li>
                <li>Utiliser le pronom « Je »</li>
                <li> Elle ne porte pas de numéro de bas de page.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dedicaces;
