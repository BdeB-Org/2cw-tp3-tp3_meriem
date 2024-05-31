

function fetchData(type, animalName) {
    $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/animals?name=${animalName}`,
        headers: { 'X-Api-Key': 'QlQqCX0kw2CgyXLHsAzuQB4Mk1Aa5RHCbpbsHJJf' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);

            result(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function result(data) {

    const animalData = data.data;


    const table = '<table>' +
        '<tr>' +
        '<th>Nom</th>' +
        '<th>Âge</th>' +
        '<th>Type</th>' +
        '</tr>' +
        '<tr>' +
        '<td>' + animalData.name + '</td>' +
        '<td>' + animalData.age + '</td>' +
        '<td>' + animalData.type + '</td>' +
        '</tr>' +
        '</table>';


    $('#animal-results').html(table);
}
