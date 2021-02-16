var pokemon_name;
var pokemon_ability;
var pokemon_type1;
var pokemon_type2;

$(document).ready(function () {
  loadPokemon();
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

function getPokemonNameByID(id) {
$.ajax({
          type: 'GET',
          global: false,
          async:false,
          url: 'http://localhost:8080/store/pokemonNames/id/' + id,
          success: function(user) {
              var name = user.pokemonName;
              pokemon_name = name;
            },
error: function() {
    $('#errorMessages')
        .append($('<li>')
        .attr({class: 'list-group-item list-group-item-danger'})
        .text('Error calling web service. Please try again later.'));
}
});
return pokemon_name;
}

function getPokemonAbilityByID(id) {
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/pokemon/byAbility/' + id,
            success: function(user) {
                var ability = user.ability;
                pokemon_ability = ability;
              },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return pokemon_ability;
}

function getType1ByPokemonID(id) {
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/pokemon/byType/' + id,
            success: function(user) {
              for(i in user){
                  var type1 = user[0].typeName;
                  pokemon_type1 = type1;
                  }
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return pokemon_type1;
}

function getType2ByPokemonID(id) {
  pokemon_type2 = "";
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/pokemon/byType/' + id,
            success: function(user) {
              for(i in user){
                  var type2 = user[1].typeName;
                  pokemon_type2 = type2;
                  }
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return pokemon_type2;
}

function viewInfo(unique_ID) {
  window.location.href = "info.html";
  localStorage.setItem("uniqueID", unique_ID);
}
