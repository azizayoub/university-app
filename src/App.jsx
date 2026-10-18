import './App.css'
import StudentCard from "./components/StudentCard.jsx";
import photo from "./assets/hero.png"
const etudiants = [
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
];
function App() {
  return (
    <div className="student-grid">
      {etudiants.map((student) => (<StudentCard
          prenom={student.prenom}
          nom={student.nom}
          key={student.email}
          email={student.email}
          telephone={student.telephone}
          filiere={student.filiere}
          anne={student.anne}
          groupe={student.groupe}
          ville={student.ville}
          image={student.image} />))}
    </div>
  )
}


export default App