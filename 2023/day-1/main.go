package main

import (
	"aoc2023/day-1/resources"
	"aoc2023/day-1/solution"
	"fmt"
	"strings"
)

func main() {
	lines := strings.Split(resources.CalibrationDoc, "\n")
	fmt.Println(solution.Solve(lines))
}
