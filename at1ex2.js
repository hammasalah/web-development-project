
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const disponibilites = Array.from(document.querySelectorAll('input[name="disponibilites"]:checked')).map(cb => cb.value);
    const contribution = Array.from(document.querySelectorAll('input[name="contribution"]:checked')).map(cb => cb.value);

   
    if (!prenom || !email || !password) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

   
    if (disponibilites.length === 0) {
        alert('Veuillez sélectionner au moins une disponibilité.');
        return;
    }
    if (contribution.length === 0) {
        alert('Veuillez sélectionner au moins un élément que vous apporterez.');
        return;
    }

    
    let confirmationMessage = `Merci, ${prenom}! Vous êtes inscrit pour le pique-nique.`;
    confirmationMessage += `\n\nDisponibilités: ${disponibilites.join(', ')}`;
    confirmationMessage += `\nContribution: ${contribution.join(', ')}`;
    alert(confirmationMessage);
    
    
    event.target.submit();
});


document.querySelector('form').addEventListener('reset', function() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser le formulaire ?')) {
        alert('Formulaire réinitialisé.');
    } else {
      
        event.preventDefault();
    }
});
