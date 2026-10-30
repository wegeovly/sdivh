import { describe, expect, test } from "bun:test";
import { picnicTrips, residentialTrips, trips } from "../src/lib/site-data";

describe("program category split", () => {
  test("picnic page shows only the four Jodhpur day excursions", () => {
    expect(picnicTrips.map((t) => t.id)).toEqual([
      "kailana-machia-picnic",
      "mehrangarh-fort-picnic",
      "mandore-picnic",
      "rao-jodha-picnic",
    ]);
  });

  test("Mount Abu and Rishikesh sit on the residential page, not the picnic page", () => {
    expect(residentialTrips.map((t) => t.id)).toEqual(["sunrise-summit", "ashram-mindfulness"]);
    expect(picnicTrips.some((t) => t.id === "sunrise-summit" || t.id === "ashram-mindfulness")).toBe(false);
  });

  test("every trip belongs to exactly one program", () => {
    expect(picnicTrips.length + residentialTrips.length).toBe(trips.length);
    expect(trips.every((t) => ["picnic", "residential"].includes(t.category))).toBe(true);
  });
});
