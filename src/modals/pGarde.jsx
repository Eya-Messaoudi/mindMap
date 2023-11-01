const Garde = ({ id }) => {
  return (
    <div className="garde">
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
                Page de garde interne
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-secondary text-start ">
              <ul>
                <li>
                  Une attention spéciale doit être accordée à cette page pour
                  éviter qu'elle contienne des fautes (orthographe, forme etc.).
                </li>
                <li>
                  Elle doit porter les indications nécessaires à
                  l'identification du stage, des encadrants et de l'auteur
                </li>
                <li>
                  {" "}
                  Elle doit etre imprimée sur un papier cartonné de couleur
                  neutre (blanc ou couleur sobre)
                </li>
                <li>
                  Elle doit étre suivie d'une page blanche puis d'une page de
                  titre interne, identique à la page de garde, mais imprimée sur
                  un papier normal (simple, en noir et blanc). Elles ne portent
                  pas de numéro de bas de page.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Garde;
