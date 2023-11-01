const Biblio = ({ id }) => {
  return (
    <div className="biblio">
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
                className="modal-title fs-5 text-secondary "
                id="staticBackdropLabel"
              >
                Bibliographie
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-secondary text-start">
              <ol>
                <li>
                  Bibliographie
                  <ul>
                    <li>
                      Doit recenser, par ordre d'apparition dans le texte (le
                      rapport), l'ensemble des sources qui ont été consultées et
                      qui sont référencées dans le texte
                    </li>
                    <li>
                      Le lecteur doit y trouver les ouvrages (Thèses, Mémoires,
                      livres, articles, rapports de PFE, manuels de référence,
                      documents trouvés sur le Web de source fiable, etc.) qui
                      ont servi à la rédaction du texte et à l'élaboration des
                      figures ou des tableaux
                    </li>
                    <li>
                      {" "}
                      Il n'est pas nécessaire de présenter séparément la
                      Bibliographie et la Webographie.
                    </li>
                  </ul>
                </li>
                <li>
                  Annexes
                  <ul>
                    <li>
                      Les informations- trop détaillées ou constituant un
                      complément d'information pour toute personne qui désire
                      mieux comprendre ou refaire une expérience décrite dans le
                      document- peuvent être mises au niveau des annexes.
                    </li>
                    <li>
                      Les annexes doivent être numérotées avec des titres
                      (Annexe1, Annexe 2, etc.).
                    </li>
                  </ul>
                </li>
                <li>
                  Resumé
                  <ul>
                    <li>
                      Les résumés doivent être présentés au verso de la dernière
                      page du rapport
                    </li>
                    <li>
                      Doivent rappeler les principaux objectifs du travail ainsi
                      que les réalisations effectuées
                    </li>
                    <li>
                      Chaque résumé doit être accompagné de mots clés (cinq en
                      moyenne) permettant de rattacher le projet de
                      SFE/PFA/PFE/MEMOIRE à son contexte d'application.
                    </li>
                    <li>
                      Le résumé et les mots clés en anglais et en arabe doivent
                      être une traduction fidèle de la version française.{" "}
                      <strong>
                        Eviter de copier/coller les versions que proposent les «
                        traducteurs automatiques », type «Google Traduction»
                      </strong>
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
export default Biblio;
