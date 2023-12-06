package main

import (
	"aoc2023/day_6/solution"
	"fmt"
)

var input = []solution.Race{
	{Time: 40, Distance: 233},
	{Time: 82, Distance: 1011},
	{Time: 84, Distance: 1110},
	{Time: 92, Distance: 1487},
}

var sample = []solution.Race{
	{Time: 7, Distance: 9},
	{Time: 15, Distance: 40},
	{Time: 30, Distance: 200},
}

var samplePartTwo = solution.Race{71530, 940200}
var inputPartTwo = solution.Race{40828492, 233101111101487}

func main() {
	fmt.Println("Part 1:", solution.CalculateNumberOfWaysToBeatRecords(input))
	fmt.Println("Part 2:", solution.CalculateNumberOfWaysToBeatRecord(inputPartTwo))
}
