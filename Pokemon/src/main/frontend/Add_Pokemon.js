var pokemon_name;
var pokemon_ability;
var pokemon_type1;
var pokemon_type2;

$(document).ready(function () {
  loadPokemon();
  addPokemon();
});

function loadPokemon() {
$('#body').empty();
var itemList = $('#body');
var userName = localStorage.getItem("username");

$.ajax({
        type: 'GET',
        url: 'http://localhost:8080/store/users/' + userName,
        success: function(itemArray) {
            $.each(itemArray, function(index, user){
                var uniqueID = user.uniqueID;
                var pokeID = user.pokeID;
                var level = user.level;
                var ability = user.abilityID;

                var items = '<tr>';
                items += '<td>' + getPokemonNameByID(pokeID) + '</td>';
                items += '<td>' + level + '</td>';
                items += '<td>' + getPokemonAbilityByID(pokeID) + '</td>';
                items += '<td>' + getType1ByPokemonID(pokeID);
                if (getType2ByPokemonID(pokeID) != "") {
                  items += "/" + getType2ByPokemonID(pokeID) + '</td>';
                } else {
                items += '</td>';
              }
                items += '<td>' + '<button type="button" id=' + uniqueID + ' class="btn btn-primary" onClick="viewInfo('+uniqueID+')">Additional Info</button>' + '</td>';
                items += '<td>' + '<button type="button" id="edit' + uniqueID + '" class="btn btn-primary">Edit</button>' + '</td>';
                items += '<td>' + '<button type="button" id="delete' + uniqueID + '" class="btn btn-primary">Delete</button>' + '</td>';
                items += '</tr>';
                itemList.append(items);
            })
          },
    // Have an error be displayed in the event that their is a problem
    // connecting to the web service.
    error: function() {
        $('#errorMessages')
            .append($('<li>')
            .attr({class: 'list-group-item list-group-item-danger'})
            .text('Error calling web service. Please try again later.'));
    }
});


}

function addPokemon() {
    $("#addButton").click(function (event) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/store/add',
            data: JSON.stringify({
                level: $('#addLevel').val(),
                move_ID1: $('#addMove1').val(),
                move_ID2: $('#addMove2').val(),
                move_ID3: $('#addMove3').val(),
                move_ID4: $('#addMove4').val(), 
                hp: $('#addHP').val(),
                attack: $('#addAttack').val(),
                defense: $('#addDefense').val(),
                speed: $('#addSpeed').val(),
                spAttack: $('#addSpecial_Attack').val(),
                spDefense: $('#addSpecial_Defense').val()
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'dataType': 'json',
           success: function() {
               $('#errorMessages').empty();
               $('#addLevel').val('');
               $('#addMove1').val('');
               $('#addMove2').val('');
               $('#addMove3').val('');
               $('#addMove4').val('');
               $('#addHP').val('');
               $('#addAttack').val('');
               $('#addDefense').val('');
               $('#addSpeed').val('');
               $('#addSpecial_Attack').val('');
               $('#addSpecial_Defense').val('');
               loadPokemon();
           },
           error: function () {
            $('#errorMessages')
             .append($('<li>')
             .attr({class: 'list-group-item list-group-item-danger'})
             .text('Error calling web service. Please try again later.')); 
            }
        })
    });
}