var pokeID = localStorage.getItem("pokeID");
<<<<<<< HEAD
var ability = localStorage.getItem("ability");
var unique = localStorage.getItem("unique");
var userID;
var uniqueID ;
var abilityID;
var moveID_1;
var moveID_2;
var moveID_3;
var moveID_4;
=======
var userID = 0;
var uniqueID = 0;
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c

$.getJSON("http://localhost:8080/store/pokemonNames/id/" + pokeID,
    function (data) {
        $("#name").val(data['pokemonName']);
    }
);

$.getJSON("http://localhost:8080/store/pokemon/byType/" + pokeID,
    function (data) {
        let types = "";
<<<<<<< HEAD
        $.each(data, function (indexInArray, valueOfElement) {
=======
        $.each(data, function (indexInArray, valueOfElement) { 
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
            if (indexInArray == 1){
                types += '/';
            }
            types += valueOfElement['typeName'];
        });
        $("#Type").val(types);
    }
);

<<<<<<< HEAD
$.getJSON("http://localhost:8080/store/pokemon/byAbility/" + ability,
=======
$.getJSON("http://localhost:8080/store/pokemon/byAbility/" + pokeID,
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
    function (data) {
        $("#Ability").val(data['ability']);
    }
);

<<<<<<< HEAD
$.getJSON("http://localhost:8080/store/pokemon/"+unique,
=======
$.getJSON("http://localhost:8080/store/pokemon/"+pokeID,
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
    function (data) {
        userID = data['userID'];
        uniqueID = data['uniqueID'];
        $("#Level").val(data['level']);
        $("#HP").val(data['hp']);
        $("#Attack").val(data['attack']);
        $("#Defense").val(data['defense']);
        $("#Speed").val(data['speed']);
        $("#Special_Attack").val(data['spAttack']);
        $("#Special_Defense").val(data['spDefense']);
<<<<<<< HEAD

        $.getJSON("http://localhost:8080/store/pokemon/byMoves/" + data['uniqueID'],
            function (data2) {
                $.each(data2, function (indexInArray, valueOfElement) {
=======
        
        $.getJSON("http://localhost:8080/store/pokemon/byMoves/" + data['uniqueID'],
            function (data2) {
                $.each(data2, function (indexInArray, valueOfElement) { 
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
                    $("#Move" + (indexInArray+1)).val(data2[indexInArray]['moveName']);
                });
            }
        );
    }
);

<<<<<<< HEAD

function getPokemonAbilityIDByName(ability) {
$.ajax({
          type: 'GET',
          global: false,
          async:false,
          url: 'http://localhost:8080/store/abilities/' + ability,
          success: function(user) {
              var id = user.ability_ID;
              abilityID = id;
            },
error: function() {
    $('#errorMessages')
        .append($('<li>')
        .attr({class: 'list-group-item list-group-item-danger'})
        .text('Error calling web service. Please try again later.'));
}
});
return abilityID;
}

function getMoveName1(name) {
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/moves/' + name,
            success: function(user) {
             var moveID = user.move_ID;
             moveID_1 = moveID;
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return moveID_1;
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
             moveID_2 = moveID;
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return moveID_2;
}

function getMoveName3(name) {
  //pokemon_move2 = "";
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/moves/' + name,
            success: function(user) {
             var moveID = user.move_ID;
             moveID_3 = moveID;
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return moveID_3;
}

function getMoveName4(name) {
  //pokemon_move2 = "";
  $.ajax({
            type: 'GET',
            global: false,
            async:false,
            url: 'http://localhost:8080/store/moves/' + name,
            success: function(user) {
             var moveID = user.move_ID;
             moveID_4 = moveID;
            },
  error: function() {
      $('#errorMessages')
          .append($('<li>')
          .attr({class: 'list-group-item list-group-item-danger'})
          .text('Error calling web service. Please try again later.'));
  }
  });
  return moveID_4;
}

$("#SaveChanges").click(function () {

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


    var data = {
        "pokeID": pokeID,
        "userID": userID,
        "level": $("#Level").val(),
        "abilityID": getPokemonAbilityIDByName($("#Ability").val()),
        "moveID_1": getMoveName1($("#Move1").val()),
        "moveID_2": getMoveName2($("#Move2").val()),
        "moveID_3": getMoveName3($("#Move3").val()),
        "moveID_4": getMoveName4($("#Move4").val()),
=======
$("#SaveChanges").click(function () { 
    let abilityID = 0;
    $.getJSON("http://localhost:8080/store/abilities/" + $("#Ability").val(),
        function (data3) {
            abilityID = data3['abilityID']
        }
    ); 

    let moveID_1 = 0;
    let moveID_2 = 0;
    let moveID_3 = 0;
    let moveID_4 = 0;
    $.getJSON("http://localhost:8080/store/moves/" + $("#Move1").val(),
        function (temp1) {
            moveID_1 = temp1['move_ID'];
        }
    ); 
    $.getJSON("http://localhost:8080/store/moves/" + $("#Move2").val(),
        function (temp2) {
            moveID_2 = temp2['move_ID'];
        }
    );
    $.getJSON("http://localhost:8080/store/moves/" + $("#Move3").val(),
        function (temp3) {
            moveID_3 = temp3['move_ID'];
        }
    );
    $.getJSON("http://localhost:8080/store/moves/" + $("#Move4").val(),
        function (temp4) {
            moveID_4 = temp4['move_ID'];
        }
    );

    let data = {
        "pokeID": pokeID,
        "userID": userID,
        "level": $("#Level").val(),
        "abilityID": abilityID,
        "moveID_1": moveID_1,
        "moveID_2": moveID_2,
        "moveID_3": moveID_3,
        "moveID_4": moveID_4,
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
        "attack": $("#Attack").val(),
        "defense": $("#Defense").val(),
        "speed": $("#Speed").val(),
        "spAttack": $("#Special_Attack").val(),
        "spDefense": $("#Special_Defense").val(),
        "uniqueID": uniqueID,
        "hp": $("#HP").val()
    }
<<<<<<< HEAD
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
else if($("#Special_Defense").val() == "" || $("#Special_Defense").val() <= 0 || $("#Special_Defense").val() > 999) {
  alert("Please enter a valid number for Sp.Defense");
}
else if($("#Special_Attack").val() == "" || $("#Special_Attack").val() <= 0 || $("#Special_Attack").val() > 999) {
  alert("Please enter a valid number for Sp.Attack");
}
else if($("#Speed").val() == "" || $("#Speed").val() <= 0 || $("#Speed").val() > 999) {
  alert("Please enter a valid number for Speed");
}
else if ($('#Move1').val() == "N/A" && $('#Move2').val() == "N/A" && $('#Move3').val() == "N/A" && $('#Move4').val() == "N/A") {
  alert("Please Enter at least one move");
} else if($('#Move1').val() == "" && $('#Move2').val() == "" && $('#Move3').val() == "" && $('#Move4').val() == "") {
  alert("Please Enter at least one move");
} else {

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:8080/store/alter',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        'dataType': 'json',
        data: JSON.stringify(data),
    }).done(function () {
        window.location.replace("userPage.html");
=======

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:8080/store/pokemon/alter',
        contentType: 'json',
        data: JSON.stringify(data), 
    }).done(function () {
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
        console.log('SUCCESS');
    }).fail(function (msg) {
        console.log('FAIL');
    });
<<<<<<< HEAD
  }
});

$("#Leave").click(function () {
    window.location.replace("userPage.html");
})
=======
});
>>>>>>> 177c9cf963436be095c205ad8c524c80f30eec5c
