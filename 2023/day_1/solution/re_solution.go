package solution

import (
	"fmt"
	"regexp"
	"strings"
)

var firstDigitRE, lastDigitRE *regexp.Regexp

func init() {
	digitPatternStr := strings.Join(getDigitsAndSpellings(), "|")
	firstDigitRE = regexp.MustCompile(digitPatternStr)
	lastDigitRE = regexp.MustCompile(fmt.Sprintf(".*(%s)", digitPatternStr))
}

type Line string

func (line Line) findFirstDigit() uint {
	return toDigit(firstDigitRE.FindString(string(line)))
}

func (line Line) findLastDigit() uint {
	return toDigit(lastDigitRE.FindStringSubmatch(string(line))[1])
}

func (line Line) calibrationValue() uint {
	return line.findFirstDigit()*10 + line.findLastDigit()
}

func AddCalibrationValues(lines []Line) uint {
	sum := uint(0)

	for _, line := range lines {
		sum += line.calibrationValue()
	}

	return sum
}

func ParseLines(calibrationDoc string) []Line {
	rawLines := strings.Split(calibrationDoc, "\n")
	lines := make([]Line, 0, len(rawLines))

	for _, rawLine := range rawLines {
		lines = append(lines, Line(rawLine))
	}

	return lines
}
