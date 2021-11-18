'use strict';

$(function() {
    // Installation des gestionnaires d'évènements.
    $('#add-contact').on('click', onClickAddContact);
    $('#clear-address-book').on('click', onClickClearAddressBook);
    $('#save-contact').on('click', onClickSaveContact);
    $('#contact-details a').on('click', onClickEditContact);


    $(document).on('click', '#address-book a', onClickShowContactDetails);

    // Rafraîchissement de la liste des contacts sur la page HTML
    refreshAddressBook();
});