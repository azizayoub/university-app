import './App.css'
import photo from "./assets/hero.png"
const student = {
          nom_prenom:"Étudiant Exemple",
          email : "student@example.com",
          telephone : "00000000",
          filiere : "Génie Logiciel et Systèmes d'Information",
          anne : "2ème année",
          groupe : "GLSI 2",
          ville : "Ville"}

function App() {
  return (
    <div className="container">
      <div className="fiche">
        <img src={photo} alt="photo d'etudiant" />
        <h1>Fiche étudiant</h1>
        
        <strong>Nom & Prénom :</strong> {student.nom_prenom} <br />
        <strong>Email :</strong> {student.email}<br />
        <strong>Téléphone :</strong> +216 {student.telephone}<br />
        <strong>Filière :</strong> {student.filiere}<br />
        <strong>Année d'étude :</strong> {student.anne}<br />
        <strong>Groupe :</strong> {student.groupe}<br />
        <strong>Ville :</strong> {student.ville}<br />


        <a href={`mailto:${student.email}`} className="btn-contact">
          Contacter
        </a>

      </div>
    </div>
  )
}

export default App
