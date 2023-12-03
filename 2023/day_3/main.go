package main

import (
	"aoc2023/day_3/resources"
	"aoc2023/day_3/solution"
	"fmt"
)

func main() {
	engine := solution.ParseEngine(resources.EngineTwo)
	numbers := solution.FindAllNumbersWithIndices(engine)

	fmt.Println("Part 1:", solution.AddPartNumbers(engine, numbers))
	fmt.Println(solution.FindAllStarPositions(engine))
}
