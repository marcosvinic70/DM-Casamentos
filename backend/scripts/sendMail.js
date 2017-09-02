var nodemailer = require('nodemailer');

// O primeiro passo é configurar um transporte para este
// e-mail, precisamos dizer qual servidor será o encarregado
// por enviá-lo:
var transporte = nodemailer.createTransport({
  service: 'Gmail', // serviço será realizado com um email do gmail
  auth: {
    user: 'exemplo@gmail.com', // Basta dizer qual o nosso usuário
    pass: 'shhh!!!'             // e a senha da nossa conta
  } 
});

// Após configurar o transporte chegou a hora de criar um e-mail
// para enviarmos, para isso basta criar um objeto com algumas configurações
var email = {
  from: 'exemplo@gmail.com', // Quem enviou este e-mail
  to: 'exemplo2@gmail.com', // Quem receberá
  subject: 'Node.js ♥',  // Um assunto bacana :-) 
  html: '<strong>:D</strong>' // O conteúdo do e-mail
};

// Pronto, tudo em mãos, basta informar para o transporte
// que desejamos enviar este e-mail
transporte.sendMail(email, function(err, info){
  if(err)
    throw err; // Oops, algo de errado aconteceu.

  console.log('Email enviado! Leia as informações adicionais: ', info);
});