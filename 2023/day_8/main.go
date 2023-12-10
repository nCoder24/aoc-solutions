package main

import (
	"aoc2023/day_8/solution"
	"fmt"
	"log"
	"os"
)

func main() {
	input, err := os.ReadFile("day_8/resources/input.txt")
	if err != nil {
		log.Fatal(err)
	}

	instructions, m := solution.ParseInputs(string(input))

	//fmt.Println("Part 1:", solution.CalculateSteps(instructions, m))
	fmt.Println("Part 2:", solution.CalculateStepsPartTwo(instructions, m))
}
