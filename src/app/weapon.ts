import { WeaponAbility } from "./weaponAbility";

export class Weapon{
    weaponId: number;
    name: string;
    damage: number;
    evasion: number;
    penetration: number;
    range: number;
    weaponAbilities: WeaponAbility[];

    constructor(weaponId, name, damage, evasion, penetration, range){
        this.weaponId = weaponId;
        this.name = name;
        this.damage = damage;
        this.evasion = evasion;
        this.penetration = penetration;
        this.range = range;

    }
}