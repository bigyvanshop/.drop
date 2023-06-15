var stripe = Stripe('pk_test_51LYfKhDLmbH2QenmaSR7wYZ0kbGikfhAqatGO1gUIK873EeeYoBSXPAuR2Iaoinbl88DH1mOujQwPTDI3OirSRiO00izN0UPZc');
var stripe = Stripe('sk_test_51LYfKhDLmbH2QenmnTbhyNzjb7lg11hOP2t5nkRtqVXDTAhhUDdK0H76XmExinLoBAjf7eF8rxOt9s4EZwmvVki0005hwYqc5e');

var elements = stripe.elements();
var cardElement = elements.create('card');

cardElement.mount('#card-element');

var cardErrors = document.getElementById('card-errors');
var submitButton = document.getElementById('submit-payment');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  stripe.createPaymentMethod('card', cardElement)
    .then(function(result) {
      if (result.error) {
        cardErrors.textContent = result.error.message;
      } else {
        // Envoyer le token de paiement à votre serveur pour traitement
        var paymentMethodId = result.paymentMethod.id;
        // Effectuer une requête AJAX ou soumettre un formulaire pour traiter le paiement côté serveur
        // ...
        // Afficher l'animation de paiement réussi ou échoué
        // ...
      }
    });
});
