package main.io.github.ncoder24.aoc;

public interface Connection {
  boolean isDirect();

  String getGate();

  int getSignal();
  String[] getWires();
}
