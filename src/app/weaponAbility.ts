export class WeaponAbility{    
    weapon: string;    
    weaponAbility: string;
    weaponAbilityInstId: number;
    weaponId: number;

    constructor(weapon, weaponAbility, weaponAbilityInstId, weaponId){
        this.weapon = weapon;
        this.weaponAbility = weaponAbility;
        this.weaponAbilityInstId = weaponAbilityInstId;
        this.weaponId = weaponId;
    }
}