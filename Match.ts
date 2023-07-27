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
        matches.add(this);
    }
    public update(scoreHome: number, scoreAway: number) {
        // Update score of a match
        this.scoreHome = scoreHome;
        this.scoreAway = scoreAway;
    }
    public finish() {
        // Remove the match from collection
        matches.delete(this);
    }
    static summary() {
        // Get all matches sorted by a sum of scores/most recent
        return Array.from(matches)
            .map(
                (match): Score => {
                    return {
                        home: { country: match.home, goals: match.scoreHome },
                        away: { country: match.away, goals: match.scoreAway }
                    };
                }
            )
            .sort((a: Score, b: Score): number => {
                const sum: number =
                    b.home.goals + b.away.goals - a.home.goals - a.away.goals;
                if (sum === 0) return -1;
                return sum;
            });
    }
}

export default Match;
