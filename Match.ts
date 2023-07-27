export const matches: Set<Match> = new Set([]);

type CountryGoal = { country: string; goals: number };

type Score = { home: CountryGoal; away: CountryGoal };

export class Match {
    private home: string;
    private away: string;
    private scoreHome: number = 0;
    private scoreAway: number = 0;
    constructor(home: string, away: string) {
        this.home = home;
        this.away = away;
    }
    public update(scoreHome: number, scoreAway: number) {
        // Update score of a match
    }
    public finish() {     
        // Remove the match from collection
    }
    static summary() {
        // Get all matches sorted by a sum of scores/most recent 
        return [
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
        ];
    }
}

export default Match;