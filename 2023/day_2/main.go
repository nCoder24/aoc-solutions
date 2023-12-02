package main

import (
	"aoc2023/day_2/resources"
	"aoc2023/day_2/solution"
	"fmt"
)

func main() {
	cubesInBag := solution.Cubes{
		Red:   resources.RedCubesInBag,
		Green: resources.GreenCubesInBag,
		Blue:  resources.BlueCubesInBag,
	}

	games := solution.ParseGames(resources.Games)
	fmt.Println("Part 1:", solution.AddPossibleGameIDs(games, cubesInBag))
	fmt.Println("Part 2:", solution.AddMinimumSetPowers(games))
}
