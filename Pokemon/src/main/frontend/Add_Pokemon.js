var pokemon_name;
<<<<<<< HEAD
var ability_id;
var pokemon_move1;
var pokemon_move2;
var pokemon_move3;
var pokemon_move4;
var pokemon_id;

$(document).ready(function () {
var user = localStorage.getItem("userID");
});

function getMoveName1(name) {
  //pokemon_move1 = "";
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/moves/' + name,
            success: function(user) {
             var moveID = user.move_ID;
             pokemon_move1 = moveID;

            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });

  return pokemon_move1;
}

function getMoveName2(name) {
  //pokemon_move2 = "";
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/moves/' + name,
            success: function(user) {
             var moveID = user.move_ID;
             pokemon_move2 = moveID;
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return pokemon_move2;
}

function getMoveName3(name) {
  //pokemon_move3 = "";
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/moves/' + name,
            success: function(user) {
             var moveID = user.move_ID;
             pokemon_move3 = moveID;
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return pokemon_move3;
}

function getMoveName4(name) {
  //pokemon_move4 = "";
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/moves/' + name,
            success: function(user) {
             var moveID = user.move_ID;
             pokemon_move4 = moveID;
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return pokemon_move4;
}

function getPokemonIDByName(name) {
$.ajax({
          type: 'GET',
          global: false,
          async:false,
          url: 'http://localhost:8080/store/pokemonNames/names/' + name,
          success: function(user) {
              var id = user.pokeName_ID;
              pokemon_id = id;
            },
error: function() {
    $('#errorMessages')
        .append($('<li>')
        .attr({class: 'list-group-item list-group-item-danger'})
        .text('Error calling web service. Please try again later.'));
}
});
return pokemon_id;
}


function getPokemonAbilityIDByName(ability) {
$.ajax({
          type: 'GET',
          global: false,
          async:false,
          url: 'http://localhost:8080/store/abilities/' + ability,
          success: function(user) {
              var id = user.ability_ID;
              ability_id = id;
            },
error: function() {
    $('#errorMessages')
        .append($('<li>')
        .attr({class: 'list-group-item list-group-item-danger'})
        .text('Error calling web service. Please try again later.'));
}
});
return ability_id;
}

function addPokemon() {
if($('#Move1').val() == "") {
    $('#Move1').val("N/A");
  }
if($('#Move2').val() == "") {
  $('#Move2').val("N/A");
}
if($('#Move3').val() == "") {
  $('#Move3').val("N/A");
}
if($('#Move4').val() == "") {
  $('#Move4').val("N/A");
}
var user = localStorage.getItem("userID");



if($("#Level").val() == "" || $("#Level").val() <= 0 || $("#Level").val() > 100) {
  alert("Please enter a valid number for Level");
}
else if($("#HP").val() == "" || $("#HP").val() <= 0 || $("#HP").val() > 999) {
  alert("Please enter a valid number for HP");
}
else if($("#Attack").val() == "" || $("#Attack").val() <= 0 || $("#Attack").val() > 999) {
  alert("Please enter a valid number for Attack");
}
else if($("#Defense").val() == "" || $("#Defense").val() <= 0 || $("#Defense").val() > 999) {
  alert("Please enter a valid number for Defense");
}
else if($("#Special_Attack").val() == "" || $("#Special_Attack").val() <= 0 || $("#Special_Attack").val() > 999) {
  alert("Please enter a valid number for Sp.Attack");
}
else if($("#Special_Defense").val() == "" || $("#Special_Defense").val() <= 0 || $("#Special_Defense").val() > 999) {
  alert("Please enter a valid number for Sp.Defense");
}
else if($("#Speed").val() == "" || $("#Speed").val() <= 0 || $("#Speed").val() > 999) {
  alert("Please enter a valid number for Speed");
}
else if ($('#Move1').val() == "N/A" && $('#Move2').val() == "N/A" && $('#Move3').val() == "N/A" && $('#Move4').val() == "N/A") {
  alert("Please Enter at least one move");
} else if($('#Move1').val() == "" && $('#Move2').val() == "" && $('#Move3').val() == "" && $('#Move4').val() == "") {
  alert("Please Enter at least one move");
} else {

=======
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
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/store/add',
            data: JSON.stringify({
<<<<<<< HEAD
                userID: user,
                pokeID: getPokemonIDByName($('#name').val()),
                level: $('#Level').val(),
                abilityID: getPokemonAbilityIDByName($('#Ability').val()),
                moveID_1: getMoveName1($('#Move1').val()),
                moveID_2: getMoveName2($('#Move2').val()),
                moveID_3: getMoveName3($('#Move3').val()),
                moveID_4: getMoveName4($('#Move4').val()),
                hp: $('#HP').val(),
                attack: $('#Attack').val(),
                defense: $('#Defense').val(),
                speed: $('#Speed').val(),
                spAttack: $('#Special_Attack').val(),
                spDefense: $('#Special_Defense').val()
=======
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
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'dataType': 'json',
           success: function() {
<<<<<<< HEAD
               window.location.href = "userPage.html";
           },
           error: function () {
            alert("Name, Move, or Ability cannot be found, please try again.");
            $('#errorMessages')
             .append($('<li>')
             .attr({class: 'list-group-item list-group-item-danger'})
             .text('Error calling web service. Please try again later.'));
            }
        });
      }
    }

  $("#addButton").click(function (event) {
    addPokemon();
  })

$("#cancelButton").click(function (event) {
  window.location.href = "userPage.html";
})
=======
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
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
