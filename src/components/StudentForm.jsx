import { useState } from "react"
import "./StudentFrom.css"
function StudentForm({onAjouterEtudiant,etudiantAModifier,onModifierEtudiant}){
    const [nom, setNom] = useState(etudiantAModifier?.nom || "");
    const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
    const [email, setEmail] = useState(etudiantAModifier?.email || "");
    const [telephone, setTelephone] = useState(
    etudiantAModifier?.telephone || ""
    );
    const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
    const [anneeEtude, setAnneeEtude] = useState(etudiantAModifier?.anneeEtude || "");
    const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
    const [ville, setVille] = useState(etudiantAModifier?.ville || "");
    const [image, setImage] = useState(etudiantAModifier?.image || "");
    const[erreurs,setErreurs]=useState({})
    function handleSubmit(e) {
        e.preventDefault();
        if (!validerFormulaire()) return;
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
        if (etudiantAModifier) {
            onModifierEtudiant({
                ...etudiantAModifier,
                ...nouvelEtudiant,
            });
        } else {
            onAjouterEtudiant(nouvelEtudiant);
            }
    }
    function validerFormulaire() {
    const nouvellesErreurs = {};
    if (!nom.trim()) {
        nouvellesErreurs.nom = "Nom est obligatoire";
    }
    if (!prenom.trim()) {
        nouvellesErreurs.prenom = "Prenom est obligatoire";
    }
    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
    }

    return(
        <div>
        <form className="student-form" onSubmit={handleSubmit} noValidate>
            <h1>{etudiantAModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}</h1>
            <div className="form-group">
            <label htmlFor="Nom">Nom :</label>
            <input type="text" id="Nom" value={nom} onChange={(e)=>setNom(e.target.value)} required/>
            {erreurs.nom && <p className="error-msg">{erreurs.nom}</p>}
            </div>
            <div className="form-group">
            <label htmlFor="Prenom">Prenom :</label>
            <input type="text" id="Prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)} required/>
            {erreurs.prenom && <p className="error-msg">{erreurs.prenom}</p>}
            </div>
            <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
            <label htmlFor="tel">Téléphone :</label>
            <input type="tel" id="tel" value={telephone} onChange={(e)=>setTelephone(e.target.value)} required/>
            </div>
            <div className="form-group">
            <label htmlFor="filiere">Filière :</label>
            <select id="filiere" value={filiere} onChange={(e)=>setFiliere(e.target.value)}>
                <option value="">Choisir une filière</option>
                <option value="Glsi">GLSI</option>
                <option value="Iot">IOT</option>
                <option value="Irs">RSI</option>
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="annee">Année d'etude :</label>
            <input type="text" id="annee"value={anneeEtude} onChange={(e)=>setAnneeEtude(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="groupe">Groupe :</label>
            <input type="text" id="groupe" value={groupe} onChange={(e)=>setGroupe(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="ville">Ville :</label>
            <input type="text" id="ville" value={ville} onChange={(e)=>setVille(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="image">Photo :</label>
            <input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                const fichier = e.target.files[0];
                if (fichier) {
                    setImage(URL.createObjectURL(fichier));
                }
                }}/>
            {image && <img src={image} alt="Aperçu de la photo de l'étudiant" />}
            </div>
            <div>
           <button type="submit" className="btn-submit">{etudiantAModifier ? "Modifier" : "Ajouter"}</button>
            <button type="reset">Annuler</button></div>
        </form>
        </div>
    )
}
export default StudentForm