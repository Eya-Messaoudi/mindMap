const CorpsTrav = ({ id }) => {
  return (
    <div className="corpsTrav">
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
                Corps du travail
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
                  Introduction générale
                  <ul>
                    <li>
                      Votre rapport doit comprendre une introduction d'une à 3
                      pages où vous poserez clairement le problème auquel vous
                      allez tenter d'apporter une solution
                    </li>
                    <li>
                      L'introduction doit se rédiger à la fin du travail de
                      rédaction
                    </li>
                    <li>
                      Elle doit à la fois définir le public, le sujet ou
                      l'orientation de votre rapport et annoncer le plan
                    </li>
                    <li>Recourir au « nous » de modestie</li>
                    <li>
                      Elle doit développer les points suivants:
                      <ul>
                        <li>La présentation du contexte du projet</li>
                        <li>
                          La présentation brève de l'entreprise d'accueil et du
                          domaine
                        </li>
                        <li>La description des objectifs du projet</li>
                        <li>
                          L'annonce du plan du rapport sans trop détailler{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Chapitres
                  <ul>
                    <li>
                      Chaque chapitre doit comporter une introduction partielle{" "}
                      (<strong>utiliser le "nous" avec le futur</strong>), qui
                      annonce le contenu, et une conclusion partielle (
                      <strong>utiliser le "nous" avec le passé composé</strong>)
                    </li>
                    <li>
                      Il faut veiller à indiquer la source bibliographique des
                      idées empruntées à d'autres auteurs (livres, articles,
                      rapports de PFE, manuels de référence, documents trouvés
                      sur le web de source fiable, etc.)
                    </li>
                    <li>
                      présenter la mission qui vous a été confiée, les objectifs
                      et les enjeux de cette mission, l’environnement dans
                      lequel vous avez évolué, les méthodes que vous avez
                      employées et vos résultats.
                    </li>
                    <li>
                      A l'utilisation d'une technique particulière, nouvelle,il
                      faut comparer-la aux autres méthodes existantes et
                      justifier vos choix et critiques.{" "}
                    </li>
                    <li>
                      Justifier le choix des outils utilisés on précisant les
                      caractéristiques de ces méthodes ou techniques.{" "}
                      <strong>
                        Soyer objectif et il ne faut pas utiliser excessivement
                        les superlatifs et/ou le vocabulaire connoté
                        positivement pour mettre en valeur vos outils
                      </strong>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  Conclusion générale
                  <ul>
                    <li>
                      La conclusion générale doit d'ailleurs y avoir entre les
                      deux un parallélisme car elle répond aux questions
                      soulevées dans l'introduction
                    </li>
                    <li>
                      {" "}
                      La taille de la conclusion doit être réduite, une page de
                      texte tout au plus.
                    </li>
                    <li>
                      Elle ne doit pas comporter de nouveaux résultats ni de
                      nouvelles interprétations
                    </li>
                    <li>
                      La conclusion générale comporte souvent :{" "}
                      <ul>
                        <li>un résumé très rapide du corps du texte</li>
                        <li>Un rappel des objectifs du projet</li>
                        <li>
                          Un bilan professionnel qui indique clairement les
                          objectifs annoncés dans l'introduction et en
                          particulier ceux qui n'ont pu être atteints. I
                        </li>
                        <li>
                          Un bilan personnel qui décrit les principales leçons
                          que vous tirez de cette expérience sur le plan humain
                        </li>
                        <li>
                          Les limites et les perspectives du travail effectué
                        </li>
                      </ul>
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
export default CorpsTrav;
