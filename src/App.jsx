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
          filiere : "Glsi",
          anne : "2ème année",
          groupe : "GLSI 2",
          ville : "Mahdia",
          image: photo},
    {
        prenom: "Slim",
        nom: "Boubaker",
        email: "slimboubaker@gmail.com",
        telephone: "+216 99 999 999",
        filiere: "Irs",
        anne: "2ème année",
        groupe: "GLSI 2",
        ville: "Mahdia",
    },

    {
        prenom: "Sarra",
        nom: "Trabelsi",
        email: "sarra.trabelsi@gmail.com",
        telephone: "+216 22 345 678",
        filiere: "Glsi",
        anne: "2ème année",
        groupe: "GLSI 1",
        ville: "Sousse",
    },

    {
        prenom: "Mariem",
        nom: "Khalfellah",
        email: "mariem.khalfellah@gmail.com",
        telephone: "+216 27 567 890",
        filiere: "Iot",
        anne: "2ème année",
        groupe: "GLSI 2",
        ville: "Mahdia",
    }
]);
function addStudent() {
    const nouvelEtudiant = {
        prenom: "Yassine",
        nom: "Ben Salem",
        email: "yassine.bensalem@gmail.com",
        telephone: "+216 44 444 444",
        filiere: "Iot",
        anneeEtude: "2ème année",
        groupe: "GLSI 1",
        ville: "Sfax",
        // image: SlimImage,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
}
function supprimerEtudiant(email){
  setEtudiants(etudiants.filter((student)=>student.email!==email));
}
function modifEtudiants(email){
    const nouveauPrenom=prompt("Saisir le nouveau prenom: ")
    if(nouveauPrenom!==null && nouveauPrenom.trim()!==""){
      setEtudiants((anciensEtudiants)=>{
        return anciensEtudiants.map((etudiant) => etudiant.email===email
          ?{...etudiant,prenom:nouveauPrenom.trim()}
          : etudiant)
      })
          }
        
    }
  const [recherche,setRecherche]=useState("")
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  )
  return (
    <div className="student-grid">
      <Header />
      <Navbar />
      <section className="student-list" id="students" aria-label="Liste des étudiants">
        <input type="text" placeholder='Rechercher par filière...' value={recherche} onChange={(e)=>setRecherche(e.target.value)} />
      {etudiantsFiltres.map((student) => (<StudentCard
          prenom={student.prenom}
          nom={student.nom}
          email={student.email}
          key={student.email}
          telephone={student.telephone}
          filiere={student.filiere}
          anne={student.anne}
          groupe={student.groupe}
          ville={student.ville}
          image={student.image}
          onSupprimer={supprimerEtudiant}
          onModifier={modifEtudiants}
        />))}
        <button onClick={addStudent}>Ajouter un etudiant</button>
        
      </section>
        <Footer />
    </div>
  )
  }



export default App