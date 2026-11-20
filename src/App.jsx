import './App.css'
import StudentCard from "./components/StudentCard.jsx";
import photo from "./assets/hero.png"
import Header from "./components/Header.jsx"
import Navbar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from 'react';
import StudentForm from "./components/StudentForm.jsx"
function App() {

  const [etudiants,setEtudiants ] = useState( [
  {
          id: 1,
          prenom:"Aziz",
          nom:"Ayoub",
          email : "azizayoub656@example.com",
          telephone : "00000000",
          filiere : "Glsi",
          anneeEtude : "2ème année",
          groupe : "GLSI 2",
          ville : "Mahdia",
          image: photo},
    {
        id: 2,
        prenom: "Slim",
        nom: "Boubaker",
        email: "slimboubaker@gmail.com",
        telephone: "+216 99 999 999",
        filiere: "Irs",
        anneeEtude: "2ème année",
        groupe: "GLSI 2",
        ville: "Mahdia",
    },

    {
        id: 3,
        prenom: "Sarra",
        nom: "Trabelsi",
        email: "sarra.trabelsi@gmail.com",
        telephone: "+216 22 345 678",
        filiere: "Glsi",
        anneeEtude: "2ème année",
        groupe: "GLSI 1",
        ville: "Sousse",
    },

    {
        id: 4,
        prenom: "Mariem",
        nom: "Khalfellah",
        email: "mariem.khalfellah@gmail.com",
        telephone: "+216 27 567 890",
        filiere: "Iot",
        anneeEtude: "2ème année",
        groupe: "GLSI 2",
        ville: "Mahdia",
    }
]);
function supprimerEtudiant(email){
  setEtudiants(etudiants.filter((student)=>student.email!==email));
}
const [etudiantAModifier,setEtudiantAModifier]=useState(null);
function modifEtudiants(etudiant){
    setEtudiantAModifier(etudiant)
    console.log(etudiant);
        }
  const [recherche,setRecherche]=useState("")
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  )
function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
        ...nouvelEtudiant,
        id: Date.now(),
    };

    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
    }
function enregistrerModification(etudiantModifie) {
  setEtudiants((anciensEtudiants) =>
    anciensEtudiants.map((etudiant) =>
      etudiant.id === etudiantAModifier.id
        ? { ...etudiantModifie, id: etudiant.id }
        : etudiant
    )
  );
  setEtudiantAModifier(null);
}
  return (
    <div className="student-grid">
      <Header />
      <Navbar />
      <StudentForm 
      key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
      onAjouterEtudiant={ajouterEtudiant}
      etudiantAModifier={etudiantAModifier}
      onModifierEtudiant={enregistrerModification}
      />
      <section className="student-list" id="students" aria-label="Liste des étudiants">
        <input type="text" placeholder='Rechercher par filière...' value={recherche} onChange={(e)=>setRecherche(e.target.value)} />
      {etudiantsFiltres.map((student) => (<StudentCard
          prenom={student.prenom}
          nom={student.nom}
          email={student.email}
          key={student.id}
          telephone={student.telephone}
          filiere={student.filiere}
          anneeEtude={student.anneeEtude}
          groupe={student.groupe}
          ville={student.ville}
          image={student.image}
          etudiant={student}
          onSupprimer={supprimerEtudiant}
          onModifier={modifEtudiants}
        />))}
      </section>
      
        <Footer />
    </div>
  )
  }



export default App