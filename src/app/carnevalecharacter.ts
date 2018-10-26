
export class CarnevaleCharacter{
    charId: number;
    name: string;
    charType: string;
    ducats: number;
    imageUrl: string;
    faction: string;
    actionpoints: number;
    attack: number;
    baseSize: number;
    commandpoints: number;
    dexterity: number;
    isUnique: boolean;
    lifepoints: number;
    mind: number;
    movement: number;
    protection: number;
    willpoints: number;       

    constructor(charId, name, charType, ducats, imageUrl, faction, actionpoints, attack, baseSize, commandpoints, dexterity, isUnique, lifepoints, mind, movement, protection, willpoints ) {
    this.charId = charId;
    this.name = name;
    this.charType = charType;
    this.ducats = ducats;
    this.imageUrl = imageUrl;
    this.faction = faction;
    this.actionpoints = actionpoints;
    this.attack = attack;
    this.baseSize = baseSize;
    this.commandpoints = commandpoints;
    this.dexterity = dexterity;
    this.isUnique = isUnique;
    this.lifepoints = lifepoints;
    this.mind = mind;
    this.movement = movement;
    this.protection = protection;
    this.willpoints = willpoints;
}
}
