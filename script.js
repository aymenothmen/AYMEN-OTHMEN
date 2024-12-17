function validerQuizz() {
    // Objet contenant les réponses correctes
    const reponsesCorrectes = {
        q1: "b", q2: "b", q3: "a", q4: "b", q5: "c",
        q6: "a", q7: "b", q8: "a", q9: "b", q10: "b",
        q11: "a", q12: "b"
    };

    let score = 0; // Score initialisé à 0
    let numeroQuestion = 1; // Variable pour numéroter les questions
    let resultatHTML = "<h3>Résultats :</h3><ul>"; // Contenu HTML pour afficher les résultats

    // Parcourir toutes les questions dans l'objet reponsesCorrectes
    for (let question in reponsesCorrectes) {
        const reponseUtilisateur = document.querySelector(`input[name="${question}"]:checked`);
        
        if (reponseUtilisateur) { // Si l'utilisateur a répondu
            if (reponseUtilisateur.value === reponsesCorrectes[question]) {
                score++; // Incrémenter le score si la réponse est correcte
            } else {
                resultatHTML += `<li>Question ${numeroQuestion} : Mauvaise (Réponse correcte : ${reponsesCorrectes[question]})</li>`;
            }
        } else { // Si l'utilisateur n'a pas répondu
            resultatHTML += `<li>Question ${numeroQuestion} : Non répondue</li>`;
        }

        numeroQuestion++; // Passer à la question suivante
    }

    // Affichage du score final
    resultatHTML += `</ul><p>Votre score : <strong>${score} / 12</strong></p>`;
    document.getElementById('resultat').innerHTML = resultatHTML; // Insérer les résultats dans le DOM
}

function afficherMessageSucces(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Afficher le message de succès
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = "Votre message a été envoyé avec succès !";
    successMessage.style.display = "block";

    // Effacer les champs du formulaire
    document.getElementById('form').reset();

    // Masquer le message après un délai de 5 secondes
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000);
}
