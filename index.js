function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Helper function to get all players
function allPlayers() {
    const game = gameObject();
    return Object.assign({}, game.home.players, game.away.players);
}

// 3.1 Retrieve Player Info

function numPointsScored(playerName) {
    const player = allPlayers()[playerName];
    return player ? player.points : undefined;
}

function shoeSize(playerName) {
    const player = allPlayers()[playerName];
    return player ? player.shoe : undefined;
}

// 3.2 Retrieve Team Info

function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return undefined;
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// 3.3 Player Numbers and Stats

function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            const playerObjs = game[team].players;
            const numbers = [];
            for (let player in playerObjs) {
                numbers.push(playerObjs[player].number);
            }
            return numbers;
        }
    }
    return [];
}

function playerStats(playerName) {
    return allPlayers()[playerName];
}

// 3.4 Advanced Challenges

function bigShoeRebounds() {
    const players = allPlayers();
    let maxShoeSize = 0;
    let rebounds = 0;

    for (let player in players) {
        const currentShoe = players[player].shoe;
        if (currentShoe > maxShoeSize) {
            maxShoeSize = currentShoe;
            rebounds = players[player].rebounds;
        }
    }

    return rebounds;
}

function mostPointsScored() {
    const players = allPlayers();
    let topPlayer = "";
    let maxPoints = 0;

    for (let player in players) {
        const points = players[player].points;
        if (points > maxPoints) {
            maxPoints = points;
            topPlayer = player;
        }
    }

    return topPlayer;
}

function winningTeam() {
    const game = gameObject();
    let homeTotal = 0;
    let awayTotal = 0;

    for (let player in game.home.players) {
        homeTotal += game.home.players[player].points;
    }

    for (let player in game.away.players) {
        awayTotal += game.away.players[player].points;
    }

    return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const players = Object.keys(allPlayers());
    let longest = "";

    for (let i = 0; i < players.length; i++) {
        if (players[i].length > longest.length) {
            longest = players[i];
        }
    }

    return longest;
}

function doesLongNameStealATon() {
    const players = allPlayers();
    const longestName = playerWithLongestName();

    let maxSteals = 0;
    for (let player in players) {
        if (players[player].steals > maxSteals) {
            maxSteals = players[player].steals;
        }
    }

    return players[longestName].steals === maxSteals;
}