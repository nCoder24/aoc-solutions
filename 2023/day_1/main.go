package main

import (
	"aoc2023/day_1/resources"
	"aoc2023/day_1/solution"
	"fmt"
)

func main() {
	fmt.Println(solution.AddCalibrationValues(solution.ParseLines(resources.CalibrationDoc)))
}
