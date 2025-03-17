export class GeneralEntity{
    constructor(id ,name ,health = 10 ,defense = 0, attack = 0 ){
        this.id = id;
        this.name = name;
        this.health = health;
        this.defense = defense;
        this.attack = attack;
    }


    // Getters
    getHealth(){
        return this.health;
    }

    getDefense(){
        return this.defense;
    }

    getAttack(){
        return this.attack;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }


    // Setters
    setHealth(health){
        this.health = health;
    }

    setDefense(defense){
        this.defense = defense;
    }

    setAttack(attack){
        this.attack = attack;
    }

    setId(id){
        this.id = id;
    }

    setName(name){
        this.name = name;
    }


    // Methods
    takeDamage(damage){
        this.health -= damage;
    }

    isDead(){
        return this.health <= 0;
    }

    attackEntity(entity){
        entity.takeDamage(this.attack);
    }

    defendEntity(entity){
        this.health -= entity.attack;
    }

    isAlive(){
        return this.health > 0;
    }

    toString(){
        return this.name;
    }
}