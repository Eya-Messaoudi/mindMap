import "./forme.css";
const Forme = () => {
  return (
    <div className="forme body d-flex flex-column min-vh-100 ">
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
        <div className="col">
          <div className="card  mb-3 mt-5 mx-2">
            <div className="card-header">Police de caractères et styles</div>
            <div className="card-body ">
              <div className="card-text">
                <ul>
                  <li>
                    Le caractère typographique doit être uniforme du début à la
                    fin du rapport
                  </li>
                  <li>
                    La taille du caractère doit être la police « Times new roman
                    »,12 points et l'interligne de 1,5 cm
                  </li>
                  <li>
                    Le texte doit être en justifié. Il faut éviter le
                    soulignement et le gras et l'italique
                  </li>
                  <li>
                    Les titres doivent être avec la même police de caractères et
                    de même taille
                  </li>
                  <li>
                    utiliser les « Styles » pour les différents niveaux de
                    titres
                  </li>
                  <li>
                    Vérifiez la numérotation et faire attention aux titre
                    orphelins
                  </li>
                  <li>Évitez les chiffres romains.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  mb-3 mt-5 mx-2">
            <div className="card-header">Pagination</div>
            <div className="card-body ">
              <div className="card-text">
                <ul>
                  <li>
                    Le numéro des pages doit étre indiqué dans le coin inférieur
                    droit des feuilles, seul sans point ni tiret ni parenthèses
                  </li>
                  <li>
                    La page de l'introduction générale doit porter le numéro de
                    page 1
                  </li>
                  <li>
                    {" "}
                    Toutes les pages, de l'introduction générale - à la fin du
                    rapport se paginent en chiffres arabes (1, 2, 3, etc.){" "}
                    <strong>Les annexes sont comprises.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card  mb-3 mt-5 mx-2">
            <div className="card-header">Ponctuation</div>
            <div className="card-body ">
              <div className="card-text">
                <ul>
                  <li>
                    {" "}
                    Les signes simples (le point, le point-virgule et les trois
                    points de suspension) ne prennent qu'une espace après
                  </li>
                  <li>
                    Les signes doubles (les deux points, le point-virgule, le
                    point d'exclamation, le point d'interrogation, les
                    guillemets et les parenthèses) prennent une espace avant et
                    une espace après
                  </li>
                  <li>
                    Pas d'espace à l'intérieur des crochets, des guillemets et
                    des parenthèses.
                  </li>
                  <li>
                    Pas d'espace avant et après le trait d'union, ainsi que
                    l'apostrophe. Une espace après le tiret s'il est utilisé
                    pour une énumération
                  </li>
                  <li>
                    etc. n'est jamais suivi de point de suspension. Soit on met
                    trois points de suspension soit etc., mais pas les deux
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-black">empty</div>
        <div className="col">
          <div className="card  mb-3 mt-5 mx-2">
            <div className="card-header">Marge</div>
            <div className="card-body ">
              <div className="card-text">
                <ul>
                  <li>
                    La marge doit étre : 2 cm de chaque côté,
                    <strong>
                      avec 0.5cm ou 1 cm de plus du côté gauche
                    </strong>{" "}
                  </li>
                  <li>
                    {" "}
                    L'entête et le pied de page doivent étre disposé à 1,5 cm à
                    partir du bord.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forme;
