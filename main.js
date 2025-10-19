const combinations = [
//   3-rune combinations
      ["BOR", "KLY", "ZER", "Deep Wounds", "Ignore Bleed resistance"],
      ["BOR", "SAK", "TRU", "Venom", "Poison applies N% Vulnerability"],
      ["BOR", "VIN", "ZER", "Death of Essence", "Killing an enemy reduces a talent's CD by N turns"],
      ["CIM", "COL", "MON", "Death of Peace", "Killing an enemy has N% chance to cast Shadow Wraith"],
      ["CIM", "DOL", "SIV", "Magic Spread", "+N% AP per living enemy"],
      ["CIM", "MON", "SAK", "Darkness", "+N% critical damage for Shadow effects"],
      ["CIM", "OGI", "SIV", "Cursed", "Fireball and Smite are considered curses"],
      ["COL", "KLY", "ZOL", "Regeneration", "Your Health Regen is increased N times"],
      ["COL", "SAK", "ZER", "Hunter's Mark", "Attacks have N% chance to apply Hunter's Mark"],
      ["COS", "DOS", "ODO", "Soul", "Restore MP equal to N% of HP healed"],
      ["COS", "MON", "VIN", "Mind", "Staves get +1 attack (unique)"],
      ["COS", "MON", "ZER", "Liquid Mind", "Dodging an attack restores N% max MP"],
      ["COS", "SIL", "VIN", "Arms", "Swords get +1 attack (unique)"],
      ["COS", "VIN", "ZER", "Eyes", "Bows get +1 attack (unique)"],
      ["DOS", "MON", "ZOB", "Magic Aura", "Gain +N AP per Armor"],
      ["DOS", "MON", "ZOL", "Mastermind", "N% chance to recast talents on use"],
      ["DOS", "ODO", "SIL", "Death of Heart", "Killing an enemy heals N% max HP"],
      ["DOS", "ZER", "ZOL", "Sight", "The Secrets are N% more visible"],
      ["KRA", "PYD", "TRU", "Rot", "Poison applies N% Rot"],
      ["KRA", "SIL", "ZOL", "Death of Limbs", "Whenever an enemy dies, add N normal attacks to pool"],
      ["KRA", "SIV", "VIN", "Holy Right", "N% chance to reset Holy talent's CD on use"],
      ["MON", "SIL", "ZER", "Of the Fittest", "+N% max HP"],
      ["PYD", "ODO", "ZOB", "Vigor", "Positive effects last +N turns"],
      ["ODO", "SIL", "ZOB", "Constitution", "Exhaustion limit increased by N turns"],
      ["PYD", "SAK", "ZOB", "Protection", "N% chance to gain Protection on entering room"],
      ["PYD", "ZOB", "ZOL", "Fortune", "Missing a turn heals N% max HP"],
      ["BOR", "MON", "Magic Focus", "+N% AP when there is only one enemy"],
      ["BOR", "TRU", "Toxic Cloud", "Poison applies on all enemies"],
      ["CIM", "ODO", "Void Presence", "Using a Shadow talent restores N% max HP"],
      ["COL", "SIL", "Spikes on the Butt", "Your thorns damage hits one more random enemy"],
      ["COS", "MON", "Archmage", "+N max MP per active talent"],
      ["DOL", "PYD", "Ice Nova", "Ice talents have 20% chance to cast Ice Nova"],
      ["DOL", "SIV", "Deep Freeze", "Ice damage reduces the enemy's Armor by N"],
      ["DOS", "OGI", "Fire Eater", "Burn damage heals you instead"],
      ["DOS", "ZOL", "Vision", "Secrets icon rotates"],
      ["KRA", "ODO", "Healing Rain", "+N% Healing"],
      ["OGI", "PYD", "Fire Nova", "Fire talents have 20% chance to cast Fire Nova"],
      // 2-rune combinations
      ["BOR", "KLY", "Bloodbath", "Piercing attacks have N% chance to apply Bleed"]
    ];

function checkCombinations() {
  const input = document.getElementById("userRunes").value.trim().toUpperCase();
  const userRunes = input.split(/[:,]/).map(r => r.trim()).filter(r => r.length === 3);
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (userRunes.length === 0) {
    results.innerHTML = "<p>You didn't enter any valid runes.</p>";
    return;
  }

  const matches = combinations.filter(combo => {
    const runeCount = combo.length - 2;
    const requiredRunes = combo.slice(0, runeCount);
    return requiredRunes.every(r => userRunes.includes(r));
  });

  if (matches.length === 0) {
    results.innerHTML = "<p>No matching combinations found.</p>";
  } else {
    let html = "";
    matches.forEach(match => {
      const runeCount = match.length - 2;
      const comboRunes = match.slice(0, runeCount).join(":");
      const name = match[runeCount];
      const desc = match[runeCount + 1];
      html += `
        <div class="result">
          <strong>${name}</strong> <span class="combo">(${comboRunes})</span><br>
          <em>${desc}</em>
        </div>
      `;
    });
    results.innerHTML = html;
  }
}
