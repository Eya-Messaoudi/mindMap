const Remerciment = ({ id }) => {
  return (
    <div className="Remerciment">
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
                Page de remerciment
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
                <li>
                  Remercier les responsables de l'entreprise/l'organisme
                  d'accueil, les encadrants pédagogiques et professionnels et
                  toute personne qui a apporté une contribution au travail.
                </li>
                <li> Éviter les formules trop savantes ou trop chaleureuses</li>
                <li>Utiliser le pronom « Je ».</li>
                <li>
                  Respecter les normes de présentation des NOMS des personnes
                  adressées{" "}
                </li>
                <li>Elle ne porte pas de numéro de bas de page.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Remerciment;
