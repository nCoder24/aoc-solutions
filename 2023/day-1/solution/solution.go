package solution

import (
	"fmt"
	"strconv"
	"unicode"
)

func findFirstDigit(line string) uint8 {
	for i := 0; i < len(line); i++ {
		if unicode.IsDigit(rune(line[i])) {
			digit, _ := strconv.Atoi(string(line[i]))
			return uint8(digit)
		}

		if digit, ok := getSpelledDigit(line, i); ok {
			return digit
		}
	}

	return 0
}

func findLastDigit(line string) uint8 {
	for i := len(line) - 1; i >= 0; i-- {
		if unicode.IsDigit(rune(line[i])) {
			digit, _ := strconv.Atoi(string(line[i]))
			return uint8(digit)
		}

		if digit, ok := getSpelledDigit(line, i); ok {
			return digit
		}
	}

	return 0
}

func getSpelledDigit(line string, last int) (uint8, bool) {
	slices := make([]string, 0, 3)

	for i := 2; i <= 4; i++ {
		if last-i >= 0 {
			slices = append(slices, line[last-i:last+1])
		}
	}

	for _, slice := range slices {
		if digits[slice] != 0 {
			return digits[slice], true
		}
	}

	return 0, false
}

func Solve(lines []string) uint64 {
	ans := uint64(0)

	for _, line := range lines {
		fmt.Println(findFirstDigit(line), findLastDigit(line))
		calibration := 10*findFirstDigit(line) + findLastDigit(line)
		ans += uint64(calibration)
		fmt.Println(calibration)
	}

	return ans
}
