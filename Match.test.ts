import Match, { matches } from "./Match";

let matchOne: Match,
    matchTwo: Match,
    matchThree: Match,
    matchFour: Match,
    matchFive: Match;

beforeEach(() => {
    matches.clear();
    matchOne = new Match("Mexico", "Canada");
    matchTwo = new Match("Spain", "Brazil");
    matchThree = new Match("Germany", "France");
    matchFour = new Match("Uruguay", "Italy");
    matchFive = new Match("Argentina", "Australia");

    matchOne.update(0, 5);
    matchTwo.update(10, 2);
    matchThree.update(2, 2);
    matchFour.update(6, 6);
    matchFive.update(3, 1);
});

test("Sorting matches in total score/recently started", () => {
    
    expect(Match.summary()).toEqual([
        {
            home: { country: "Uruguay", goals: 6 },
            away: { country: "Italy", goals: 6 }
        },
        {
            home: { country: "Spain", goals: 10 },
            away: { country: "Brazil", goals: 2 }
        },
        {
            home: { country: "Mexico", goals: 0 },
            away: { country: "Canada", goals: 5 }
        },
        {
            home: { country: "Argentina", goals: 3 },
            away: { country: "Australia", goals: 1 }
        },
        {
            home: { country: "Germany", goals: 2 },
            away: { country: "France", goals: 2 }
        }
    ]);
});

test("Finishing the match", () => {
    
    matchTwo.finish();

    expect(Match.summary()).not.toContainEqual({
        home: { country: "Spain", goals: 10 },
        away: { country: "Brazil", goals: 2 }
    });
});
