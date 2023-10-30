package main.io.github.ncoder24.aoc;

import java.util.Arrays;
import java.util.Map;

public class Circuit {
  private final Map<String, Connection> wiring;

  public Circuit(Map<String, Connection> wiring) {
    this.wiring = wiring;
  }

  public int evaluateSignal(String wire) {
    Connection connection = wiring.get(wire);
    System.out.println(connection);
    if (connection.isDirect()) {
      return connection.getSignal();
    }

    return 0;
  }
}
