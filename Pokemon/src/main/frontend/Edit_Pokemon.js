var pokeID = localStorage.getItem("pokeID");
var userID = 0;
var uniqueID = 0;

$.getJSON("http://localhost:8080/store/pokemonNames/id/" + pokeID,
    function (data) {
        $("#name").val(data['pokemonName']);
    }
);

$.getJSON("http://localhost:8080/store/pokemon/byType/" + pokeID,
    function (data) {
        let types = "";
        $.each(data, function (indexInArray, valueOfElement) { 
            if (indexInArray == 1){
                types += '/';
            }
            types += valueOfElement['typeName'];
        });
        $("#Type").val(types);
    }
);

$.getJSON("http://localhost:8080/store/pokemon/byAbility/" + pokeID,
    function (data) {
        $("#Ability").val(data['ability']);
    }
);

$.getJSON("http://localhost:8080/store/pokemon/"+pokeID,
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
        
        $.getJSON("http://localhost:8080/store/pokemon/byMoves/" + data['uniqueID'],
            function (data2) {
                $.each(data2, function (indexInArray, valueOfElement) { 
                    $("#Move" + (indexInArray+1)).val(data2[indexInArray]['moveName']);
                });
            }
        );
    }
);

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
        "attack": $("#Attack").val(),
        "defense": $("#Defense").val(),
        "speed": $("#Speed").val(),
        "spAttack": $("#Special_Attack").val(),
        "spDefense": $("#Special_Defense").val(),
        "uniqueID": uniqueID,
        "hp": $("#HP").val()
    }

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:8080/store/pokemon/alter',
        contentType: 'json',
        data: JSON.stringify(data), 
    }).done(function () {
        console.log('SUCCESS');
    }).fail(function (msg) {
        console.log('FAIL');
    });
});