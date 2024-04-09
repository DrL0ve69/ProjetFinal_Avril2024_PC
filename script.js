// 1. Définir les variables du DOM et des inputs/paramètres :
const nomFormulaire = $('#nom').val(); const prenomFormulaire = $('#prenom').val(); const emailFormulaire = $('#email').val();
const couleurFavFormulaire = '#';
const nomUtilisateurFormulaire = $('#nomUtilisateur').val();
const passwordFormulaire = $('#passwordCreation').val(); const passwordPrime = $('#passwordCreationPrime').val();

// 1.1 Variables des URL
const urlMockAPIMembres = new URL('https://660c04c03a0766e85dbd2c17.mockapi.io/api/membres');
const top10Membres = new URL('https://660c04c03a0766e85dbd2c17.mockapi.io/api/membres/Membres?limit=10');


//LES CODES MOCKAPI
// Get membres
fetch('https://660c04c03a0766e85dbd2c17.mockapi.io/api/membres/Membres', {
    method: 'GET',
    headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then(tasks => {
    //faire le storage
    sessionStorage.getItem(urlMockAPIMembres.href);
}).catch(error => {
    // handle error
    console.alert(error)
})

// Créer un nouveau membre

const newTask = {
    content: 'Check out mockapi.io',
    completed: false,
};

fetch('https://660c04c03a0766e85dbd2c17.mockapi.io/api/membres/Membres', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask)
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
    console.log(res)
}).then(membre => {
    // do something with the new membre
    console.log(membre);
    sessionStorage.getItem(top10Membres.href);

}).catch(error => {
    // handle error
    console.log(error);
})



// top 10

//top10Membres.searchParams.append('limit', "10"); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false&page=1&limit=10

