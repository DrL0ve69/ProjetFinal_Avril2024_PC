// DÉCLARATION DES VARIABLES url params

const params = new URLSearchParams(window.location.search);
const nom = params.get('nom');
const prenom = params.get('prenom');
const nomPokemon = params.get('monPokemon');
const pokemonImg = params.get('pokemonImg');
const nomUtilisateur = params.get('nomUtilisateur');
const email = params.get('email');
const password = params.get('password');


// DÉCLARATION DES VARIABLES FORMULAIRE MANQUE LE LOGIN


const nomMembre = $("#floatingNom").val();
const prenomMembre = $('#floatingPrenom').val();

const nomUtilisateurFormulaire = $('#floatingNomUtilisateur').val();
const emailUtilisateur = $('#floatingEmail').val();
const passwordFormulaireCreation = $('#floatingPassword').val();

const avatarPokemonNom = $('#floatingAvatarPokemon').val();
const avatarPokemonSprite = $('#pokemonSprite').val();

//if(nomMembre, prenomMembre, nomUtilisateurFormulaire, passwordFormulaireCreation, emailUtilisateur)
// {
//     AfficherMembre(nomMembre, prenomMembre, avatarPokemonNom, avatarPokemonSprite, nomUtilisateurFormulaire, emailUtilisateur);
// }
function Membre(nom = "", prenom = "", nomPokemon = "", pokemonImg = "", nomUtilisateur = "", email = "", password = "")
{
    this.Nom = nom;
    this.Prenom = prenom;
    this.NomPokemon = nomPokemon;
    this.PokemonImg = pokemonImg;
    this.NomUtilisateur = nomUtilisateur;
    this.Email = email;
    this.Password = password;

}

// Stocker les données

function EnregistrerMembre()
{

    const membre = new Membre( nomMembre, prenomMembre, avatarPokemonNom, avatarPokemonSprite, nomUtilisateurFormulaire, emailUtilisateur, passwordFormulaireCreation);

    localStorage.setItem('membre', JSON.stringify(membre));
    return true;

}


// Afficher Membre dans membreindex

//function AfficherMembre(nomMembre, prenomMembre, avatarPokemonNom, avatarPokemonSprite, nomUtilisateurFormulaire, emailUtilisateur)
// {
//     $("#nosMembres").append( <p>Nom : {nomMembre}, Prénom : {prenomMembre}, Nom Pokémon : {avatarPokemonNom}, Image :{avatarPokemonSprite}
//         Nom Utilisateur : {nomUtilisateurFormulaire}, EmailUtilisateur : {emailUtilisateur}</p>
//     );
// }




// VALIDATION PASSWORD

function PasswordValide()
{


    if(nomUtilisateurFormulaire===passwordFormulaireCreation) {
        passwordFormulaireCreation.validity = 'false';
        passwordFormulaireCreation.popover = "Mot de passe invalide";
        passwordFormulaireCreation.onfocus.showPopover();
    } else passwordFormulaireCreation.validity ="true";
}


// VALIDATION DU FORMULAIRE

const allInputs = document.getElementsByTagName("input").valueOf();
const formulaireInscription = document.getElementById('formulaireInscription');

function ValiderFormulaire()
{
    if (allInputs.validity === "false")
    {
        allInputs.focus();
        document.getElementById('boutonInscription').createElement('p',"Élément invalide")
    }
    else
    {
        allInputs.validity = "true";
        console.log(allInputs,myContentType,formulaireInscription.values)

        // Faire un membre

        let nouveauMembre = new Membre( nomMembre, prenomMembre, avatarPokemonNom, avatarPokemonSprite, nomUtilisateurFormulaire, emailUtilisateur, passwordFormulaireCreation);
        function ToString()
        {
            return `Nom : ${nouveauMembre.Nom}, ${nouveauMembre.Prenom}, <br>
                ${nouveauMembre.NomPokemon}, : <img src="${nouveauMembre.PokemonImg}" alt="Une image de pokémon"> <br><br></<br>
                Nom Utilisateur : ${nouveauMembre.NomUtilisateur}<br></<br>`;
        }
        ToString();
        const membre = JSON.parse(localStorage.getItem('membre'));
        //AfficherMembre(membre.Nom,membre.Prenom,membre.NomPokemon,membre.PokemonImg,membre.NomUtilisateur,membre.Email,membre.Password);

        document.querySelector('#nosMembres').innerHTML +=
            `<p>Nom : ${nouveauMembre.Nom}, Prénom :${nouveauMembre.Prenom},
                ${nouveauMembre.NomPokemon}, : <img src="" alt="Sprite du Pokémon" id="pokemonSpriteMembre" style="display: block"> 
                </br></br>
                Nom Utilisateur : ${nouveauMembre.NomUtilisateur}</br></p>`;


        membre.membre = JSON.stringify(membre);
        nouveauMembre.toJSON();
    }
}


// FETCH API AVATARPOKEMON

async function fetchData(){

    try{

        const pokemonName = document.getElementById("floatingAvatarPokemon").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(reponse =>{
        if(!reponse.ok) { throw new Error("Could not fetch resource. Fetchage pas possible le gros "); }
        return reponse.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

