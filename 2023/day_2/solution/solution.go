package solution

func AddPossibleGameIDs(games []Game, cubesInBag Cubes) int {
	ans := 0

	for _, game := range games {
		if game.isPossible(cubesInBag) {
			ans += game.ID
		}
	}

	return ans
}

func AddMinimumSetPowers(games []Game) int {
	ans := 0

	for _, game := range games {
		ans += game.getMinimumSet().power()
	}

	return ans
}
