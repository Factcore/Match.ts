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
    }
}

export default Match;