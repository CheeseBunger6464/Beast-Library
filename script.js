const categories = [

    {
        name: "Primal Companion",

        creatures: [

            {
                name: "Tauros",
                species: "Beast of the Land",
                image: "images/tauros.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Neutral",

                ac: {
                    base: 13,
                    scaling: "wisdom"
                },
                hp: {
                    base: 5,
                    scaling: "rangerLevel",
                    multiplier: 5
                },


                hitDie: {
                    scaling: "rangerLevel",
                    multiplier: 1,
                    die: 8
                },
                speed: "40 ft., Climb 40 ft.",

                stats: {
                    str: { score: 14, mod: 2, save: 2 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 15, mod: 2, save: 2 },
                    int: { score: 8, mod: -1, save: -1 },
                    wis: { score: 14, mod: 2, save: 2 },
                    cha: { score: 11, mod: 0, save: 0 }
                },

                senses: "Darkvision 60 ft.; Passive Perception 12",
                languages: "Understands the languages you know",

                traits: [
                    {
                        name: "Primal Bond",
                        description: "Add your Proficiency Bonus ({PROF}) to any ability check or saving throw Tauros makes."
                    }
                ],

                actions: [
                    {
                        name: "Beast's Strike",
                        description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {WIS_ADD:2} Bludgeoning damage. If Tauros moved at least 20 feet straight toward the target before the hit, the target takes an extra 1d6 damage of the same type, and the target has the Prone condition if it is a Large or smaller creature."
                    }
                ],

                bonusActions: [],

                reactions: []
            },

            {
                name: "Lapras",
                species: "Beast of the Sea",
                image: "images/lapras.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Neutral",

                ac: {
                    base: 13,
                    scaling: "wisdom"
                },
                hp: {
                    base: 5,
                    scaling: "rangerLevel",
                    multiplier: 5
                },


                hitDie: {
                    scaling: "rangerLevel",
                    multiplier: 1,
                    die: 8
                },
                speed: "5 ft., Swim 60 ft.",

                stats: {
                    str: { score: 14, mod: 2, save: 2 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 15, mod: 2, save: 2 },
                    int: { score: 8, mod: -1, save: -1 },
                    wis: { score: 14, mod: 2, save: 2 },
                    cha: { score: 11, mod: 0, save: 0 }
                },

                senses: "Darkvision 90 ft.; Passive Perception 12",
                languages: "Understands the languages you know",

                traits: [
                    {
                        name: "Amphibious",
                        description: "Lapras can breathe air and water."
                    },

                    {
                        name: "Primal Bond",
                        description: "Add your Proficiency Bonus ({PROF}) to any ability check or saving throw Lapras makes."
                    }
                ],

                actions: [
                    {
                        name: "Beast's Strike",
                        description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d6 {WIS_ADD:2} Piercing damage, and the target has the Grappled condition (escape DC equals your spell save DC({SPELL_SAVE_DC}))."
                    }
                ],

                bonusActions: [],

                reactions: []
            },

            {
                name: "Skarmory",
                species: "Beast of the Sky",
                image: "images/skarmory.gif",

                type: "Beast",
                size: "Small",
                alignment: "Neutral",

                ac: {
                    base: 13,
                    scaling: "wisdom"
                },
                hp: {
                    base: 4,
                    scaling: "rangerLevel",
                    multiplier: 4
                },


                hitDie: {
                    scaling: "rangerLevel",
                    multiplier: 1,
                    die: 6
                },
                speed: "10 ft., Fly 60 ft.",

                stats: {
                    str: { score: 6, mod: -2, save: -2 },
                    dex: { score: 16, mod: 3, save: 3 },
                    con: { score: 13, mod: 1, save: 1 },
                    int: { score: 8, mod: -1, save: -1 },
                    wis: { score: 14, mod: 2, save: 2 },
                    cha: { score: 11, mod: 0, save: 0 }
                },

                senses: "Darkvision 60 ft.; Passive Perception 12",
                languages: "Understands the languages you know",

                traits: [
                    {
                        name: "Flyby",
                        description: "Skarmory doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
                    },

                    {
                        name: "Primal Bond",
                        description: "Add your Proficiency Bonus ({PROF}) to any ability check or saving throw Skarmory makes."
                    }
                ],

                actions: [
                    {
                        name: "Beast's Strike",
                        description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d4 {WIS_ADD:3} Slashing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            }

        ]
    },


    {
        name: "Familiar",

        creatures: [

            {
                name: "Aipom",
                species: "Baboon",
                image: "images/aipom.gif",

                type: "Fiend",
                size: "Small",
                alignment: "Unaligned",

                ac: 12,
                hp: {
                    base: 3,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d6",
                speed: "30 ft., Climb 30 ft.",

                stats: {
                    str: { score: 8, mod: -1, save: -1 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 11, mod: 0, save: 0 },
                    int: { score: 4, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 6, mod: -2, save: -2 }
                },

                senses: "Passive Perception 11",
                languages: "",

                traits: [
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Aipom is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Aipom is hit by an attack roll, Aipom can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Ambipom",
                    species: "Stalker Battle Familiar",
                    image: "images/ambipom.gif",

                    type: "Fiend",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 11,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 20,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Ambipom makes."
                        },
                        {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Ambipom is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        },
                        {
                            name: "Prowl",
                            description: "Ambipom moves up to half its Speed without provoking Opportunity Attacks. At the end of this movement, Ambipom can take the Hide Action."
                        }
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Ambipom is hit by an attack roll, Ambipom can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
            {
                name: "Growlithe",
                species: "Jackal",
                image: "images/growlithe.gif",

                type: "Celestial",
                size: "Small",
                alignment: "Unaligned",

                ac: 12,
                hp: {
                    base: 3,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d6",
                speed: "40 ft.",

                stats: {
                    str: { score: 8, mod: -1, save: -1 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 11, mod: 0, save: 0 },
                    int: { score: 3, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 6, mod: -2, save: -2 }
                },
                
                skills: "Stealth +6, Perception +5",
                senses: "Passive Perception 11",
                languages: "",

                traits: [
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Growlithe is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Growlithe is hit by an attack roll, Growlithe can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Arcanine",
                    species: "Brute Battle Familiar",
                    image: "images/arcanine.gif",

                    type: "Celestial",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 13,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 30,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Arcanine makes."
                        },
                        {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Arcanine is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        }
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Arcanine is hit by an attack roll, Arcanine can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
            {
                name: "Hoothoot",
                species: "Owl",
                image: "images/hoothoot.gif",

                type: "Celestial",
                size: "Tiny",
                alignment: "Unaligned",

                ac: 11,
                hp: {
                    base: 1,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d4-1",
                speed: "5 ft., Fly 60 ft.",

                stats: {
                    str: { score: 3, mod: -4, save: -4 },
                    dex: { score: 13, mod: 1, save: 1 },
                    con: { score: 8, mod: -1, save: -1 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 7, mod: -2, save: -2 }
                },
                
                skills: "Stealth +5, Perception +5",
                senses: "Darkvision 120 ft.; Passive Perception 15",
                languages: "",

                traits: [
                    {
                        name: "Flyby",
                        description: "Hoothoot doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
                    },
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Hoothoot is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Hoothoot is hit by an attack roll, Hoothoot can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Noctowl",
                    species: "Flyer Battle Familiar",
                    image: "images/noctowl.gif",

                    type: "Celestial",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 11,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 20,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Fly 30 ft. (hover), Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Flyby",
                            description:
                            "Noctowl doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
                        },
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Noctowl makes."
                        },
                        {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Noctowl is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        }
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Noctowl is hit by an attack roll, Noctowl can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
            {
                name: "Rattata",
                species: "Rat",
                image: "images/rattata.gif",

                type: "Fey",
                size: "Tiny",
                alignment: "Unaligned",

                ac: 10,
                hp: {
                    base: 1,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d4-1",
                speed: "20 ft., Climb 20 ft.",

                stats: {
                    str: { score: 2, mod: -4, save: -4 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 9, mod: -1, save: -1 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 9, mod: -3, save: -3 }
                },
                
                skills: "Perception +2",
                senses: "Darkvision 30 ft.; Passive Perception 12",
                languages: "",

                traits: [
                    {
                        name: "Agile",
                        description: "Rattata doeesn't provoke Opportunity Attacks wheen it moves out of an enemy's reach."
                    },
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Rattata is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Rattata is hit by an attack roll, Rattata can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Raticate",
                    species: "Brute Battle Familiar",
                    image: "images/raticate.gif",

                    type: "Fey",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 13,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 30,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Raticate makes."
                        },
                        {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Raticate is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        }
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Raticate is hit by an attack roll, Raticate can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
            {
                name: "Spinarak",
                species: "Spider",
                image: "images/spinarak.gif",

                type: "Fey",
                size: "Tiny",
                alignment: "Unaligned",

                ac: 12,
                hp: {
                    base: 1,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d4-1",
                speed: "20 ft., Climb 20 ft.",

                stats: {
                    str: { score: 2, mod: -4, save: -4 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 8, mod: -1, save: -1 },
                    int: { score: 1, mod: -5, save: -5 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 2, mod: -4, save: -4 }
                },

                skills: "Stealth +4",
                senses: "Darkvision 30 ft.; Passive Perception 10",
                languages: "",

                traits: [
                    {
                        name: "Spider Climb",
                        description: "Spinarak can climb difficult surfaces, including along ceilings, wihout needing to make an ability check."
                    },
                    {
                        name: "Web Walker",
                        description: "Spinarak ignores movement restrictions caused by webs, and the spider knows the location of any other creature in contact with the same web."
                    },
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Spinarak is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Spinarak is hit by an attack roll, Spinarak can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Ariados",
                    species: "Stalker Battle Familiar",
                    image: "images/ariados.gif",

                    type: "Fey",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 11,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 20,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Ariados makes."
                        },
                        {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Ariados is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        },
                        {
                            name: "Prowl",
                            description: "Ariados moves up to half its Speed without provoking Opportunity Attacks. At the end of this movement, Ariados can take the Hide Action."
                        }
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description:
                    "When a creature within 5 ft. of Ariados is hit by an attack roll, Ariados can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
            {
                name: "Woobat",
                species: "Bat",
                image: "images/woobat.gif",

                type: "Fiend",
                size: "Tiny",
                alignment: "Unaligned",

                ac: 12,
                hp: {
                    base: 1,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d4-1",
                speed: "5 ft., Fly 30 ft.",

                stats: {
                    str: { score: 2, mod: -4, save: -4 },
                    dex: { score: 15, mod: 2, save: 2 },
                    con: { score: 8, mod: -1, save: -1 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 4, mod: -3, save: -3 }
                },

                senses: "Blindsight 60 ft.; Passive Perception 11",
                languages: "",

                traits: [
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Woobat is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Woobat is hit by an attack roll, Woobat can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Swoobat",
                    species: "Flyer Battle Familiar",
                    image: "images/swoobat.gif",

                    type: "Fiend",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 11,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 20,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Fly 30 ft. (hover), Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Flyby",
                            description: "Swoobat doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
                        },
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Swoobat makes."
                        },
                        {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Swoobat is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        }
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Swoobat is hit by an attack roll, Swoobat can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
        ]
    },


    {
        name: "Stonemason's Companion",

        creatures: [
            {
                name: "Anorith",
                species: "Badger",
                image: "images/anorith.gif",

                type: "Elemental",
                size: "Tiny",
                alignment: "Unaligned",

                ac: 11,
                hp: {
                    base: 5,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d4+3",
                speed: "20 ft., Burrow 5 ft.",

                stats: {
                    str: { score: 10, mod: 0, save: 0 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 16, mod: 3, save: 3 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 5, mod: -3, save: -3 }
                },
                
                skills: "Perception +3",
                resistances: "Poison",
                senses: "Darkvision 30 ft.; Passive Perception 13",
                languages: "",

                traits: [
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Anorith is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Anorith is hit by an attack roll, Anorith can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Armaldo",
                    species: "Brute Battle Familiar",
                    image: "images/armaldo.gif",

                    type: "Fiend",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 13,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 30,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Armaldo makes."
                        },
                        {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Armaldo is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        },
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Armaldo is hit by an attack roll, Armaldo can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
            {
                name: "Archen",
                species: "Microraptor",
                image: "images/archen.gif",

                type: "Elemental",
                size: "Tiny",
                alignment: "Unaligned",

                ac: 11,
                hp: {
                    base: 2,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d4",
                speed: "10 ft., Fly 25 ft., Climb 15 ft.",

                stats: {
                    str: { score: 3, mod: -4, save: -4 },
                    dex: { score: 12, mod: 1, save: 3 },
                    con: { score: 4, mod: -3, save: -3 },
                    int: { score: 5, mod: -3, save: 0 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 11, mod: 0, save: 0 }
                },
                
                skills: "Acrobatics +3, Stealth +3, Perception +2, Survival +2",
                resistance: "Cold",
                senses: "Passive Perception 14",
                languages: "",

                traits: [
                    {
                        name: "Arboreal",
                        description: "If Archen takes the Dash action, do not increase its fly speed, but instead triple its climb speed. Archen also has Advantage on Stealth checks while in a wooded or forested environment."
                    },
                    {
                        name: "Feathered and Evasive",
                        description: "When making a Dexterity Saving Throw to take half damage from an attack, spell, or effect, Archen instead takes no damage if the Saving Throw is succeeded."
                    },
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Archen is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Archen is hit by an attack roll, Archen can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Archeops",
                    species: "Flyer Battle Familiar",
                    image: "images/archeops.gif",

                    type: "Celestial",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 11,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 20,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Fly 30 ft. (hover), Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Flyby",
                            description: "Archeops doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
                        },
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Archeops makes."
                        },
                        {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Archeops is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        }
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Archeops is hit by an attack roll, Archeops can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
            {
                name: "Kabuto",
                species: "Crab",
                image: "images/kabuto.gif",

                type: "Elemental",
                size: "Tiny",
                alignment: "Unaligned",

                ac: 11,
                hp: {
                    base: 3,
                    scaling: "rangerLevel",
                    multiplier: 2
                },

                hitDie: "1d4+1",
                speed: "20 ft., Swim 20 ft.",

                stats: {
                    str: { score: 6, mod: -2, save: -2 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 12, mod: 1, save: 1 },
                    int: { score: 1, mod: -5, save: -5 },
                    wis: { score: 8, mod: -1, save: -1 },
                    cha: { score: 2, mod: -4, save: -4 }
                },

                skills: "Stealth +2",
                senses: "Blindsight 30 ft.; Passive Perception 9",
                languages: "",

                traits: [
                    {
                        name: "Amphibious",
                        description: "Kabuto can breathe air and water."
                    },
                    {
                        name: "Helpful Friend",
                        description: "When you make an ability check using a skill in which you have proficiency while Kabuto is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                ],

                actions: [],

                bonusActions: [
                ],

                reactions: [
                    {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Kabuto is hit by an attack roll, Kabuto can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                ],

                battleFamiliar: {
                    name: "Kabutops",
                    species: "Stalker Battle Familiar",
                    image: "images/kabutops.gif",

                    type: "Fey",
                    size: "Medium",
                    alignment: "Neutral",

                    ac: {
                    base: 11,
                    scaling: "spellLevel"
                        },
                    hp: {
                        base: 20,
                        scaling: "spellLevel",
                        startLevel: 2,
                        multiplier: 5
                        },

                    hitDie: "",
                    speed: "40 ft., Swim 30 ft.",

                    stats: {
                        str: { score: 16, mod: 3, save: 3 },
                        dex: { score: 16, mod: 3, save: 3 },
                        con: { score: 12, mod: 1, save: 1 },
                        int: { score: 8, mod: -1, save: -1 },
                        wis: { score: 13, mod: 1, save: 1 },
                        cha: { score: 10, mod: 0, save: 0 }
                    },

                    immunities: "Charmed, Frightened",
                    senses: "Darkvision 60 ft.; Passive Perception 11",
                    languages: "Understands the languages you know",

                    traits: [
                        {
                            name: "Talented",
                            description: "Add half the spell's level (round down) to any ability check or saving throw Kabutops makes."
                        },
                        {
                        name: "Helpful Friend",
                        description:
                        "When you make an ability check using a skill in which you have proficiency while Kabutops is within 5 ft. of you, you gain Advantage on the check. You can use this benefit {PROF} times, and you regain all expended uses when you finish a Long Rest."
                    }
                    ],

                    actions: [
                        {
                            name: "Rend",
                            description:
                                "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:3} Force damage.",
                        },
                        {
                            name: "Prowl",
                            description: "Kabutops moves up to half its Speed without provoking Opportunity Attacks. At the end of this movement, Kabutops can take the Hide Action."
                        }
                    ],

                    bonusActions: [],

                    reactions: [
                        {
                    name: "Intercept Attack",
                    description: "When a creature within 5 ft. of Kabutops is hit by an attack roll, Kabutops can take a reaction to add a {PROF} bonus to the creature's AC against that attack, potentially causing the attack to miss."
                    }
                    ]
                }
            },
        ]
    },


    {
        name: "Bestial Spirit",

        creatures: [
            {
                name: "Toucannon",
                species: "Bestial Spirit, Air",
                image: "images/toucannon.gif",

                type: "Beast",
                size: "Small",
                alignment: "Neutral",

                ac: {
                    base: 11,
                    scaling: "spellLevel"
                },
                hp: {
                    base: 10,
                    scaling: "spellLevel",
                    multiplier: 5
                },


                hitDie: "",
                speed: "30 ft., Fly 60 ft.",

                stats: {
                    str: { score: 18, mod: 4, save: 4 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 16, mod: 3, save: 3 },
                    int: { score: 4, mod: -3, save: -3 },
                    wis: { score: 14, mod: 2, save: 2 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                senses: "Darkvision 60 ft.; Passive Perception 12",
                languages: "Understands the languages you know",

                traits: [
                    {
                        name: "Flyby",
                        description: "Toucannon doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
                    }
                ],

                actions: [
                    {
                        name: "Rend",
                        description:
                            "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:4} Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Weavile",
                species: "Bestial Spirit, Land",
                image: "images/weavile.gif",

                type: "Beast",
                size: "Small",
                alignment: "Neutral",

                ac: {
                    base: 11,
                    scaling: "spellLevel"
                },
                hp: {
                    base: 20,
                    scaling: "spellLevel",
                    multiplier: 5
                },


                hitDie: "",
                speed: "30 ft., Climb 30 ft.",

                stats: {
                    str: { score: 18, mod: 4, save: 4 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 16, mod: 3, save: 3 },
                    int: { score: 4, mod: -3, save: -3 },
                    wis: { score: 14, mod: 2, save: 2 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                senses: "Darkvision 60 ft.; Passive Perception 12",
                languages: "Understands the languages you know",

                traits: [
                    {
                        name: "Pack Tactics",
                        description: "Weavile has Advantage on an attack roll against a creature if at least one of Weavile's allies is within 5 ft. of the creature and the ally doesn't have the incapacitated condition."
                    }
                ],

                actions: [
                    {
                        name: "Rend",
                        description: "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:4} Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Seadra",
                species: "Bestial Spirit, Water",
                image: "images/seadra.gif",

                type: "Beast",
                size: "Small",
                alignment: "Neutral",

                ac: {
                    base: 11,
                    scaling: "spellLevel"
                },
                hp: {
                    base: 20,
                    scaling: "spellLevel",
                    multiplier: 5
                },


                hitDie: "",
                speed: "30 ft., Swim 30 ft.",

                stats: {
                    str: { score: 18, mod: 4, save: 4 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 16, mod: 3, save: 3 },
                    int: { score: 4, mod: -3, save: -3 },
                    wis: { score: 14, mod: 2, save: 2 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                senses: "Darkvision 60 ft.; Passive Perception 12",
                languages: "Understands the languages you know",

                traits: [
                    {
                        name: "Pack Tactics",
                        description: "Seadra has Advantage on an attack roll against a creature if at least one of Seadra's allies is within 5 ft. of the creature and the ally doesn't have the incapacitated condition."
                    },
                    {
                        name: "Water Breathing",
                        description: "Seadra can breathe only underwater."
                    }
                ],

                actions: [
                    {
                        name: "Rend",
                        description:
                            "Melee Attack Roll: {SPELL_ATTACK}, reach 5 ft. Hit: 1d8 {SPELL_LEVEL_ADD:4} Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
        ]
    },

    {
        name: "Gray Bag of Tricks",

        creatures: [
            {
                name: "Yungoos",
                species: "Weasel",
                image: "images/yungoos.gif",

                type: "Beast",
                size: "Tiny",
                alignment: "Unaligned",

                ac: "13",
                hp: 1,

                hitDie: "1d4 - 1",
                speed: "30 ft., Climb 30 ft.",

                stats: {
                    str: { score: 3, mod: -4, save: -4 },
                    dex: { score: 16, mod: 3, save: 3 },
                    con: { score: 8, mod: -1, save: -1 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 3, mod: -4, save: -4 }
                },

                skills: "Acrobatics +5, Perception +3, Stealth +5",
                senses: "Darkvision 60 ft.; Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 1 Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Alolan Raticate",
                species: "Giant Rat",
                image: "images/raticate-alola.gif",

                type: "Beast",
                size: "Tiny",
                alignment: "Unaligned",

                ac: "13",
                hp: 7,

                hitDie: "2d6",
                speed: "30 ft., Climb 30 ft.",

                stats: {
                    str: { score: 7, mod: -2, save: -2 },
                    dex: { score: 16, mod: 3, save: 5 },
                    con: { score: 11, mod: 0, save: 0 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 4, mod: -3, save: -3 }
                },

                skills: "Perception +2",
                senses: "Darkvision 60 ft.; Passive Perception 12",
                languages: "",

                traits: [
                    {
                        name: "Pack Tactics",
                        description: "Alolan Raticate has Advantage on an attack roll against a creature if at least one of Alolan Raticate's allies is within 5 ft. of the creature and the ally doesn't have the incapacitated condition."
                    },
                ],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Zigzagoon",
                species: "Badger",
                image: "images/zigzagoon.gif",

                type: "Beast",
                size: "Tiny",
                alignment: "Unaligned",

                ac: "11",
                hp: 5,

                hitDie: "1d4 + 3",
                speed: "20 ft., Burrow 5 ft.",

                stats: {
                    str: { score: 10, mod: 0, save: 0 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 16, mod: 3, save: 3 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                skills: "Perception +3",
                resistances: "Poison",
                senses: "Darkvision 30 ft.; Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Piloswine",
                species: "Boar",
                image: "images/piloswine.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Unaligned",

                ac: "11",
                hp: 13,

                hitDie: "2d8 + 4",
                speed: "40 ft.",

                stats: {
                    str: { score: 13, mod: 1, save: 1 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 14, mod: 2, save: 2 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 9, mod: -1, save: -1 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                senses: "Passive Perception 9",
                languages: "",

                traits: [
                    {
                        name: "Bloodied Fury",
                        description: "While Bloodied, Piloswine has Advantage on attack rolls."
                    },
                ],

                actions: [
                    {
                        name: "Gore",
                        description: "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Piercing damage. If the target is a Medium or smaller creature and Piloswine moved 20+ feet straight toward it immediately before the hit, the target takes an extra 3 (1d6) Piercing damage and has the Prone condition."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Liepard",
                species: "Panther",
                image: "images/liepard.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Unaligned",

                ac: "13",
                hp: 13,

                hitDie: "3d8",
                speed: "50 ft., Climb 30 ft.",

                stats: {
                    str: { score: 14, mod: 2, save: 2 },
                    dex: { score: 16, mod: 3, save: 3 },
                    con: { score: 10, mod: 0, save: 0 },
                    int: { score: 3, mod: -4, save: -4 },
                    wis: { score: 14, mod: 2, save: 2 },
                    cha: { score: 7, mod: -2, save: -2 }
                },

                skills: "Perception +4, Stealth +7",
                senses: "Darkvision 60 ft.; Passive Perception 14",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Rend",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing damage."
                    }
                ],

                bonusActions: [
                    {
                        name: "Nimble Escape",
                        description: "Liepard takes the Disengage or Hide action."
                    }
                ],

                reactions: []
            },
            {
                name: "Obstagoon",
                species: "Giant Badger",
                image: "images/obstagoon.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Unaligned",

                ac: "13",
                hp: 15,

                hitDie: "2d8 + 6",
                speed: "30 ft., Burrow 10 ft.",

                stats: {
                    str: { score: 13, mod: 1, save: 1 },
                    dex: { score: 10, mod: 0, save: 0 },
                    con: { score: 17, mod: 3, save: 3 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                skills: "Perception +3",
                resistances: "Poison",
                senses: "Darkvision 60 ft.; Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Zacian Hero of Many Battles",
                species: "Dire Wolf",
                image: "images/zacian.gif",

                type: "Beast",
                size: "Large",
                alignment: "Unaligned",

                ac: "14",
                hp: 22,

                hitDie: "3d10 + 6",
                speed: "50 ft.",

                stats: {
                    str: { score: 17, mod: 3, save: 3 },
                    dex: { score: 15, mod: 2, save: 2 },
                    con: { score: 15, mod: 2, save: 2 },
                    int: { score: 3, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 7, mod: -2, save: -2 }
                },

                skills: "Perception +5, Stealth +4",
                senses: "Darkvision 60 ft.; Passive Perception 15",
                languages: "",

                traits: [
                    {
                        name: "Pack Tactics",
                        description: "Zacian has Advantage on an attack roll against a creature if at least one of Zacian's allies is within 5 ft. of the creature and the ally doesn't have the incapacitated condition."
                    },
                ],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing damage. If the target is a Large or smaller creature, it has the Prone condition."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Dialga",
                species: "Giant Elk",
                image: "images/dialga.gif",

                type: "Celestial",
                size: "Huge",
                alignment: "Neutral Good",

                ac: "14",
                hp: 42,

                hitDie: "5d12 + 10",
                speed: "60 ft.",

                stats: {
                    str: { score: 19, mod: 4, save: 6 },
                    dex: { score: 18, mod: 4, save: 6 },
                    con: { score: 14, mod: 2, save: 2 },
                    int: { score: 7, mod: -2, save: -2 },
                    wis: { score: 14, mod: 2, save: 2 },
                    cha: { score: 10, mod: 0, save: 0 }
                },

                skills: "Perception +4",
                resistances: "Necrotic, Radiant",
                senses: "Darkvision 90 ft.; Passive Perception 14",
                languages: "Celestial ; understands Common, Elvish, and Sylvan but can't speak them",

                traits: [],

                actions: [
                    {
                        name: "Ram",
                        description: "Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Bludgeoning damage plus 5 (2d4) Radiant damage. If the target is a Huge or smaller creature and Dialga moved 20+ feet straight toward it immediately before the hit, the target takes an extra 5 (2d4) Bludgeoning damage and has the Prone condition."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
        ]
    },

    {
        name: "Rust Bag of Tricks",
        creatures:
        [
            {
                name: "Alolan Rattata",
                species: "Rat",
                image: "images/rattata-alola.gif",

                type: "Beast",
                size: "Tiny",
                alignment: "Unaligned",

                ac: "10",
                hp: 1,

                hitDie: "1d4 - 1",
                speed: "20 ft., Climb 20 ft.",

                stats: {
                    str: { score: 2, mod: -4, save: -4 },
                    dex: { score: 11, mod: 0, save: 0 },
                    con: { score: 9, mod: -1, save: -1 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 4, mod: -3, save: -3 }
                },

                skills: "Perception +2",
                senses: "Darkvision 30 ft.; Passive Perception 12",
                languages: "",

                traits: [
                    {
                    name: "Agile",
                    description: "Alolan Rattata doesn't Provoke Opporttunity Attacks when it moves out of an enemy's reach."
                    }
                ],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Rowlet",
                species: "Owl",
                image: "images/rowlet.gif",

                type: "Beast",
                size: "Tiny",
                alignment: "Unaligned",

                ac: "11",
                hp: 1,

                hitDie: "1d4 - 1",
                speed: "5 ft., Fly 60 ft.",

                stats: {
                    str: { score: 3, mod: -4, save: -4 },
                    dex: { score: 13, mod: 1, save: 1 },
                    con: { score: 8, mod: -1, save: -1 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 7, mod: -2, save: -2 }
                },

                skills: "Perception +5, Stealth +5",
                senses: "Darkvision 120 ft.; Passive Perception 15",
                languages: "",

                traits: [
                    {
                    name: "Flyby",
                    description: "Rowlet doesn't Provoke Opporttunity Attacks when it flies out of an enemy's reach."
                    }
                ],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +3, reach 5 ft. Hit: 1 Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Manectric",
                species: "Mastiff",
                image: "images/manectric.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Unaligned",

                ac: "12",
                hp: 5,

                hitDie: "1d8 + 1",
                speed: "40 ft.",

                stats: {
                    str: { score: 13, mod: 1, save: 1 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 12, mod: 1, save: 1 },
                    int: { score: 3, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 7, mod: -2, save: -2 }
                },

                skills: "Perception +5",
                senses: "Darkvision 60 ft.; Passive Perception 15",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Skiddo",
                species: "Goat",
                image: "images/skiddo.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Unaligned",

                ac: "10",
                hp: 4,

                hitDie: "1d8",
                speed: "40 ft., Climb 30 ft.",

                stats: {
                    str: { score: 11, mod: 0, save: 2 },
                    dex: { score: 10, mod: 0, save: 0 },
                    con: { score: 11, mod: 0, save: 0 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                skills: "Perception +2",
                senses: "Darkvision 60 ft.; Passive Perception 12",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Ram",
                        description: "Melee Attack Roll: +2, reach 5 ft. Hit: 1 Bludgeoning damage, or 2 (1d4) Bludgeoning damage if Gogoat moved 20+ feet straight toward the target immediately before the hit."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Mudsdale",
                species: "Giant Goat",
                image: "images/mudsdale.gif",

                type: "Beast",
                size: "Large",
                alignment: "Unaligned",

                ac: "11",
                hp: 19,

                hitDie: "3d10 + 3",
                speed: "40 ft., Climb 30 ft.",

                stats: {
                    str: { score: 17, mod: 3, save: 5 },
                    dex: { score: 13, mod: 1, save: 1 },
                    con: { score: 12, mod: 1, save: 1 },
                    int: { score: 3, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 6, mod: -2, save: -2 }
                },

                skills: "Perception +3",
                senses: "Darkvision 60 ft.; Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Ram",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning damage. If the target is a Large or smaller creature and Mudsdale moved 20+ feet straight toward it immediately before the hit, the target takes an extra 5 (2d4) Bludgeoning damage and has the Prone condition."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Mamoswine",
                species: "Giant Boar",
                image: "images/mamoswine.gif",

                type: "Beast",
                size: "Large",
                alignment: "Unaligned",

                ac: "13",
                hp: 42,

                hitDie: "5d10 + 15",
                speed: "40 ft.",

                stats: {
                    str: { score: 17, mod: 3, save: 5 },
                    dex: { score: 10, mod: 0, save: 0 },
                    con: { score: 16, mod: 3, save: 3 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 7, mod: -2, save: -2 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                senses: "Passive Perception 8",
                languages: "",

                traits: [
                    {
                        name: "Bloodied Fury",
                        description: "While Bloodied, Mamoswine has Advantage on attack rolls."
                    },
                ],

                actions: [
                    {
                        name: "Gore",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage. If the target is a Large or smaller creature and Mamoswine moved 20+ feet straight toward it immediately before the hit, the target takes an extra 7 (2d6) Piercing damage and has the Prone condition."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Entei",
                species: "Lion",
                image: "images/entei.gif",

                type: "Beast",
                size: "Large",
                alignment: "Unaligned",

                ac: "12",
                hp: 22,

                hitDie: "4d10",
                speed: "50 ft.",

                stats: {
                    str: { score: 17, mod: 3, save: 3 },
                    dex: { score: 15, mod: 2, save: 2 },
                    con: { score: 11, mod: 0, save: 0 },
                    int: { score: 3, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 8, mod: -1, save: -1 }
                },

                skills: "Perception +3, Stealth +4",
                senses: "Darkvision 60 ft.; Passive Perception 13",
                languages: "",

                traits: [
                    {
                        name: "Pack Tactics",
                        description: "Entei has Advantage on attack rolls against a creature tif at least one of Entei's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
                    },
                    {
                        name: "Running Leap",
                        description: "With a 10-ft running start, Entei can Long Jump up to 25 feet."
                    }
                ],

                actions: [
                    {
                        name: "Multiattack",
                        description: "Entei makes two Rend attacks. It can replace one attack with a use of Roar."
                    },
                    {
                        name: "Rend",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing damage."
                    },
                    {
                        name: "Roar",
                        description: "Wisdom Saving Throw: DC 11, one creature within 15 feet. Failure: The target has the Frightened condition until the start of Entei's next turn."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Ursaluna",
                species: "Brown Bear",
                image: "images/ursaluna.gif",

                type: "Beast",
                size: "Large",
                alignment: "Unaligned",

                ac: "11",
                hp: 22,

                hitDie: "3d10 + 6",
                speed: "40 ft., Climb 30 ft.",

                stats: {
                    str: { score: 17, mod: 3, save: 3 },
                    dex: { score: 12, mod: 1, save: 1 },
                    con: { score: 15, mod: 2, save: 2 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 13, mod: 1, save: 1 },
                    cha: { score: 7, mod: -2, save: -2 }
                },

                skills: "Perception +3",
                senses: "Darkvision 60 ft.; Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Multiattack",
                        description: "Ursaluna make one Bite and one Claw attack."
                    },
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage."
                    },
                    {
                        name: "Claw",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
        ]
    },

    {
        name: "Tan Bag of Tricks",
        creatures:
        [
            {
                name: "Rockruff",
                species: "Jackal",
                image: "images/rockruff.gif",

                type: "Beast",
                size: "Small",
                alignment: "Unaligned",

                ac: "12",
                hp: 3,

                hitDie: "1d6",
                speed: "40 ft.",

                stats: {
                    str: { score: 8, mod: -1, save: -1 },
                    dex: { score: 15, mod: 2, save: 2 },
                    con: { score: 11, mod: -0, save: -0 },
                    int: { score: 3, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 6, mod: -2, save: -2 }
                },

                skills: "Perception +5, Stealth + 4",
                senses: "Darkvision 90 ft.; Passive Perception 15",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +1, reach 5 ft. Hit: 1 (1d4 - 1) Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Darmanitan",
                species: "Ape",
                image: "images/darmanitan.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Unaligned",

                ac: "12",
                hp: 19,

                hitDie: "3d8 + 6",
                speed: "30 ft., Climb 30 ft.",

                stats: {
                    str: { score: 16, mod: 3, save: 3 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 14, mod: 2, save: 2 },
                    int: { score: 6, mod: -2, save: -2 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 7, mod: -2, save: -2 }
                },

                skills: "Athletics +5, Perception +3",
                senses: "Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Multiattack",
                        description: "Darmanitan makes two Fist attacks."
                    },
                    {
                        name: "Fist",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Bludgeoning damage."
                    },
                    {
                        name: "Rock (Recharge 6)",
                        description: "Ranged Attack Roll: +5, range 25/50 ft. Hit: 10 (2d6 + 3) Bludgeoning damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Darumaka",
                species: "Baboon",
                image: "images/darumaka.gif",

                type: "Beast",
                size: "Small",
                alignment: "Unaligned",

                ac: "12",
                hp: 3,

                hitDie: "1d6",
                speed: "30 ft., Climb 30 ft.",

                stats: {
                    str: { score: 8, mod: 3, save: 3 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 11, mod: 0, save: 0 },
                    int: { score: 4, mod: -3, save: -3 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 6, mod: -2, save: -2 }
                },

                senses: "Passive Perception 11",
                languages: "",

                traits: [
                    {
                        name: "Pack Tactics",
                        description: "Darumaka has Advantage on attack rolls against a creature tif at least one of Darumaka's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
                    },
                ],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +1, reach 5 ft. Hit: 1 (1d4 - 1) Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Silvally",
                species: "Axe Beak",
                image: "images/silvally.gif",

                type: "Monstrosity",
                size: "Large",
                alignment: "Unaligned",

                ac: "11",
                hp: 19,

                hitDie: "3d10 + 3",
                speed: "50 ft.",

                stats: {
                    str: { score: 14, mod: 2, save: 2 },
                    dex: { score: 12, mod: 1, save: 1 },
                    con: { score: 12, mod: 1, save: 1 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                senses: "Passive Perception 10",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Beak",
                        description: "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Ursaring",
                species: "Black Bear",
                image: "images/ursaring.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Unaligned",

                ac: "11",
                hp: 19,

                hitDie: "3d8 + 6",
                speed: "30 ft., Climb 30 ft., Swim 30 ft.",

                stats: {
                    str: { score: 15, mod: 2, save: 2 },
                    dex: { score: 12, mod: 1, save: 1 },
                    con: { score: 14, mod: 2, save: 2 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 7, mod: -2, save: -2 }
                },

                skills: "Perception +5",
                senses: "Darkvision 60 ft.; Passive Perception 15",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Multiattack",
                        description: "Ursaring makes two Rend attacks."
                    },
                    {
                        name: "Rend",
                        description: "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing damage."
                    },
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Dragonair",
                species: "Giant Weasel",
                image: "images/dragonair.gif",

                type: "Beast",
                size: "Medium",
                alignment: "Unaligned",

                ac: "13",
                hp: 9,

                hitDie: "2d8",
                speed: "40 ft., Climb 30 ft.",

                stats: {
                    str: { score: 11, mod: 0, save: 0 },
                    dex: { score: 17, mod: 3, save: 3 },
                    con: { score: 10, mod: 0, save: 0 },
                    int: { score: 4, mod: -3, save: -3 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 5, mod: -3, save: -3 }
                },

                skills: "Acrobatics +5, Perception +3, Stealth +5",
                senses: "Darkvision 60 ft.; Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Zamazenta Hero of Many Battles",
                species: "Giant Hyena",
                image: "images/zamazenta.gif",

                type: "Beast",
                size: "Large",
                alignment: "Unaligned",

                ac: "12",
                hp: 45,

                hitDie: "6d10 + 12",
                speed: "50 ft.",

                stats: {
                    str: { score: 16, mod: 3, save: 3 },
                    dex: { score: 14, mod: 2, save: 2 },
                    con: { score: 14, mod: 2, save: 2 },
                    int: { score: 2, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 7, mod: -2, save: -2 }
                },

                skills: "Perception +3",
                senses: "Darkvision 60 ft.; Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Bite",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage."
                    }
                ],

                bonusActions: [
                    {
                        name: "Rampage (1/Day)",
                        description: "Immediately after dealing damage to a creature that was already Bloodied, Zamazenta can move up to half its Speed, and makes one Bite attack."
                    }
                ],

                reactions: []
            },
            {
                name: "Raikou",
                species: "Tiger",
                image: "images/raikou.gif",

                type: "Beast",
                size: "Large",
                alignment: "Unaligned",

                ac: "13",
                hp: 30,

                hitDie: "4d10 + 8",
                speed: "40 ft.",

                stats: {
                    str: { score: 17, mod: 3, save: 3 },
                    dex: { score: 16, mod: 3, save: 3 },
                    con: { score: 14, mod: 2, save: 2 },
                    int: { score: 3, mod: -4, save: -4 },
                    wis: { score: 12, mod: 1, save: 1 },
                    cha: { score: 8, mod: -1, save: -1 }
                },

                skills: "Perception +3, Stealth +7",
                senses: "Darkvision 60 ft.; Passive Perception 13",
                languages: "",

                traits: [],

                actions: [
                    {
                        name: "Rend",
                        description: "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
                    }
                ],

                bonusActions: [
                    {
                        name: "Nimble Escape",
                        description: "Raikou can take the Disengage or Hide action"
                    }
                ],

                reactions: []
            },
        ]
    },

    {
        name: "Misc.",
        creatures:
        [
                            {
                name: "Tangela",
                species: "Awakened Shrub",
                image: "images/tangela.gif",

                type: "Plant",
                size: "Small",
                alignment: "Neutral",

                ac: "9",
                hp: 10,

                hitDie: "3d6",
                speed: "20 ft.",

                stats: {
                    str: { score: 3, mod: -4, save: -4 },
                    dex: { score: 8, mod: -1, save: -1 },
                    con: { score: 11, mod: 0, save: 0 },
                    int: { score: 10, mod: 0, save: 0 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 6, mod: -2, save: -2 }
                },

                vulnerabilities: "Fire",
                resistances: "Piercing",
                senses: "Passive Perception 10",
                languages: "Common plus one other language",

                traits: [],

                actions: [
                    {
                        name: "Rake",
                        description:
                            "Melee Attack Roll: +1, reach 5 ft. Hit: 1 Slashing damage."
                    }
                ],

                bonusActions: [],

                reactions: []
            },
            {
                name: "Golurk",
                species: "Shield Guardian",
                image: "images/golurk.gif",

                type: "Construct",
                size: "Large",
                alignment: "Unaligned",

                ac: "17",
                hp: 142,

                hitDie: "15d10 + 60",
                speed: "30 ft.",

                stats: {
                    str: { score: 18, mod: 4, save: 4 },
                    dex: { score: 8, mod: -1, save: -1 },
                    con: { score: 18, mod: 4, save: 4 },
                    int: { score: 7, mod: -2, save: -2 },
                    wis: { score: 10, mod: 0, save: 0 },
                    cha: { score: 3, mod: -4, save: -4 }
                },

                immunities: "Poison; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
                senses: "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 10",
                languages: "Understands commands given in any language but can't speak",

                traits: [
                    {
                        name: "Bound",
                        description: "Golurk is magically bound to an amulet. While Golurk and its amulet are on the same plane of existence, the amulet's wearer can telepathically call Golurk to travel to it, and Golurk knows the distance and direction to the amulet. If Golurk is within 60 feet of the amulet's wearer, half of any damage the wearer takes (round up) is transferred to Golurk."
                    },
                    {
                        name: "Regeneration",
                        description: "Golurk regains 10 Hit Points at the start of each of its turns if it has at least 1 Hit Point."
                    },
                    {
                        name: "Spell Storing",
                        description: "A spellcaster who wears Golurk's amulet can cause Golurk to store one spell of level 4 or lower. To do so, the wearer must cast the spell on Golurk while within 5 feet of it. The spell has no effect but is stored within Golurk. Any previously stored spell is lost when a new spell is stored. Golurk can cast the spell stored with any parameters set by the original caster, requiring no spell components and using the caster's spellcasting ability. The stored spell is then lost."
                    }
                ],

                actions: [
                    {
                        name: "Multiattack",
                        description: "Golurk makes two Fist Attacks."
                    },
                    {
                        name: "Fist",
                        description: "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Bludgeoning damage plus 7 (2d6) Force damage."
                    },
                ],

                bonusActions: [],

                reactions: [
                    {
                        name: "Protection",
                        description: "Trigger: An attack roll hits the wearer of Golurk's amulet while the wearer is within 5 feet of the guardian. Response: The wearer gains a +5 bonus to AC, including against the triggering attack and possibly causing it to miss, until the start of Golurk's next turn."
                    }
                ]
            },
        ]
    },

];


// ============================================================
// PLAYER VARIABLES
// ============================================================

const playerStats = {

    wisdomModifier: 4,
    proficiencyBonus: 3,
    spellAttackModifier: 7,
    spellSaveDC: 15,
    rangerLevel: 5

};


// ============================================================
// LIBRARY
// ============================================================

const library =
    document.getElementById("creature-library");


// ============================================================
// DISPLAY LIBRARY
// ============================================================

function displayLibrary() {

    library.innerHTML = "";


    categories.forEach(category => {

        const categorySection =
            document.createElement("section");

        categorySection.classList.add("category");


        const title =
            document.createElement("h2");

        title.textContent =
            category.name;

        title.classList.add("category-title");

        categorySection.appendChild(title);


        const creatureRow =
            document.createElement("div");

        creatureRow.classList.add("creature-row");


        category.creatures.forEach(creature => {

            const card =
    document.createElement("div");

card.classList.add("creature-card");

// Give the card a reference to the creature.
// This lets the Battle Familiar toggle
// find the correct icon later.
card.dataset.creatureName =
    creature.name;


const image =
    document.createElement("img");

// Give the image its own class so the
// Battle Familiar toggle can find it.
image.classList.add("creature-image");

image.src =
    creature.image;

image.alt =
    creature.name;


card.appendChild(image);


            card.addEventListener(
                "click",
                () => {

                    const existingDetails =
                        categorySection.querySelector(
                            ".creature-details"
                        );


                    if (existingDetails) {

    // If we clicked the creature that is
    // already open, close it.
    if (
        existingDetails.creature === creature
    ) {

        existingDetails.remove();

        return;

    }


    // A different creature was clicked.
    // Remove the currently open statblock
    // and open the newly clicked creature.
    existingDetails.remove();

}


displayCreatureDetails(
    categorySection,
    creature,
    category
);

                }
            );


            creatureRow.appendChild(card);

        });


        categorySection.appendChild(
            creatureRow
        );

        library.appendChild(
            categorySection
        );

    });

}


// ============================================================
// DETERMINE CATEGORY FEATURES
// ============================================================

function canUseSpellLevel(category) {

    return (
        category.name === "Familiar" ||
        category.name === "Stonemason's Companion" ||
        category.name === "Bestial Spirit"
    );

}


function canUseBattleFamiliar(category) {

    return (
        category.name === "Familiar" ||
        category.name === "Stonemason's Companion"
    );

}


// ============================================================
// DISPLAY CREATURE DETAILS
// ============================================================

function displayCreatureDetails(
    categorySection,
    creature,
    category
) {

    const details =
        document.createElement("div");

    details.classList.add(
        "creature-details"
    );


    // Store these directly on the element.
    // This lets us refresh the statblock later
    // when the player changes their stats.
    details.creature = creature;
details.category = category;
details.categorySection = categorySection;


    renderCreatureDetails(
        details,
        creature,
        category
    );


    const creatureRow =
    categorySection.querySelector(
        ".creature-row"
    );


creatureRow.insertAdjacentElement(
    "afterend",
    details
);

}


// ============================================================
// RENDER / REFRESH STATBLOCK
// ============================================================

function renderCreatureDetails(
    details,
    creature,
    category
) {

    const useBattleFamiliar =
        creature.showingBattleFamiliar &&
        creature.battleFamiliar;


    const currentData =
        useBattleFamiliar
            ? creature.battleFamiliar
            : creature;


    const battleFamiliarAvailable =
        canUseBattleFamiliar(category);


    const spellLevelAvailable =
        canUseSpellLevel(category);


    details.innerHTML =
        buildStatBlock(
            currentData,
            battleFamiliarAvailable,
            spellLevelAvailable,
            creature
        );


    addHpListener(
        details,
        currentData,
        creature
    );


    if (
    battleFamiliarAvailable &&
    creature.battleFamiliar
) {

    addBattleFamiliarListener(
        details,
        creature,
        category
    );

}


    if (spellLevelAvailable) {

        addSpellLevelListener(
            details,
            creature,
            category
        );

    }

}


// ============================================================
// HP LISTENER
// ============================================================

function addHpListener(
    details,
    creature,
    originalCreature
) {

    const hpInput =
        details.querySelector(
            ".current-hp"
        );


    if (!hpInput) {

        return;

    }


    hpInput.addEventListener(
        "change",
        () => {

            let newHp =
                parseInt(
                    hpInput.value,
                    10
                );


            const maxHp =
                calculateScaledValue(
                    creature.hp,
                    originalCreature
                );


            if (isNaN(newHp)) {

                newHp =
                    creature.currentHp ??
                    maxHp;

            }


            if (newHp < 0) {

                newHp = 0;

            }


            if (newHp > maxHp) {

                newHp = maxHp;

            }


            creature.currentHp =
                newHp;


            hpInput.value =
                newHp;

        }
    );

}


// ============================================================
// BATTLE FAMILIAR LISTENER
// ============================================================

function addBattleFamiliarListener(
    details,
    creature,
    category
) {

    const button =
        details.querySelector(
            ".battle-familiar-button"
        );


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            // Toggle between the normal form
            // and the Battle Familiar form.
            creature.showingBattleFamiliar =
                !creature.showingBattleFamiliar;


            // Find the creature's library card.
            const categorySection =
                details.categorySection;


            const creatureCard =
                categorySection.querySelector(
                    `[data-creature-name="${creature.name}"]`
                );


            if (creatureCard) {

                const image =
                    creatureCard.querySelector(
                        ".creature-image"
                    );


                if (image) {

                    // Decide which form is currently active.
                    const currentData =
                        creature.showingBattleFamiliar &&
                        creature.battleFamiliar
                            ? creature.battleFamiliar
                            : creature;


                    // Change the clickable library icon
                    // to the image belonging to that form.
                    image.src =
                        currentData.image;


                    image.alt =
                        currentData.name;

                }

            }


            // Rebuild the statblock using the
            // newly selected form.
            renderCreatureDetails(
                details,
                creature,
                category
            );

        }
    );

}


// ============================================================
// SPELL LEVEL LISTENER
// ============================================================

function addSpellLevelListener(
    details,
    creature,
    category
) {

    const spellLevelSelect =
        details.querySelector(
            ".spell-level-select"
        );


    if (!spellLevelSelect) {

        return;

    }


    spellLevelSelect.addEventListener(
        "change",
        () => {

            creature.spellLevel =
                parseInt(
                    spellLevelSelect.value,
                    10
                );


            renderCreatureDetails(
                details,
                creature,
                category
            );

        }
    );

}


// ============================================================
// BUILD STATBLOCK
// ============================================================

function buildStatBlock(
    creature,
    canBattleFamiliar,
    canSpellLevel,
    originalCreature = creature
) {

    // Make sure every spell-based creature starts
    // at a 2nd-level spell slot.
    if (
        canSpellLevel &&
        originalCreature.spellLevel === undefined
    ) {

        originalCreature.spellLevel = 2;

    }


    // Calculate dynamic values.
    const armorClass =
        calculateScaledValue(
            creature.ac,
            originalCreature
        );


    const maxHp =
        calculateScaledValue(
            creature.hp,
            originalCreature
        );


    // If the creature has no current HP yet,
    // initialize it to the calculated maximum.
    if (
        creature.currentHp === undefined ||
        creature.currentHp === null
    ) {

        creature.currentHp =
            maxHp;

    }


    // If a stat change reduced maximum HP,
    // don't allow current HP to exceed it.
    if (
        creature.currentHp > maxHp
    ) {

        creature.currentHp =
            maxHp;

    }


    let html = `

        <div class="statblock-header">

            <div class="statblock-title">

                <h2>
                    ${creature.name}
                </h2>

                <p class="creature-description">

                    ${creature.size}
                    ${creature.type}

                    (${creature.species}),

                    ${creature.alignment}

                </p>

            </div>


            <div class="statblock-controls">
    `;


    // Spell level selector
    if (canSpellLevel) {

        html += `

                <div class="spell-level-control">

                    <label for="spell-level-select">
                        Spell Slot
                    </label>

                    <select
                        class="spell-level-select"
                    >

                        <option
                            value="2"
                            ${
                                originalCreature.spellLevel === 2
                                    ? "selected"
                                    : ""
                            }
                        >
                            2nd
                        </option>

                        <option
                            value="3"
                            ${
                                originalCreature.spellLevel === 3
                                    ? "selected"
                                    : ""
                            }
                        >
                            3rd
                        </option>

                    </select>

                </div>

        `;

    }


    // Battle Familiar button
    if (
        canBattleFamiliar &&
        originalCreature.battleFamiliar
    ) {

        html += `

                <button
                    class="battle-familiar-button"
                >

                    ${
                        originalCreature.showingBattleFamiliar
                            ? "Normal Form"
                            : "Battle Familiar"
                    }

                </button>

        `;

    }


    html += `

            </div>

        </div>


        <div class="basic-stats">

            <p>

                <strong>
                    AC
                </strong>

                ${armorClass}

            </p>


            <p class="hp-line">

                <strong>
                    HP
                </strong>

                <input
                    type="number"
                    class="current-hp"

                    value="${creature.currentHp}"

                    min="0"

                    max="${maxHp}"
                >

                <span class="hp-max">
                    / ${maxHp}
                </span>

                <span class="hp-dice">
                    ${calculateHitDice(creature.hitDie)}
                </span>

            </p>


            <p>

                <strong>
                    Speed
                </strong>

                ${creature.speed}

            </p>

        </div>


                <div class="stat-table">

            ${createStat(
                "STR",
                creature.stats.str
            )}

            ${createStat(
                "INT",
                creature.stats.int
            )}

            ${createStat(
                "DEX",
                creature.stats.dex
            )}

            ${createStat(
                "WIS",
                creature.stats.wis
            )}

            ${createStat(
                "CON",
                creature.stats.con
            )}

            ${createStat(
                "CHA",
                creature.stats.cha
            )}

        </div>


        <div class="extra-stats">

    ${
        creature.savingThrows
            ? `
                <p>
                    <strong>
                        Saving Throws
                    </strong>
                    ${creature.savingThrows}
                </p>
            `
            : ""
    }

    ${
        creature.skills
            ? `
                <p>
                    <strong>
                        Skills
                    </strong>
                    ${creature.skills}
                </p>
            `
            : ""
    }

    ${
        creature.vulnerabilities
            ? `
                <p>
                    <strong>
                        Vulnerabilities
                    </strong>
                    ${creature.vulnerabilities}
                </p>
            `
            : ""
    }

    ${
        creature.resistances
            ? `
                <p>
                    <strong>
                        Resistances
                    </strong>
                    ${creature.resistances}
                </p>
            `
            : ""
    }

    ${
        creature.immunities
            ? `
                <p>
                    <strong>
                        Immunities
                    </strong>
                    ${creature.immunities}
                </p>
            `
            : ""
    }

    ${
        creature.senses
            ? `
                <p>
                    <strong>
                        Senses
                    </strong>
                    ${creature.senses}
                </p>
            `
            : ""
    }

    <p>
        <strong>
            Languages
        </strong>
        ${creature.languages || "--"}
    </p>

</div>

    `;


    html += createOptionalSection(
    "Traits",
    creature.traits,
    originalCreature
);


    html += createOptionalSection(
    "Actions",
    creature.actions,
    originalCreature
);

html += createOptionalSection(
    "Bonus Actions",
    creature.bonusActions,
    originalCreature
);

html += createOptionalSection(
    "Reactions",
    creature.reactions,
    originalCreature
);


    return html;

}


// ============================================================
// SCALING SYSTEM
// ============================================================

function calculateScaledValue(
    value,
    creature
) {

    // Normal static number
    if (
        typeof value === "number"
    ) {

        return value;

    }


    // If something is missing,
    // return it unchanged.
    if (
        !value ||
        typeof value !== "object"
    ) {

        return value;

    }


    const base =
        value.base ?? 0;


    let bonus = 0;


    switch (value.scaling) {

        // ----------------------------------------
        // Wisdom Modifier
        // ----------------------------------------

        case "wisdom":

            bonus =
                playerStats.wisdomModifier;

            break;


        // ----------------------------------------
        // Ranger Level
        // ----------------------------------------

        case "rangerLevel":

            bonus =
                playerStats.rangerLevel *
                (value.multiplier ?? 1);

            break;


        // ----------------------------------------
        // Spell Level
        // ----------------------------------------

        case "spellLevel":

    const spellLevel =
        creature.spellLevel ?? 2;

    const startLevel =
        value.startLevel ?? 0;

    bonus =
        Math.max(0, spellLevel - startLevel) *
        (value.multiplier ?? 1);

    break;

    }


    return base + bonus;

}

function calculateHitDice(hitDie) {

    // Regular static hit dice
    // Example: "3d8"
    if (
        typeof hitDie === "string"
    ) {

        return hitDie;

    }


    // If no hit die was provided,
    // return it unchanged.
    if (
        !hitDie ||
        typeof hitDie !== "object"
    ) {

        return hitDie;

    }


    // Ranger Level scaling
    if (
        hitDie.scaling === "rangerLevel"
    ) {

        const numberOfDice =
            playerStats.rangerLevel *
            (hitDie.multiplier ?? 1);


        return `${numberOfDice}d${hitDie.die}`;

    }


    // Fallback for any other format
    return hitDie;

}


// ============================================================
// CREATE STAT
// ============================================================

function createStat(
    name,
    stat
) {

    return `

        <div class="stat-box">

            <div class="stat-name">
                ${name}
            </div>


            <div class="stat-score">
                ${stat.score}
            </div>


            <div class="stat-mod">

                MOD

                <strong>
                    ${formatModifier(stat.mod)}
                </strong>

            </div>


            <div class="stat-save">

                SAVE

                <strong>
                    ${formatModifier(stat.save)}
                </strong>

            </div>

        </div>

    `;

}


// ============================================================
// FORMAT MODIFIER
// ============================================================

function formatModifier(value) {

    if (value > 0) {

        return "+" + value;

    }

    return value;

}


// ============================================================
// OPTIONAL SECTIONS
// ============================================================

// ============================================================
// OPTIONAL SECTIONS
// ============================================================

function createOptionalSection(
    title,
    abilities,
    creature = null
) {

    if (
        !abilities ||
        abilities.length === 0
    ) {

        return "";

    }


    let html = `

        <div class="stat-section">

            <h3>
                ${title}
            </h3>

    `;


    abilities.forEach(
        ability => {

            const description =
    replacePlayerVariables(
        ability.description,
        creature
    );


            html += `

                <div class="ability">

                    <strong>
                        ${ability.name}.
                    </strong>

                    <span>
                        ${description}
                    </span>

                </div>

            `;

        }
    );


    html += `

        </div>

    `;


    return html;

}

// ============================================================
// PLAYER VARIABLE REPLACEMENT
// ============================================================

function replacePlayerVariables(
    description,
    creature = null
) {

    if (!description) {

        return "";

    }


    let result =
        description;


    // ----------------------------------------
    // Proficiency Bonus
    // Example:
    // {PROF} -> +3
    // ----------------------------------------

    result =
        result.replace(
            /\{PROF\}/g,
            formatModifier(
                playerStats.proficiencyBonus
            )
        );


    // ----------------------------------------
    // Spell Attack Modifier
    // Example:
    // {SPELL_ATTACK} -> +7
    // ----------------------------------------

    result =
        result.replace(
            /\{SPELL_ATTACK\}/g,
            formatModifier(
                playerStats.spellAttackModifier
            )
        );


    // ----------------------------------------
    // Spell Save DC
    // Example:
    // {SPELL_SAVE_DC} -> 15
    // ----------------------------------------

    result =
        result.replace(
            /\{SPELL_SAVE_DC\}/g,
            playerStats.spellSaveDC
        );


    // ----------------------------------------
    // Wisdom Modifier
    // Example:
    // {WIS} -> +4
    // ----------------------------------------

    result =
        result.replace(
            /\{WIS\}/g,
            formatModifier(
                playerStats.wisdomModifier
            )
        );


    // ----------------------------------------
    // Add Wisdom Modifier to a number
    //
    // Example:
    // {WIS_ADD:2}
    //
    // Wisdom +4:
    // 2 + 4 = 6
    //
    // Displays:
    // +6
    // ----------------------------------------

    result =

    result.replace(

        /\{WIS_ADD:([-+]?\d+)\}/g,

        (match, baseValue) => {

            const total =
                parseInt(
                    baseValue,
                    10
                ) +
                playerStats.wisdomModifier;

            return "+ " + Math.abs(total);

        }

    );

    // ----------------------------------------
// Add Spell Level to a number
//
// Example:
// {SPELL_LEVEL_ADD:2}
//
// If Spell Level = 3:
// 2 + 3 = 5
//
// Displays:
// +5
// ----------------------------------------

result =
    result.replace(
        /\{SPELL_LEVEL_ADD:([-+]?\d+)\}/g,
        (match, baseValue) => {

            const spellLevel =
                creature?.spellLevel ?? 2;

            const total =
                parseInt(
                    baseValue,
                    10
                ) +
                spellLevel;

            return "+ " + Math.abs(total);
        }
    );


// ----------------------------------------
// Add Proficiency Bonus to a number
//
// Example:
// {PROF_ADD:2}
//
// Proficiency +3:
// 2 + 3 = 5
// ----------------------------------------

result =

    result.replace(

        /\{PROF_ADD:([-+]?\d+)\}/g,

        (match, baseValue) => {

            const total =
                parseInt(
                    baseValue,
                    10
                ) +
                playerStats.proficiencyBonus;

            return "+ " + Math.abs(total);

        }

    );


return result;

}


// ============================================================
// PLAYER CONTROL LISTENERS
// ============================================================

function setupPlayerControls() {

    const wisdomInput =
    document.getElementById(
        "wisdom-modifier"
    );


const proficiencyInput =
    document.getElementById(
        "proficiency-bonus"
    );


const spellAttackInput =
    document.getElementById(
        "spell-attack-modifier"
    );


const spellSaveDCInput =
    document.getElementById(
        "spell-save-dc"
    );


const rangerLevelInput =
    document.getElementById(
        "ranger-level"
    );


    // Wisdom modifier
    wisdomInput.addEventListener(
        "change",
        () => {

            let value =
                parseInt(
                    wisdomInput.value,
                    10
                );


            if (isNaN(value)) {

                value = 0;

            }


            playerStats.wisdomModifier =
                value;


            wisdomInput.value =
                value;


            refreshOpenStatblocks();

        }
    );

        // Proficiency bonus
    proficiencyInput.addEventListener(
        "change",
        () => {

            let value =
                parseInt(
                    proficiencyInput.value,
                    10
                );


            if (isNaN(value)) {

                value = 0;

            }


            playerStats.proficiencyBonus =
                value;


            proficiencyInput.value =
                value;


            refreshOpenStatblocks();

        }
    );

    // Spell attack modifier
    spellAttackInput.addEventListener(
        "change",
        () => {

            let value =
                parseInt(
                    spellAttackInput.value,
                    10
                );


            if (isNaN(value)) {

                value = 0;

            }


            playerStats.spellAttackModifier =
                value;


            spellAttackInput.value =
                value;


            refreshOpenStatblocks();

        }
    );

    // Spell save DC
    spellSaveDCInput.addEventListener(
        "change",
        () => {

            let value =
                parseInt(
                    spellSaveDCInput.value,
                    10
                );


            if (isNaN(value)) {

                value = 0;

            }


            playerStats.spellSaveDC =
                value;


            spellSaveDCInput.value =
                value;


            refreshOpenStatblocks();

        }
    );

    // Ranger level
    rangerLevelInput.addEventListener(
        "change",
        () => {

            let value =
                parseInt(
                    rangerLevelInput.value,
                    10
                );


            if (
                isNaN(value) ||
                value < 1
            ) {

                value = 1;

            }


            playerStats.rangerLevel =
                value;


            rangerLevelInput.value =
                value;


            refreshOpenStatblocks();

        }
    );

}


// ============================================================
// REFRESH OPEN STATBLOCKS
// ============================================================

function refreshOpenStatblocks() {

    const openDetails =
        document.querySelectorAll(
            ".creature-details"
        );


    openDetails.forEach(
        details => {

            if (
                details.creature &&
                details.category
            ) {

                renderCreatureDetails(
                    details,
                    details.creature,
                    details.category
                );

            }

        }
    );

}


// ============================================================
// START PROGRAM
// ============================================================

displayLibrary();

setupPlayerControls();