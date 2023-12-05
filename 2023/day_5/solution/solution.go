package solution

import (
	"fmt"
	"log"
	"math"
	"strconv"
	"strings"
)

type Conversion struct {
	src, dest, span uint
}

type Map []Conversion

func (c Conversion) String() string {
	return fmt.Sprintf("{src:%d, dest:%d, span:%d}", c.src, c.dest, c.span)
}

func FindClosestLocation(maps []Map, seeds []uint) uint {
	closest := uint(math.Inf(1))

	for _, location := range CalculateLocations(maps, seeds) {
		closest = uint(math.Min(float64(closest), float64(location)))
	}

	return closest
}

func CalculateLocations(maps []Map, seeds []uint) []uint {
	locations := make([]uint, 0, len(seeds))
	for _, seed := range seeds {
		locations = append(locations, calculateLocation(maps, seed))
	}

	return locations
}

func calculateLocation(maps []Map, seed uint) uint {
	curr := seed

	for _, m := range maps {
		curr = convert(curr, m)
	}

	return curr
}

func convert(val uint, m Map) uint {
	for _, conv := range m {
		if val >= conv.src && val < conv.src+conv.span {
			return conv.dest + (val - conv.src)
		}
	}

	return val
}

func ParseSeedsAndMaps(raw string) ([]uint, []Map) {
	sections := strings.Split(raw, "\n\n")
	return parseSeeds(sections[0]), parseMaps(sections[1:])
}

func parseSeeds(raw string) []uint {
	seeds := make([]uint, 0)

	for _, num := range strings.Split(raw, " ")[1:] {
		seeds = append(seeds, toUint(num))
	}

	return seeds
}

func parseMaps(rawMaps []string) []Map {
	maps := make([]Map, 0)

	for _, mapSection := range rawMaps {
		maps = append(maps, parseMap(mapSection))
	}

	return maps
}

func parseMap(raw string) Map {
	conversions := make(Map, 0)
	for _, conv := range strings.Split(raw, "\n")[1:] {
		conversions = append(conversions, parseConversion(conv))
	}

	return conversions
}

func parseConversion(raw string) Conversion {
	conv := strings.Split(raw, " ")

	return Conversion{
		dest: toUint(conv[0]), src: toUint(conv[1]), span: toUint(conv[2]),
	}
}

func toUint(s string) uint {
	num, err := strconv.Atoi(s)

	if err != nil {
		log.Fatal(err)
	}

	return uint(num)
}
