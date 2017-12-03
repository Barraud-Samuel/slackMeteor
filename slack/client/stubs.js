Messages.insert({
    text: $('.input-box_text').val(),
    user: Meteor.userId(),
    timestamp: Date.now()
});