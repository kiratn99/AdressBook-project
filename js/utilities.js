'use strict';

/**
 * Chargement de données du Local Storage au format JSON
 * @param name - Clé du Local Storage associée aux données à charger
 * @returns {any} - Les données récupérées
 */
function loadDataFromDomStorage(name) {
    const jsonData = window.localStorage.getItem(name);

    return JSON.parse(jsonData);
}

/**
 * Enregistrement de données dans le Local Storage au format JSON
 * @param name - Clé du Local Storage associée aux données à enregistrer
 * @param data - Les données à enregistrer
 */
function saveDataToDomStorage(name, data) {
    const jsonData = JSON.stringify(data);

    window.localStorage.setItem(name, jsonData);
}