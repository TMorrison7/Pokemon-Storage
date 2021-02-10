DROP DATABASE IF EXISTS	PokemonDB;
CREATE DATABASE PokemonDB;

use PokemonDB;

CREATE TABLE `Users` (
  `user_ID` int PRIMARY KEY,
  `userName` varchar(20),
  `password` varchar(20)
);

CREATE TABLE `types` (
  `type_ID` int PRIMARY KEY,
  `typeName` varchar(10)
);

CREATE TABLE `abilities` (
  `ability_ID` int PRIMARY KEY,
  `ability` varchar(15)
);

CREATE TABLE `moves` (
  `move_ID` int PRIMARY KEY,
  `moveName` varchar(15)
);

CREATE TABLE `pokemonNames` (
  `poke_ID` int PRIMARY KEY,
  `type_ID1` int,
  `type_ID2` int,
  `name` varchar(20)
);

CREATE TABLE `Pokemon` (
  `unique_ID` int PRIMARY KEY AUTO_INCREMENT,
  `poke_ID` int,
  `user_ID` int,
  `level` int,
  `ability_ID` int,
  `move_ID1` int,
  `move_ID2` int,
  `move_ID3` int,
  `move_ID4` int,
  `hp` int,
  `attack` int,
  `defence` int,
  `speed` int,
  `spAttack` int,
  `spDefence` int
);

ALTER TABLE `pokemonNames` ADD FOREIGN KEY (`type_ID1`) REFERENCES `types` (`type_ID`);

ALTER TABLE `pokemonNames` ADD FOREIGN KEY (`type_ID2`) REFERENCES `types` (`type_ID`);

ALTER TABLE `Pokemon` ADD FOREIGN KEY (`poke_ID`) REFERENCES `pokemonNames` (`poke_ID`);

ALTER TABLE `Pokemon` ADD FOREIGN KEY (`user_ID`) REFERENCES `Users` (`user_ID`);

ALTER TABLE `Pokemon` ADD FOREIGN KEY (`ability_ID`) REFERENCES `abilities` (`ability_ID`);

ALTER TABLE `Pokemon` ADD FOREIGN KEY (`move_ID1`) REFERENCES `moves` (`move_ID`);

ALTER TABLE `Pokemon` ADD FOREIGN KEY (`move_ID2`) REFERENCES `moves` (`move_ID`);

ALTER TABLE `Pokemon` ADD FOREIGN KEY (`move_ID3`) REFERENCES `moves` (`move_ID`);

ALTER TABLE `Pokemon` ADD FOREIGN KEY (`move_ID4`) REFERENCES `moves` (`move_ID`);
