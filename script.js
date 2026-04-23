// VARIABLES
const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 80;
let mana = 120;
const attack = 45;
const defense = 30;

// FUNCION DECLARADA
function calculateDamage(attack, defense) {
  const damage = attack - defense;
  return damage < 0 ? 0 : damage;
}

// ARROW FUNCTION
const isAlive = (health) => health > 0;

// ARROW FUNCTION
const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

// FUNCION DECLARADA
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

// LOGS
console.log("Damage:", calculateDamage(attack, defense));
console.log("Is Alive:", isAlive(health));
console.log("Can Cast Spell:", canCastSpell(mana, 30, false));
console.log("Presentation:", getPresentation(name, characterClass, level));