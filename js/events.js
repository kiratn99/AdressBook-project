'use strict';

function onClickAddContact() {
    $('#contact-form').trigger('reset');
    $('#contact-details').hide();
    $('#address-book li.is-current').removeClass('is-current');
    $('#contact-form').data('mode', 'add').fadeIn('fast');
}

function onClickClearAddressBook() {
    saveAddressBook(new Array());
    $('#contact-details').hide();
    refreshAddressBook();
}

function onClickEditContact() {

    const index = $(this).data('index');
    const addressBook = loadAddressBook();
    const contact = addressBook[index];

    $('#firstName').val(contact.firstName);
    $('#lastName').val(contact.lastName);
    $('#phone').val(contact.phone);

    switch (contact.title) {

        case 'Madame':
            $('#title').val(1);
            break;

        case 'Mademoiselle':
            $('#title').val(2);
            break;

        case 'Monsieur':
            $('#title').val(3);
            break;
    }

    $('#contact-details').hide();
    $('#contact-form').data('mode', 'edit').fadeIn('slow');
}

function onClickSaveContact() {
    let index;

    const contact = createContact(
        $('select[name=title]').val(),
        $('input[name=firstName]').val(),
        $('input[name=lastName]').val(),
        $('input[name=phone]').val()
    );

    const addressBook = loadAddressBook();

    if ($('#contact-form').data('mode') == 'add') {

        addressBook.push(contact);

        index = addressBook.length - 1;
    } else {

        index = $('#contact-details a').data('index');
        addressBook[index] = contact;
    }

    addressBook.sort(function(contactA, contactB) {
        if (contactA.lastName > contactB.lastName)
            return 1;

        if (contactA.lastName < contactB.lastName)
            return -1;

        if (contactA.firstName > contactB.firstName)
            return 1;

        if (contactA.firstName < contactB.firstName)
            return -1;

        return 0;
    });

    saveAddressBook(addressBook);

    $('#contact-form').fadeOut('slow');
    $('#contact-details').hide();
    refreshAddressBook();
    $('#address-book a').eq(index).trigger('click');
}


function onClickShowContactDetails() {

    const index = $(this).data('index');

    const addressBook = loadAddressBook();
    const contact = addressBook[index];

    $('#contact-details dt').text(contact.title + ' ' + contact.firstName + ' ' + contact.lastName);
    $('#contact-details dd').text('Tel : ' + contact.phone);
    $('#contact-details a').data('index', index);

    $('#contact-form').fadeOut(0);
    $('#contact-details').show();

    $('#address-book li.is-current').removeClass('is-current');
    $('#address-book li').eq(index).addClass('is-current');
}