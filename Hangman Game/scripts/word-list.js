const wordList = [
    {
        word: "spiderman",
        hint: "Friendly neighborhood wall-crawler."
    },
    {
        word: "ironman",
        hint: "Genius billionaire playboy philanthropist in a suit."
    },
    {
        word: "thor",
        hint: "God of thunder with a mighty hammer, Mjolnir."
    },
    {
        word: "captainamerica",
        hint: "Super-soldier with a shield made of vibranium."
    },
    {
        word: "hulk",
        hint: "Big, green, and easily angered, but not stupid."
    },
    {
        word: "blackwidow",
        hint: "Master spy with a penchant for red hair."
    },
    {
        word: "wolverine",
        hint: "Short, gruff mutant with adamantium claws."
    },
    {
        word: "deadpool",
        hint: "Merc with a mouth who breaks the fourth wall."
    },
    {
        word: "blackpanther",
        hint: "Wakanda's king with a vibranium suit and claws."
    },
    {
        word: "doctorstrange",
        hint: "Sorcerer supreme who bends time and reality."
    },
    {
        word: "antman",
        hint: "Hero who can shrink or grow in size with a helmet."
    },
    {
        word: "scarletwitch",
        hint: "Wields chaos magic; Wanda's reality-bending powers."
    },
    {
        word: "vision",
        hint: "Synthetic android with a heart of gold and vibranium body."
    },
    {
        word: "groot",
        hint: "Flora colossus who says only three words."
    },
    {
        word: "rocket",
        hint: "Small but fierce genetically enhanced raccoon."
    },
    {
        word: "storm",
        hint: "Weather-controlling mutant and X-Men leader."
    },
    {
        word: "daredevil",
        hint: "Blind lawyer who fights crime in Hell's Kitchen."
    },
    {
        word: "punisher",
        hint: "Vigilante with a skull motif who takes no prisoners."
    },
    {
        word: "gamora",
        hint: "Adopted daughter of Thanos and a skilled assassin."
    },
    {
        word: "starlord",
        hint: "Leader of the Guardians of the Galaxy and a music enthusiast."
    },
    {
        word: "hawkman",
        hint: "Master archer and marksman; not Hawkgirl."
    },
    {
        word: "thanos",
        hint: "Mad Titan who seeks the Infinity Stones."
    },
    {
        word: "lokiloki",
        hint: "Trickster god and Thor's mischievous brother."
    },
    {
        word: "falcon",
        hint: "Avian-themed hero and Captain America's wingman."
    },
    {
        word: "deadshot",
        hint: "DC Comics character, not part of the Marvel Universe."
    },
    {
        word: "shehulk",
        hint: "Green, gamma-irradiated lawyer and cousin of Bruce Banner."
    },
    {
        word: "nightcrawler",
        hint: "Mutant with teleportation powers and a love for bamfing."
    },
    {
        word: "colossus",
        hint: "Metal-skinned mutant and member of the X-Men."
    },
    {
        word: "gambit",
        hint: "Card-throwing Cajun with kinetic charging abilities."
    },
    {
        word: "jeangrey",
        hint: "Telepathic mutant and Phoenix Force host."
    },
    {
        word: "cyclops",
        hint: "X-Men leader with optic blasts from his eyes."
    },
    {
        word: "magneto",
        hint: "Mutant with control over magnetism and a complicated past."
    },
    {
        word: "storm",
        hint: "Weather-controlling mutant and X-Men leader."
    },
    {
        word: "rogue",
        hint: "Mutant who can absorb powers and memories through touch."
    },
    {
        word: "emmafrost",
        hint: "Telepathic mutant and member of the X-Men."
    },
    {
        word: "wasp",
        hint: "Size-changing superhero with insect-like wings."
    },
    {
        word: "thor",
        hint: "God of thunder with a mighty hammer, Mjolnir."
    },
    {
        word: "quicksilver",
        hint: "Speedster mutant and Magneto's son."
    },
    {
        word: "mystique",
        hint: "Shape-shifting mutant and master of disguise."
    },
    {
        word: "dazzler",
        hint: "Mutant with the power to convert sound into light."
    },
    {
        word: "beast",
        hint: "Mutant with enhanced strength, agility, and a furry appearance."
    },
    {
        word: "rocket",
        hint: "Small but fierce genetically enhanced raccoon."
    },
    {
        word: "moonknight",
        hint: "Hero with multiple personalities and a connection to the moon."
    },
    {
        word: "war machine",
        hint: "Tony Stark's best friend in an armored suit."
    },
    {
        word: "agentcarter",
        hint: "Peggy, a British agent and founder of S.H.I.E.L.D."
    },
    {
        word: "warmachine",
        hint: "Tony Stark's best friend in an armored suit."
    },
    {
        word: "nickfury",
        hint: "Eyepatch-wearing, cigar-chomping director of S.H.I.E.L.D."
    },
    {
        word: "wintersoldier",
        hint: "Brainwashed assassin with a vibranium arm."
    },
    {
        word: "falcon",
        hint: "Avian-themed hero and Captain America's wingman."
    },
    {
        word: "shuri",
        hint: "Wakandan princess and tech genius."
    },
    {
        word: "hawkeye",
        hint: "Expert archer and member of the Avengers."
    },
    {
        word: "ronin",
        hint: "Hawkeye's alter ego during his darker days."
    },
    {
        word: "hankpym",
        hint: "Scientist who created Pym Particles and the Ant-Man suit."
    },
    {
        word: "quasar",
        hint: "Cosmic superhero with energy-based powers."
    },
    {
        word: "blacksuit",
        hint: "Symbiote-infused Spider-Man costume."
    },
    {
        word: "starhawk",
        hint: "Guardians of the Galaxy member with time-manipulation abilities."
    },
    {
        word: "shangchi",
        hint: "Master of martial arts and the real Mandarin's son."
    },
    {
        word: "cloak",
        hint: "Teleporter with a dark dimension in his cloak."
    },
    {
        word: "dagger",
        hint: "Light-projecting superhero and Cloak's partner."
    },
    {
        word: "sandman",
        hint: "Villain with the ability to turn his body into sand."
    },
    {
        word: "vulture",
        hint: "Winged villain with a grudge against Spider-Man."
    },
    {
        word: "rhino",
        hint: "Villain with superhuman strength and a rhinoceros suit."
    },
    {
        word: "electro",
        hint: "Villain with control over electricity."
    },
    {
        word: "greenlantern",
        hint: "DC Comics character, not part of the Marvel Universe."
    },
    {
        word: "starfire",
        hint: "DC Comics character, not part of the Marvel Universe."
    },
    {
        word: "superman",
        hint: "DC Comics character, not part of the Marvel Universe."
    },
    {
        word: "batman",
        hint: "DC Comics character, not part of the Marvel Universe."
    },
    {
        word: "wonderwoman",
        hint: "DC Comics character, not part of the Marvel Universe."
    }
];
