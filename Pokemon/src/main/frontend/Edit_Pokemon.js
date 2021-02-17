var pokeID = localStorage.getItem("pokeID");

$.getJSON("http://localhost:8080/store/pokemon/"+pokeID,
    function (data) {
        $("#name").val(data.name);
    }
);