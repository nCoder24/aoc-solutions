package solution

type Race struct {
	Time, Distance int
}

func CalculateNumberOfWaysToBeatRecords(races []Race) int {
	ways := 1

	for _, race := range races {
		ways *= CalculateNumberOfWaysToBeatRecord(race)
	}

	return ways
}

func CalculateNumberOfWaysToBeatRecord(race Race) int {
	ways := 0

	for i := 0; i < race.Time; i++ {
		if i*(race.Time-i) > race.Distance {
			ways++
		}
	}

	return ways
}
