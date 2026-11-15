import photo from "../assets/hero.png"
import { useState } from "react"
import "./StudentFrom.css"
function StudentForm({onAjouterEtudiant}){
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [filiere, setFiliere] = useState("");
    const [anneeEtude, setAnneeEtude] = useState("");
    const [groupe, setGroupe] = useState("");
    const [ville, setVille] = useState("");
    const [image, setImage] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const nouvelEtudiant = {
            nom: nom,
            prenom: prenom,
            email: email,
            telephone: telephone,
            filiere: filiere,
            anneeEtude: anneeEtude,
            groupe: groupe,
            ville: ville,
            image: image,
        };
        console.log("Nouvel étudiant ajouté :", nouvelEtudiant);
        onAjouterEtudiant(nouvelEtudiant);
        }

    return(
        <div>
        <form className="student-form" onSubmit={handleSubmit}>
            <h1>Ajouter un etudiant</h1>
            <div className="form-group">
            <label htmlFor="Nom">Nom :</label>
            <input type="text" id="Nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="Prenom">Prenom :</label>
            <input type="text" id="Prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="tel">Téléphone :</label>
            <input type="tel" id="tel" onChange={(e)=>setTelephone(e.target.value)}/>
            </div>
            <div className="form-group">
            <select id="filiere" value={filiere} onChange={(e)=>setFiliere(e.target.value)}>
                <option value="0">Choisir une filiere</option>
                <option value="GLSI">GLSI</option>
                <option value="IOT">IOT</option>
                <option value="RSI">RSI</option>
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="annee">Année d'etude :</label>
            <input type="number" id="annee"value={anneeEtude} onChange={(e)=>setAnneeEtude(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="groupe">Groupe :</label>
            <input type="text" id="groupe" value={groupe} onChange={(e)=>setGroupe(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="ville">Ville :</label>
            <input type="text" id="ville" onChange={(e)=>setVille(e.target.value)}/>
            </div>
            <div className="form-group">
            <label>Image :</label>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                const fichier = e.target.files[0];
                if (fichier) {
                    setImage(URL.createObjectURL(fichier));
                }
                }}
            />
            </div>
            <div>
            <button type="submit" className="btn-Submit">Ajouter</button>
            <button type="reset">Annuler</button></div>

        </form>

        </div>
    )
}
export default StudentForm