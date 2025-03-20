const fs = require("fs");

class Player {
    static getAllPlayers() {
        return JSON.parse(fs.readFileSync("./data/players.json", "utf-8"));
    }

    static getPlayerbyID(id) {
        const players = this.getAllPlayers();
        return players.find(el => el.id === id);
    }

    static getNewPlayerID() {
        const players = this.getAllPlayers();
        const lastPlayer = players[players.length - 1];
        return lastPlayer ? lastPlayer.id + 1 : 1;
    }

    static addNewPlayer(newPlayerData) {
        const players = this.getAllPlayers();
        const newPlayer = Object.assign({ id: this.getNewPlayerID() }, newPlayerData);
        players.push(newPlayer);

        fs.writeFileSync("./data/players.json", JSON.stringify(players, null, 2));

        return newPlayer;
    }

    static updatePlayer(id, {firstname, lastname, age, team}) {
        const players = this.getAllPlayers();
        const player =  players.find(el => el.id === id);

        if (firstname) player.firstname = firstname;
        if (lastname) player.lastname = lastname;
        if (age) player.age = age;
        if (team) player.team = team;

        if (player) fs.writeFileSync("./data/players.json", JSON.stringify(players, null, 2));
        return player;
    }
    
    static deletePlayer(id) {
        const players = this.getAllPlayers();
        const playerIndex = players.findIndex(obj => obj.id === id);

        if (playerIndex === -1) {
            return false;
        }
        
        const player = players[playerIndex]
        players.splice(playerIndex, 1);
        fs.writeFileSync("./data/players.json", JSON.stringify(players, null, 2));
        return player;
    }
}

module.exports = Player;
