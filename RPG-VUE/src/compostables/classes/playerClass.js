import { GeneralEntity } from './GeneralEntity.js';

export class Player extends GeneralEntity {
    constructor(id, name, health = 100, defense = 5, attack = 10) {
        super(id, name, health, defense, attack);
        this.level = 1;
        this.experience = 0;
        this.experienceToNextLevel = 100;
        this.gold = 0;
        this.autoAttackSpeed = 2;
        this.inventory = [];
        this.multipliers = {
            attack: 1,
            defense: 1,
            goldGain: 1
        };
    }

    // Experience & Level System
    gainExperience(amount) {
        this.experience += amount;
        if (this.experience >= this.experienceToNextLevel) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.experience -= this.experienceToNextLevel;
        this.experienceToNextLevel = Math.floor(this.experienceToNextLevel * 1.2); // Scaling XP requirement
        this.attack += 2; 
        this.defense += 1;
        this.health += 10;
    }

    // Gold & Economy
    gainGold(amount) {
        this.gold += amount * this.multipliers.goldGain;
    }

    spendGold(amount) {
        if (this.gold >= amount) {
            this.gold -= amount;
            return true;
        }
        return false;
    }

    // Inventory System
    addItem(item) {
        this.inventory.push(item);
    }

    removeItem(itemName) {
        this.inventory = this.inventory.filter(item => item.name !== itemName);
    }

    // Idle Mechanic: Auto-Attack System
    startAutoAttack(enemy) {
        this.autoAttackInterval = setInterval(() => {
            if (enemy.isAlive()) {
                this.attackEntity(enemy);
                if (enemy.isDead()) {
                    this.gainExperience(enemy.experienceReward || 50);
                    this.gainGold(enemy.goldReward || 20);
                    clearInterval(this.autoAttackInterval);
                }
            }
        }, this.autoAttackSpeed * 1000);
    }

    stopAutoAttack() {
        clearInterval(this.autoAttackInterval);
    }

    // Apply upgrades (e.g., increased attack speed)
    upgrade(stat, value) {
        if (this.multipliers[stat] !== undefined) {
            this.multipliers[stat] += value;
        }
    }
}
