//declaration d'un écouteur d'evenement, ici sur un input, au sumbit de celui-ci
//ici le input est situé dans le composant footer.html, on active l'evènement au submit de ce dernier, o défini quel element html ou classe submit ecoute il (ici le input)
Template.footer.events({
    'submit .input_message'(event){
        //on enlève le fonctionnement par défault des sumbit de form pour les navigateurs
        event.preventDefault();
        //on recupère la valeurs de l'input
        const text = event.target.text.value;
        console.log(text)
        //on insère l résultat de l'inpout dans le html (plus tard dans la bdd)
        $('.message-history').append('<div class="message"><a href="" class="message_profile-pic"></a><a href="" class="message_username">scotch</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">' + text + '</span></div>');
        //ensuite on efface le texte qui reste dans le input
        event.target.text.value= "";
    }
});