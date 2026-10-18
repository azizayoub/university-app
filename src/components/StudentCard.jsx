import photo from "../assets/hero.png"
import "./StudentCard.css"
function StudentCard(props) {
  return (
    <div className="container">
      <div className="fiche">
        <img src={photo} alt="photo d'etudiant" />
        <h1>Fiche étudiant</h1>
        <strong>Nom  :</strong> {props.nom} <br />
        <strong>Prénom  :</strong> {props.prenom} <br />
        <strong>Email :</strong> {props.email}<br />
        <strong>Téléphone :</strong> {props.telephone}<br />
        <strong>Filière :</strong> {props.filiere}<br />
        <strong>Année d'étude :</strong> {props.anne}<br />
        <strong>Groupe :</strong> {props.groupe}<br />
        <strong>Ville :</strong> {props.ville}<br />

        <a href={`mailto:${props.email}`} className="btn-contact">
          Contacter
        </a>

      </div>
    </div>
  )
}

export default StudentCard