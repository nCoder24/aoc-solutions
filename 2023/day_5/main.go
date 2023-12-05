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

	seeds, maps := solution.ParseSeedsAndMaps(string(input))
	fmt.Println(solution.FindClosestLocation(maps, seeds))
}
