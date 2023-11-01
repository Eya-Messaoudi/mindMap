const TableMatiere = ({ id }) => {
  return (
    <div className="tableMat">
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
                Table de matiere
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
                  La table des matières reproduit les titres et sous-titres
                  contenus dans le travail et indique les pages où l'on peut les
                  retrouver dans le rapport
                </li>
                <li>
                  Il est recommandé de ne pas dépasser quatre niveaux de détails
                  (1, 1.1, 1.1.1, 1.1.1.1.){" "}
                </li>
                <li>
                  Elle doit être générée automatiquement moyennant les styles
                  utilisés pour les titres.
                </li>
                <li>
                  Les dédicaces, les remerciements, la liste des tableaux et la
                  table des figures ne doivent pas y figurer
                </li>
                <li>Elle doit être claire et détaillée</li>
                <li>
                  Les annexes doivent apparaître dans la table des matières et
                  être paginées également.
                </li>
                <li>
                  La page présentant la table des matières ne porte pas de
                  numéro de bas de page.
                </li>
                <li>
                  Il faut faire distinguer entre la table de matiéres et le
                  sommaire
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableMatiere;
