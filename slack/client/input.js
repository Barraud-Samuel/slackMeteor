//declaration d'un écouteur d'evenement, ici sur un input, au sumbit de celui-ci
//ici le input est situé dans le composant footer.html, on active l'evènement au submit de ce dernier, o défini quel element html ou classe submit ecoute il (ici le input)
Template.footer.events({
    'submit .input_message'(event){
        //on enlève le fonctionnement par défault des sumbit de form pour les navigateurs
        event.preventDefault();
        //on recupère la valeurs de l'input
        const text = event.target.text.value;
        console.log(text)
        if (!!text){
            //on insère l résultat de l'inpout dans le html (plus tard dans la bdd)
            Messages.insert({text, createdAt: new Date(),});
            //ensuite on efface le texte qui reste dans le input
            event.target.text.value= "";
        }
    }
});






/*autre exemple avec jquery*/

/*
Template.footer.events({
    'keypress input': function(e) {
        var inputVal = $('.input-box_text').val();
        if(!!inputVal) {
            var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
            if (charCode == 13) {
                e.stopPropagation();
                Messages.insert({text: $('.input-box_text').val()});
                $('.input-box_text').val("");
                return false;
            }
        }
    }
});*/
