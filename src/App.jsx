import './App.css'
import StudentCard from "./components/StudentCard.jsx";
import photo from "./assets/hero.png"
import Header from "./components/Header.jsx"
import Navbar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from 'react';

function App() {

  const [etudiants,setEtudiants ] = useState( [
  {
          prenom:"Aziz",
          nom:"Ayoub",
          email : "azizayoub656@example.com",
          telephone : "00000000",
          filiere : "Génie Logiciel et Systèmes d'Information",
          anne : "2ème année",
          groupe : "GLSI 2",
          ville : "Mahdia",
          image: photo},
    {
        prenom: "Slim",
        nom: "Boubaker",
        email: "slimboubaker@gmail.com",
        telephone: "+216 99 999 999",
        filiere: "Génie Logiciel et Systèmes d'Information",
        anne: "2ème année",
        groupe: "GLSI 2",
        ville: "Mahdia",
    },

    {
        prenom: "Sarra",
        nom: "Trabelsi",
        email: "sarra.trabelsi@gmail.com",
        telephone: "+216 22 345 678",
        filiere: "Génie Logiciel et Systèmes d'Information",
        anne: "2ème année",
        groupe: "GLSI 1",
        ville: "Sousse",
    },

    {
        prenom: "Mariem",
        nom: "Khalfellah",
        email: "mariem.khalfellah@gmail.com",
        telephone: "+216 27 567 890",
        filiere: "Génie Logiciel et Systèmes d'Information",
        anne: "2ème année",
        groupe: "GLSI 2",
        ville: "Mahdia",
    }
]);
function addStudent() {
    const nouvelEtudiant = {
        nom: "Ben Salem",
        prenom: "Yassine",
        email: "yassine.bensalem@gmail.com",
        telephone: "+216 44 444 444",
        filiere: "Génie Logiciel et Systèmes d'Information",
        anneeEtude: "2ème année",
        groupe: "GLSI 1",
        ville: "Sfax",
        // image: SlimImage,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
}
  const [students,supp]=useState(etudiants)
function supprimerEtudiant(){

}
  return (
    <div className="student-grid">
      <Header />
      <Navbar />
      <section className="student-list" id="students" aria-label="Liste des étudiants">
      {etudiants.map((student) => (<StudentCard
          prenom={student.prenom}
          nom={student.nom}
          email={student.email}
          key={student.email}
          telephone={student.telephone}
          filiere={student.filiere}
          anne={student.anne}
          groupe={student.groupe}
          ville={student.ville}
          image={student.image} />))}
        <button onClick={addStudent}>Ajouter un etudient</button>
        <button onClick={supprimerEtudiant}>Supprimer un etudiant</button>
      </section>
        <Footer />
    </div>
  )
}


export default App