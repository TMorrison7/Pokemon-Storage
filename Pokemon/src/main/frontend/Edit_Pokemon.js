var pokeID = localStorage.getItem("pokeID");

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