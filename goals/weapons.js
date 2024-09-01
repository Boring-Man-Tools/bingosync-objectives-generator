const difficulties = {
    EASY: 3,
    NORMAL: 2,
    HARD: 1
}

class Weapon {
    constructor(name, difficulty, canHeadshot = false) {
        this.name = name;
        this.difficulty = difficulty;
        this.canHeadshot = canHeadshot;
    }

    toJSON(nbEnemies) {
        // 1/10 chance of a headshot goal
        const isHeadshot = this.canHeadshot &&
            getRandomNumber(1, 10) === getRandomNumber(1, 10);
        let enemies = isHeadshot ? roundToNearestMultipleOf(nbEnemies / 2, 5) : nbEnemies;

        return {
            name: `${isHeadshot ? "Headshot" : "Kill"} ${enemies} enemies with ${this.name}`
        };
    }

    nbEnemiesToKill() {
        const roundRandToFive = (min, max) => {
            const rand = getRandomNumber(min, max);
            return roundToNearestMultipleOf(rand, 5);
        }

        switch (this.difficulty) {
            case difficulties.EASY:
                return roundRandToFive(50, 80);
            case difficulties.NORMAL:
                return roundRandToFive(25, 50);
            case difficulties.HARD:
                return roundRandToFive(10, 20);
        }
    }
}

function createWeapon(name, difficulty, canHeadshot = false) {
    return new Weapon(name, difficulty, canHeadshot)
}

const weapons = [
    createWeapon("chain gun", difficulties.EASY),
    createWeapon("grenade laucher", difficulties.EASY),
    createWeapon("heavy gl", difficulties.EASY),
    createWeapon("rocket launcher", difficulties.EASY),
    createWeapon("light rockets", difficulties.EASY),
    createWeapon("plasma rifle", difficulties.EASY),
    createWeapon("acid gun", difficulties.EASY),
    createWeapon("goo gun", difficulties.EASY),
    createWeapon("muleslapper", difficulties.EASY),
    createWeapon("sword", difficulties.EASY),
    createWeapon("magic", difficulties.EASY),
    createWeapon("railgun", difficulties.EASY),
    createWeapon("frag", difficulties.EASY),
    createWeapon("potato masher", difficulties.EASY),
    createWeapon("molotov", difficulties.EASY),
    createWeapon("muleslapper sentry", difficulties.EASY),
    createWeapon("explosion", difficulties.EASY),
    createWeapon("pistol", difficulties.EASY, true),
    createWeapon("silenced pistol", difficulties.EASY, true),
    createWeapon("underwater pistol", difficulties.EASY, true),
    createWeapon("revolver", difficulties.EASY, true),
    createWeapon("burst pistol", difficulties.EASY, true),
    createWeapon("compact pistols", difficulties.EASY, true),
    createWeapon("handcannon", difficulties.EASY, true),
    createWeapon("uzi", difficulties.EASY, true),
    createWeapon("light smg", difficulties.EASY, true),
    createWeapon("smg", difficulties.EASY, true),
    createWeapon("power smg", difficulties.EASY, true),
    createWeapon("long smg", difficulties.EASY, true),
    createWeapon("sawn-off", difficulties.EASY, true),
    createWeapon("pump action", difficulties.EASY, true),
    createWeapon("double barrel", difficulties.EASY, true),
    createWeapon("trench", difficulties.EASY, true),
    createWeapon("auto shotgun", difficulties.EASY, true),
    createWeapon("assault rifle", difficulties.EASY), true,
    createWeapon("keymaster", difficulties.EASY, true),
    createWeapon("underwater rifle", difficulties.EASY, true),
    createWeapon("power rifle", difficulties.EASY, true),
    createWeapon("long rifle", difficulties.EASY, true),
    createWeapon("scoped rifle", difficulties.EASY, true),
    createWeapon("lever action", difficulties.EASY, true),
    createWeapon("plinger", difficulties.EASY, true),
    createWeapon("sniper rifle", difficulties.EASY, true),
    createWeapon("bolt action", difficulties.EASY, true),
    createWeapon("machine gun", difficulties.EASY, true),
    createWeapon("bow", difficulties.EASY, true),
    createWeapon("tomahawk", difficulties.EASY, true),
    createWeapon("fists", difficulties.NORMAL),
    createWeapon("fire uzi", difficulties.NORMAL),
    createWeapon("tranq rifle", difficulties.NORMAL),
    createWeapon("grenade launcher (icon of the gl when killing)", difficulties.NORMAL),
    createWeapon("mortar", difficulties.NORMAL),
    createWeapon("fusion cannon", difficulties.NORMAL),
    createWeapon("knife", difficulties.NORMAL),
    createWeapon("wrench", difficulties.NORMAL),
    createWeapon("kunai", difficulties.NORMAL),
    createWeapon("drone", difficulties.NORMAL),
    createWeapon("fire", difficulties.NORMAL),
    createWeapon("poison", difficulties.NORMAL),
    createWeapon("mortar", difficulties.NORMAL),
    createWeapon("knife", difficulties.NORMAL),
    createWeapon("magic", difficulties.NORMAL),
    createWeapon("sword (parry)", difficulties.NORMAL),
    createWeapon("compact uzis", difficulties.NORMAL, true),
    createWeapon("light ar", difficulties.NORMAL, true),
    createWeapon("musket", difficulties.NORMAL, true),
    createWeapon("crossbow", difficulties.NORMAL, true),
    createWeapon("boomerang", difficulties.NORMAL, true),
    createWeapon("hadouken", difficulties.HARD),
    createWeapon("lightning gun", difficulties.HARD),
    createWeapon("emp", difficulties.HARD),
    createWeapon("suicide vest", difficulties.HARD),
    createWeapon("dynamite", difficulties.HARD),
    createWeapon("musket (bayonet)", difficulties.HARD),
    createWeapon("light rockets (flare)", difficulties.HARD),
    createWeapon("grenades shot by a mortar", difficulties.HARD),
    createWeapon("any weapon after flashing them", difficulties.HARD)
];

const randomBetween1And5 = () => getRandomNumber(1, 5);

function getRandomWeaponsGoals() {
    const nbGoals = randomBetween1And5();

    let tmpWeapons = [...weapons];
    let result = [];

    for (let i = 0; i < nbGoals; i++) {
        const rndIndex = getRandomNumber(0, tmpWeapons.length - 1);
        const weapon = tmpWeapons[rndIndex];
        const enemies = weapon.nbEnemiesToKill();
        const json = weapon.toJSON(enemies);

        result = [...result, json];

        tmpWeapons.splice(rndIndex, 1);
    }

    return result
}