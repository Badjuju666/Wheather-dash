'use strict'

let finds = getFinds();

// LocalStorage helpers
function getFinds() {
    return JSON.parse(localStorage.getItem("finds") || "[]");
}

function setFinds() {
    localStorage.setItem("finds", JSON.stringify(finds));
}
//END LocalStorage helpers

function renderFindslist() {
    $('#history').empty();

    for (let i = 0; i < finds.length; i++) {
        const find = finds[i];

        console.log(find);

        $('#history').append(`<a href="#" class="list-group-item list-group-item-action">${find}</a>`);
    }
}

function addToFindsYea(find) {
    // Add together histories and history
    finds.unshift(find);

    //limit is 10 history list items
    finds = finds.slice(0, 10);
}

function find() {
    //get input's value
    const inputValue = $("#city-input").val();

    if (!inputValue.trim()) {
        alert("Please type a city");
        //TODO: Maybe I'd validate that what they typed was a valid city
        return;
    }

    //Add input's value to histories
    addToFindsYea(inputValue);

    //Clear input's value
    $("#city-input").val("");

    // Render list
    renderFindslist();

    setFinds();
}

renderFindslist();