fetch(top10Membres, {
    method: 'GET',
    headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then(tasks => {
    // mockapi returns first 10 tasks that are not completed
}).catch(error => {
    // handle error
})



// 2. Définir la classe Membre et ses propriétés :
Function Membre(nom = "", prenom = "", nomPokemon = "", pokemonImg = "", nomUtilisateur = "", email = "", password = "")
{
    this.Nom = nom; this.Prenom = prenom; this.Email = email;
    this.NomUtilisateur = nomUtilisateur; this.Password = password;


    
    
    toString()
    {
    return `${this.Id}. ${this.Nom}, ${this.Prenom} \n \n
                        Nom Utilisateur : ${this.NomUtilisateur}, Pointage au Quiz : ${this.PointageQuiz} points. \n \n
                        ${this.Avatar} \n`;
    }

    toJSON(key, value)
    {
        localStorage.setItem(this.toString(), value);
    }

    CreerNouveauMembre()
    {
        function ValidationFormNouveauMembre()
        {
            
            const patternNom = /^[A-Z][a-z]{0,19}$/;
            const nomValide = patternNom.test( nomFormulaire );
            const prenomValide = patternNom.test( prenomFormulaire );
            
            const patternEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            const emailValide = patternEmail.test( emailFormulaire );
            
            if (nomValide && prenomValide && emailValide && passwordFormulaire === passwordPrime)
            { return true }
            else return false;
        }
        if(ValidationFormNouveauMembre ===true)
        {
            let nouveauMembre = new Membre( nomFormulaire, prenomFormulaire, emailFormulaire, couleurFavFormulaire,
                nomUtilisateurFormulaire, passwordFormulaire, '', 0 );
            document.getElementById( 'divMembresId' ).innerText = nouveauMembre.toString();
            document.getElementById( 'paragrapheMembres' ).textContent = nouveauMembre.toString();
            this.toJSON();
        }
        else {console.alert( 'Votre formulaire contient des données manquantes ou erronées' )}
    }
}

        
        //if(nomFormulaire.valid && prenomFormulaire.valid && emailFormulaire.valid &&
        // couleurFavFormulaire.valid
           // && nomUtilisateurFormulaire.valid && passwordFormulaire.valid) return true
        //else return false


// Ajouter le membre au JSON et à la page des membres.
// Ouvre dans un nouvel onglet l'exempleFormulaire1

// boutonFooter.onclick=(event)=> { window.open(lienExempleFormulaire.href) };
// lienIndex.href = "index.html"; lienExempleFormulaire.href = "exempleFormulaire1.html" ;


// 1. Manipulation du DOM (document) pour créer l'interface de jeu : JQUERY
//      1.1 Définition d'une constante qui crée un élément ; dans ce cas-ci un bouton(100boutons).
//          1.1.1 Voir https://api.jquery.com/appendTo/ Ce snippet crée 100boutons avec Id
//          Ex : $('<code html dans les balises></la fermée aussi si possible>').appendTo('.uneClasse') => à une classe ou autre appendTo('#unId'), etc...

// for (let i = 0; i <= 100; i++) {
//
//     $(`<button class="boutonsJeu" id="bouton${i}" value="${i}" onclick="hidden=true; VerifierNb();">${i}</button>`).appendTo('#boutonsNb0A100');
//     console.log(`bouton${i}`);
// }


// PROJET DES JOURNALISTES
// /*[abc]	: Peut accepter n’importe quel caractère de la série / [0-9] : idem mais, du premier caractère au dernier
// (x|y)		: Peut accepter une ou l’autre des expressions / (x){5}		: Permet d’exiger un certain nombre d’occurrences (ex. 5)*/
//
// //  2.3
// //   2.3.1 RegExNom → Contraintes :
//
// //   2.3.2 RegExTextArea => Contraintes?
//
// // 3. Soumission du formulaire et vérification des champs *** PAS DE COULEUR IDENTIQUE
// let compteur = 0;
// let equipeJournaliste = [];
// function VerifierFormulaire()
// {// 1. Manipulation du DOM, les variables et RegEx, créer objets/classes Journalistes et Équipe de journalistes.
// 	let inputNom = document.querySelector('#nomTexte').value;
// 	let inputBiographie = document.querySelector('#biographie').value;
// 	let inputSpecialite = document.querySelector('#inputGroupSelect01').value;
// 	let inputCouleur = document.querySelector('#couleurPreferee').value;
//
//
// 	let journaliste = {nom:inputNom, biographie:inputBiographie, specialite:inputSpecialite, couleur:inputCouleur};
//
// 	equipeJournaliste[compteur] = [journaliste];
// 	compteur++;
//
// 	if (/[A-Z][a-z]/.test(inputNom) !== true || inputNom === null || inputBiographie === null)
// 	{
// 		document.querySelector('#boutonSoumettre').disabled = true;
// 	}
// 	else
// 	{
// 		//document.querySelector('#membresEquipe').innerHTML.color = inputCouleur; Ajuster avec couleur roundedpills avec inputCouleur
// 		document.querySelector('#membresEquipe').innerText += "Nom : " + journaliste.nom + "\n" + "Specialité" +
// 			" : " + inputSpecialite + "\n" + "Couleur favorite : " + inputCouleur + "\n\n";
// 		console.log(inputSpecialite,inputBiographie,inputNom,inputCouleur,equipeJournaliste);
// 	}
// }
//
//  4. Ajout du journaliste dans l'équipe (<span>)



// EXEMPLE FORMULAIRE

// //function afficher() {
//     //let valeur = document.forms[0]["patates"].value;
//     //document.getElementById("valeur").innerText = valeur;
// //}
//
// // Validation du nom d'utilisateur
// const texteNomUtilisateur = document.getElementById("nomUtilisateur");
// nomUtilisateurEntre = document.getElementById("nomUtilisateur").innerText;
// nomUtilisateurTest = /^[a-z]{0,20}[0-9]{0,2}$/.test(nomUtilisateurEntre);
//
// function NomValide(){
//     if(nomUtilisateurTest===false){ texteNomUtilisateur.validity = "false"; texteNomUtilisateur.ariaInvalid = "Nigauddemarde";}
//     else { texteNomUtilisateur.validity= "true"; }
// }
// const texteAdresseCourriel = document.getElementById('adresseCourriel');
// const adresseCourrielEntre = document.getElementById("adresseCourriel").innerText;
// adresseCourrielTest = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(adresseCourrielEntre);
// function EmailValide(){
//     if(adresseCourrielTest===false) { texteAdresseCourriel.validity= "false"; }
//     else{ adresseCourrielEntre.style.color = "green"; texteAdresseCourriel.style.borderColor="green"; }
// }
// function PasswordValide(){
//     const passUtilisateur = document.getElementById("password").value;
//     const passUtilisateurElement = document.getElementById("password");
//
//     if(passUtilisateur===nomUtilisateurEntre) {
//         passUtilisateurElement.validity = 'false';
//         passUtilisateurElement.popover = "Mot de passe invalide";
//         passUtilisateur.onfocus.showPopover();
//     } else passUtilisateurElement.validity ="true";
// }
// const allInputs = document.getElementsByTagName("input").valueOf();
// const formulaireComplet = document.getElementById('formulaireComplet');
// function FormulaireValide() {
//    if (allInputs.validity === "false"){ allInputs.focus();
//    document.getElementById('boutonSubmit').createElement('p',"Élément invalide") } }


// ENVOIE AVEC SESSIONSTORAGE???

// function envoyer(){
//
//     // Validation
//     // Validation du panier
//     if (+panier.total < 20){
//         document.getElementById("erreurPanier").classList.remove("invisible");
//         document.getElementById("erreurPanier").innerText = "La valeur minimale des paniers est de 20$.";
// @@ -85,13 +65,18 @@ function envoyer(){
//     else {
//         document.getElementById("erreurPanier").classList.add("invisible");
//
//         //inscririre les données dans la session
// /*      // Autres versions
//         // Inscririre les données dans la session
//         //sessionStorage.setItem("nbPommes", document.getElementById("nbPommes").value);
//         // Créer le panier
//         //let monPanier = new Panier (nouveauFruit, 0, 0, nouveauFruit.sousTotal) ;
//         // Inscrire le panier dans la session pour y avoir accès sur la deuxième page.
//         sessionStorage.setItem("panier", panier);
//         // sessionStorage.setItem("panier", panier);
//  */
//
//         return true;
//     }
// }

Package.describe({
    name: 'twbs:bootstrap', // https://atmospherejs.com/twbs/bootstrap
    summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
    version: '5.3.3',
    git: 'https://github.com/twbs/bootstrap.git'
})

Package.onUse(api => {
    api.versionsFrom('METEOR@1.0')
    api.addFiles([
        'dist/css/bootstrap.css',
        'dist/js/bootstrap.js'
    ], 'client')
})



