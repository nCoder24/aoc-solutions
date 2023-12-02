package solution

import (
	"strconv"
	"strings"
)

func parseCubes(set string) Cubes {
	cubeStrings := strings.Split(set, ", ")
	cubes := map[string]int{}

	for _, cubeString := range cubeStrings {
		cubeQty := strings.Split(cubeString, " ")
		qty, _ := strconv.Atoi(cubeQty[0])
		cubes[cubeQty[1]] = qty
	}

	return Cubes{
		Red:   cubes["red"],
		Green: cubes["green"],
		Blue:  cubes["blue"],
	}
}

func parseGame(gameString string) Game {
	gameAndSubsets := strings.Split(gameString, ": ")
	gameIDString, cubeSets := strings.Split(gameAndSubsets[0], " ")[1], strings.Split(gameAndSubsets[1], "; ")
	gameID, _ := strconv.Atoi(gameIDString)
	sets := make([]Cubes, 0)

	for _, set := range cubeSets {
		sets = append(sets, parseCubes(set))
	}

	return Game{
		ID:   gameID,
		Sets: sets,
	}
}

func ParseGames(gamesString string) []Game {
	gameStrings := strings.Split(gamesString, "\n")
	games := make([]Game, 0)

	for _, gameString := range gameStrings {
		games = append(games, parseGame(gameString))
	}

	return games
}
