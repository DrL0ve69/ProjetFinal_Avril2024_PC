// 1. Définir la classe Membre et ses propriétés :

function Membre(nom, prenom, telephone, codePostal, email, nomUtilisateur, password) {

    this.Nom = nom; this.Prenom = prenom; this.Telephone = telephone; this.CodePostal = codePostal; this.Email = email;
    this.NomUtilisateur = nomUtilisateur; this.Password = password;
    // Ajouter après l'ajout du nouveau membre → this.Pointage = pointage;
    this.Id = 0;                                   // à tester sinon public static Id => private id=0; id+=;
}

function CreerNouveauMembre(){
// Si valider est vrai, crée le nouveau membre et enregistre-le dans une liste, puis dans le JSON.
    
    Membre.Id = Membre.Id + 1 ;
    let nouveauMembre = new Membre($('#nom').val(), $('#prenom').val(), $('#numTelephone').val(), $('#codePostal').val(),
        $('#email').val(), $('#nomUtilisateur').val(), $('#passwordCreation').val()) ;
    
    // Ajouter le membre au JSON et à la page des membres.
}

function Reformatter(){
    
    var element = document.querySelector("#telephone");
    var ancien_tel = element.value;
    
    var nouveau_tel = "(" + ancien_tel.substring(0,3) + ") " + ancien_tel.substring(3,6) + "-" + ancien_tel.substring(6);
    element.value = nouveau_tel;
}

// Ouvre dans un nouvel onglet l'exempleFormulaire1

// boutonFooter.onclick=(event)=> { window.open(lienExempleFormulaire.href) };
// lienIndex.href = "index.html"; lienExempleFormulaire.href = "exempleFormulaire1.html";


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
//         //let monPanier = new Panier(nouveauFruit, 0, 0, nouveauFruit.sousTotal);
//         // Inscrire le panier dans la session pour y avoir accès sur la deuxième page.
//         sessionStorage.setItem("panier", panier);
//         // sessionStorage.setItem("panier", panier);
//  */
//
//         return true;
//     }
// }