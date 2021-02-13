package com.sg.Pokemon.Controller;


import com.sg.Pokemon.Model.*;
import com.sg.Pokemon.service.ServiceLayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/store")
public class PokemonController {

    @Autowired
    ServiceLayer pokemon;

    @GetMapping("/pokemon")
    public List<Pokemon> getAllPokemon() {
        return pokemon.getAllPokemon();
    }

    @GetMapping("/users/{userName}")
    public List<Pokemon> getPokemonByUser(@PathVariable("userName") String userName) {
        return pokemon.getPokemonByUser(userName);
    }
    @GetMapping("/pokemon/{unique_id}")
    public Pokemon getPokemonByUniqueID(@PathVariable("unique_id") int uniqueID) {
        return pokemon.getPokemonByUniqueID(uniqueID);
    }
    @GetMapping("/pokemon/byType/{poke_ID}")
    public List<Type> getPokemonByTypeID(@PathVariable("poke_ID") int pokeID) {
        return pokemon.getTypeByPokemonID(pokeID);
    }
    @GetMapping("/types/byType/{type_ID}")
    public Type getPokemonByType(@PathVariable("type_ID") int typeID) {
        return pokemon.getTypeByTypeID(typeID);
    }
    @GetMapping("/pokemon/byMoves/{unique_ID}")
    public List<Moves> getPokemonByMoves(@PathVariable("unique_ID") int uniqueID) {
        return pokemon.getPokemonMoves(uniqueID);
    }
    @GetMapping("/moves/byMoves/{move_ID}")
    public Moves getPokemonByMoveID(@PathVariable("move_ID") int moveID) {
        return pokemon.getPokemonMovesByID(moveID);
    }
    @GetMapping("/pokemon/byAbility/{poke_ID}")
    public Ability getPokemonAbilityByID(@PathVariable("poke_ID") int pokeID) {
        return pokemon.getPokemonAbilityByPokemonID(pokeID);
    }
    @GetMapping("/abilities/byAbility/{ability_ID}")
    public Ability getPokemonAbilityByAbilityID(@PathVariable("ability_ID") int abilityID) {
        return pokemon.getPokemonAbilityByAbilityID(abilityID);
    }

    @GetMapping("/pokemonNames/id/{poke_ID}")
    public Names getPokemonName(@PathVariable("poke_ID") int pokeID) {
        return pokemon.getPokemonNameByID(pokeID);
    }

    @GetMapping("/pokemonNames/names/{name}")
    public Names getPokemonIDByName(@PathVariable("name") String name) {
        return pokemon.getPokemonIDByName(name);
    }
    @PutMapping("/alter")
    public Pokemon updatePokemon(@RequestBody Pokemon poke) {
        return pokemon.update(poke);
    }
    @PostMapping("/add")
    public Pokemon addPokemon(@RequestBody Pokemon poke) {
        return pokemon.addPokemon(poke);
    }
    @DeleteMapping("/pokemon/{unique_ID}")
        public void deletePokemon(@PathVariable("unique_ID") int uniqueID)  {
            pokemon.deletePokemon(uniqueID);
        }



}
