Template.messages.helpers({
    messages: Messages.find({})
});
//parametrage des comptes utilisateurs (account ui)
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

/*
Template.messages.helpers({
    messages: [
        { text: "All these messages" },
        { text: "Uses the same template" },
        { text: "But have a different data context" },
        { text: "It's why these messages are all different!" },
        { text: "Hey!" },
        { text: "What's up man!" },
        { text: "Hello" }
    ]
});*/
