package main

import (
	"fmt"
	"log"
	"os"

	"aoc2023/day_7/solution"
)

func main() {
	inp, err := os.ReadFile("day_7/resources/input.txt")

	if err != nil {
		log.Fatal(err)
	}
	hands := solution.ParseHands(string(inp))
	fmt.Println(solution.SolvePartTwo(hands))
}
