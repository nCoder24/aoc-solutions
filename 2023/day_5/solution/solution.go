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

func FindClosestLocationWithRangeOfSeeds(maps []Map, seedRanges [][]uint) uint {
	locationToSeedMap := reverse(maps)
	for i := uint(0); true; i++ {
		seed := calculateSeedNumber(locationToSeedMap, i)

		for _, seedRange := range seedRanges {
			if seed >= seedRange[0] && seed < seedRange[0]+seedRange[1] {
				return i
			}
		}
	}

	return 0
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

func calculateSeedNumber(maps []Map, location uint) uint {
	curr := location

	for _, m := range maps {
		curr = reverseConvert(curr, m)
	}

	return curr
}

func reverse(maps []Map) []Map {
	reversed := make([]Map, len(maps))

	for i, m := range maps {
		reversed[len(maps)-i-1] = m
	}

	return reversed
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

func reverseConvert(val uint, m Map) uint {
	for _, conv := range m {
		if val >= conv.dest && val < conv.dest+conv.span {
			return conv.src + (val - conv.dest)
		}
	}

	return val
}

func ParseMapsAndSeedRanges(raw string) ([]Map, [][]uint) {
	sections := strings.Split(raw, "\n\n")
	return parseMaps(sections[1:]), parseSeedRanges(sections[0])
}

func parseSeedRanges(raw string) [][]uint {
	ranges := make([][]uint, 0)
	chunk := make([]uint, 0)

	for _, num := range strings.Split(raw, " ")[1:] {
		chunk = append(chunk, toUint(num))

		if len(chunk) == 2 {
			ranges = append(ranges, chunk)
			chunk = make([]uint, 0)
		}
	}

	return ranges
}

func ParseMapsAndSeeds(raw string) ([]Map, []uint) {
	sections := strings.Split(raw, "\n\n")
	return parseMaps(sections[1:]), parseSeeds(sections[0])
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
