package main

import (
	"aoc2023/day_5/solution"
	"fmt"
	"log"
	"os"
)

func main() {
	input, err := os.ReadFile("day_5/resources/input.txt")

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Part-1:", solution.FindClosestLocation(solution.ParseMapsAndSeeds(string(input))))
	fmt.Println("Part-2:", solution.FindClosestLocationWithRangeOfSeeds(solution.ParseMapsAndSeedRanges(string(input))))
}
