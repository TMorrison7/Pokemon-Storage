package com.sg.Pokemon.DAO;

import com.sg.Pokemon.Model.*;

import java.util.List;

public interface PokemonDAO {

    List<Pokemon> getAllPokemon();
    Pokemon getPokemonByUniqueID(int unique_ID);
    List<Pokemon> getPokemonByUser(String username);
    Type getTypeByTypeID(int type_ID);
    List<Type> getTypeByPokemonID(int poke_ID);
    Ability getPokemonAbilityByAbilityID(int ability_ID);
    Ability getPokemonAbilityByPokemonID(int poke_ID);
    Moves getPokemonMoveByID(int move_ID);
    List<Moves> getPokemonMoves(int unique_ID);
    Names getPokemonNameByID(int unique_ID);
    Names getPokemonIDByName(String name);
    Pokemon addPokemon(Pokemon pokemon);
    void updatePokemon(Pokemon pokemon);
    void deletePokemon(int poke_ID);

}
