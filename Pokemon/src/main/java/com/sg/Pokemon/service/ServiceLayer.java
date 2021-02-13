package com.sg.Pokemon.service;

import com.sg.Pokemon.DAO.PokemonDAO;
import com.sg.Pokemon.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceLayer {

    @Autowired
    PokemonDAO pokemonDAO;

public List<Pokemon> getAllPokemon() {
    List<Pokemon> pokemons = pokemonDAO.getAllPokemon();
    return pokemons;
}

public Pokemon getPokemonByUniqueID(int unique_ID) {
    Pokemon pokemon_unique = pokemonDAO.getPokemonByUniqueID(unique_ID);
    return pokemon_unique;
}

public List<Pokemon> getPokemonByUser(String userName) {
    List<Pokemon> userPokemon = pokemonDAO.getPokemonByUser(userName);
    return userPokemon;
}

public Type getTypeByTypeID(int type_ID) {
    Type ty = pokemonDAO.getTypeByTypeID(type_ID);
    return ty;
}

public List<Type> getTypeByPokemonID(int poke_ID) {
    List<Type> type = pokemonDAO.getTypeByPokemonID(poke_ID);
    return type;
}

public Ability getPokemonAbilityByAbilityID(int ability_ID) {
    Ability ab = pokemonDAO.getPokemonAbilityByAbilityID(ability_ID);
    return ab;
}

public Ability getPokemonAbilityByPokemonID(int poke_ID) {
    Ability ability = pokemonDAO.getPokemonAbilityByPokemonID(poke_ID);
    return ability;
}

public List<Moves> getPokemonMoves(int unique_ID) {
    List<Moves> move = pokemonDAO.getPokemonMoves(unique_ID);
    return move;
}

public Names getPokemonNameByID(int unique_ID) {
    Names name = pokemonDAO.getPokemonNameByID(unique_ID);
    return name;
}

public Moves getPokemonMovesByID(int move_ID) {
    Moves mo = pokemonDAO.getPokemonMoveByID(move_ID);
    return mo;
}

public Names getPokemonIDByName(String name) {
        Names na = pokemonDAO.getPokemonIDByName(name);
        return na;
    }

public Pokemon addPokemon(Pokemon pokemon) {
    pokemon.setUserID(pokemon.getUserID());
    pokemonDAO.addPokemon(pokemon);
    return pokemon;
}

public Pokemon update(Pokemon pokemon) {
pokemonDAO.updatePokemon(pokemon);
return pokemonDAO.getPokemonByUniqueID(pokemon.getUniqueID());
}

public void deletePokemon(int unique_id) {
    pokemonDAO.deletePokemon(unique_id);
}

}
