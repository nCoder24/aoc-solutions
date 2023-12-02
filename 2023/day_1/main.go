package main

import (
	"aoc2023/day_1/resources"
	"aoc2023/day_1/solution"
	"fmt"
	"strings"
)

func main() {
	lines := strings.Split(resources.CalibrationDoc, "\n")
	fmt.Println(solution.Solve(lines))
}
