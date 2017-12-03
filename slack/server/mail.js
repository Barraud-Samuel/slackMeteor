//e-mail configuration
Meteor.startup(function () {
    smtp = {
        username: 'sam27300@hotmail.fr',
        password: 'PgLH3C0DJIb4z3S5KRbsNg',
        server:   'smtp.mandrillapp.com',
        port: 587
    };

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});