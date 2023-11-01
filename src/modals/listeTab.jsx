const ListeTab = ({ id }) => {
  return (
    <div className="listeTab">
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
                Liste des tableaux, des figures, des illustrations, des sigles,
                des symboles et des abréviations
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start text-secondary">
              <ol>
                <li>
                  Liste des tableaux
                  <ul>
                    <li>
                      Si le rapport comporte plus de trois tableaux, une liste
                      des tableaux doit etre présentée après la table des
                      matières.{" "}
                    </li>
                    <li>
                      Elle doit présenter le numéro et le titre de chaque
                      tableau , 'e numéro correspond à l'ordre d'apparition du
                      tableau dans un chapitre
                    </li>
                    <li>
                      {" "}
                      Les tableaux doivent avoir une légende placée au-dessus et
                      à gauche.
                    </li>
                  </ul>
                </li>
                <li>
                  Liste des figures
                  <ul>
                    <li>
                      Suit les mêmes règles de présentation que celles prévues
                      pour la liste des tableaux.
                    </li>
                    <li> Les figures doivent être claires et lisibles.</li>
                    <li>
                      Toutes les figures doivent avoir une légende avec numéro
                      séquentiel pour tout le rapport, placée au-dessous et
                      centré.
                    </li>
                    <li>
                      Le corps du texte doit décrire et faire référence à la
                      figure (utilisez des expressions comme : comme le montre
                      la figure 3.1 ou comme illustré par la figure 3.1 ou voir
                      figure 3.1 ou bien d'après les résultats présentés par la
                      figure 3.1)
                    </li>
                    <li>
                      Éviter les formules telles que, la figure ci-dessous
                    </li>
                  </ul>
                </li>
                <li>
                  Liste des illustrations, des sigles, symboles et des
                  abréviations
                  <ul>
                    <li>
                      citer les sources auxquelles vous empruntez l'illustration
                    </li>
                    <li>
                      La liste alphabétique des abréviations, des sigles et
                      acronymes, accompagnée de leur définition,doit etre
                      présentée dans les pages préliminaires
                    </li>
                    <li>
                      Elle est n'est pas requise lorsqu'un nombre restreint
                      d"abréviations, sigles et acronymes est utilisé
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListeTab;
