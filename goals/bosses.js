const bossesGoals = [{ "name": "Parry Grandmaster" }, { "name": "Flare EXPLODEBOT 5000" }, { "name": "Kill Roxxy or Moxxy with a sniper" }, { "name": "Kill Indigo after smoking & drinking" }, { "name": "Kill all the Purples before Indigo" }, { "name": "Kill Anthropophagite without ever getting poisoned" }, { "name": "Kill Grandmaster" }, { "name": "Kill Indigo" }, { "name": "Kill Roxxy & Moxxy" }, { "name": "Kill EXPLODEBOT 5000" }, { "name": "Kill Blue Captain" }, { "name": "Kill Anthropophagite" }];

function getRandomBossesGoals() {
    const nbGoals = getRandomNumber(0, 2);

    let _goals = [...bossesGoals];
    let result = [];

    for (let i = 0; i < nbGoals; i++) {
        const rndIndex = getRandomNumber(0, _goals.length - 1);
        result = [...result, _goals[rndIndex]];
        _goals.splice(rndIndex, 1);
    }

    return result
}