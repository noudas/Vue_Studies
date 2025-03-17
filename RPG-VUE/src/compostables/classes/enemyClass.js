import { GeneralEntity } from './GeneralEntity.js';

export class Enemy extends GeneralEntity {
    constructor(id, name, health = 50, defense = 3, attack = 5, experienceReward = 50, goldReward = 20) {
        super(id, name, health, defense, attack);
        this.experienceReward = experienceReward;
        this.goldReward = goldReward;
    }

    // Methods to handle damage and death
    takeDamage(damage) {
        const netDamage = Math.max(damage - this.defense, 0); // Defense reduces damage
        this.health -= netDamage;
    }

    isDead() {
        return this.health <= 0;
    }

    // Optional: Method to make enemy attack player (if we want enemies to attack back)
    attackPlayer(player) {
        if (this.isAlive()) {
            player.takeDamage(this.attack);
        }
    }

    // Reward methods
    giveExperience() {
        return this.experienceReward;
    }

    giveGold() {
        return this.goldReward;
    }

    // String representation of the enemy
    toString() {
        return `${this.name} (HP: ${this.health})`;
    }
}
