'use strict';


const DOM_STORAGE_ITEM_NAME = 'Address Book';

/**
 * Crée un nouveau contact
 * @param title - La civilité du contact
 * @param firstName - Le prénom du contact
 * @param lastName - Le nom du contact
 * @param phone - Le téléphone du contact
 * @returns {Object} - Objet contenant les informations du contact
 */
function createContact(title, firstName, lastName, phone) {
    const contact = new Object();
    contact.firstName = firstName;
    contact.lastName = lastName.toUpperCase();
    contact.phone = phone;

    switch (title) {

        case '1':
            contact.title = 'Madame';
            break;

        case '2':
            contact.title = 'Mademoiselle';
            break;

        case '3':
            contact.title = 'Monsieur';
            break;
    }

    return contact;
}

/**
 * Charge les données du carnet d'adresses du Local Storage
 * @returns {Array} Le tableau d'objets Contacts
 */
function loadAddressBook() {
    let addressBook = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME);

    if (addressBook == null) {

        addressBook = new Array();
    }

    return addressBook;
}


function refreshAddressBook() {
    const addressBook = loadAddressBook();

    const addressBookList = $('<ul>').addClass('list-unstyled');

    addressBook.forEach(function(contact, index) {

        const hyperlink = $('<a>')
            .attr('href', '#contact-details')
            .data('index', index)
            .text(contact.firstName + ' ' + contact.lastName)
            .prepend($('<i>').addClass('far fa-user').attr('aria-hidden', 'true'));

        addressBookList.append($('<li>').append(hyperlink));
    });

    if (addressBook.length > 0) {
        $('#address-book').html(addressBookList);
    } else {
        $('#address-book').html($('<p>').text('Aucun contact enregistré'));
    }
}

/**
 * Enregistrement du carnet d'adresses dans le Local Storage
 * @param addressBook - Le tableau d'objets contenant les contacts du carnet d'adresses
 */
function saveAddressBook(addressBook) {
    saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, addressBook);
}