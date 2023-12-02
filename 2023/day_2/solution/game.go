package solution

type Cubes struct {
	Red, Green, Blue int
}

func (c Cubes) power() int {
	return c.Red * c.Green * c.Blue
}

type Game struct {
	ID   int
	Sets []Cubes
}

func (game Game) isPossible(cubesInBag Cubes) bool {
	for _, cubes := range game.Sets {
		if cubes.Red > cubesInBag.Red || cubes.Green > cubesInBag.Green || cubes.Blue > cubesInBag.Blue {
			return false
		}
	}

	return true
}

func (game Game) getMinimumSet() Cubes {
	minimumSet := Cubes{}

	for _, cubes := range game.Sets {
		minimumSet.Red = max(minimumSet.Red, cubes.Red)
		minimumSet.Green = max(minimumSet.Green, cubes.Green)
		minimumSet.Blue = max(minimumSet.Blue, cubes.Blue)
	}

	return minimumSet
}
