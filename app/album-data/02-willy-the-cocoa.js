module.exports = {
    title: 'Willy the Cocoa',
    tasks: [
        {
            taskName: ' test task 1',
            workedHours: 4,
            neededHours: 9
        },
        {
            taskName: 'test task 2',
            workedHours: 5,
            neededHours: 7
        },
        {
            taskName: 'test task 3',
            workedHours: 2,
            neededHours: 8
        },
    ],
    speechBubbles: {
        narrative: 'Willy was an autistic man who wandered our neighbourhood collecting recyclables for his living. Kids called him "The Cocoa," referring to both his Coke bottles and his seeming a bit "cuckoo." One day, some gangbangers decided to pick a fight and smashed his head open with a bottle, killing him instantly. My younger brother was diagnosed with autism at around this time, and in light of Willy\'s murder, I would lie awake in fear of what lay in store for him.',
        backstory: 'In folklore of the past, changelings were trolls left in place of stolen human children, and served to explain the developmentally disabled. Sonically, I wanted to capture a band of woodland trolls in secluded revelry after such a heist, and figured it was akin to the swamp rock of Creedence Clearwater Revival, with mandolins and Cajun accordions thrown in. Lyrically, I tried to recreate my mishearings of adult conversation when my parents were first learning about autism. I spent a week telling everyone that my brother was "artistic," for example.'
    },
    annotations: {
        valley_somersaults: {
            description: 'I grew up in the San Fernando Valley of Southern California, where wide boulevards stretch endlessly along a gridiron plan, and jagged mountains block the horizon on all sides. In the mirages caused by the year-round sweltering heat, the reflections of these mountains naturally point inwards.'
        },
        hydrants_burst: {
            description: 'The sight of kids splashing around a burst fire hydrant wasn\'t really a Los Angeles thing, but it happened once or twice in my neighbourhood.'
        },
        dying_coyotes_jaw: {
            // TODO: Specifically mention people being like worms?
            description: 'Occasionally, a coyote would wander down from the surrounding hillsides and get hit by traffic. Of course, the Valley is also like one big lower jaw.'
        },
        wayside_bottle: {
            description: 'Willy begins his daily rounds by filling a shopping cart with soda cans and bottles randomly littered on the street.'
        },
        pinhead_in_its_shadow: {
            description: 'Willy has microcephaly, a medical condition in which the brain fails to develop properly, resulting in a head that is abnormally small in size. He peers through an empty soda bottle, the top of which is tapered like the outline of his skull.'
        },
        chilled_colas_free: {
            description: 'At the recycling center where Willy drops off his recyclables, a complimentary drink is part of his reimbursement.'
        },
        he_ends_his_stroll: {
            description: 'Or else, "he ends as troll." In most legends, the changeling is a witting participant in the deceit, and takes pains to hide their true identity.'
        },
        our_tins_and_our_jars: {
            description: ''
        },
        haircutting_to_the_sun: {
            description: ''
        }
    },
    lyrics: {
        left: [
            [
                {
                    time: 11,
                    verse: 'Hilltops gnashing dig out potholes,'
                },
                {
                    time: 14,
                    verse: [
                        'the',
                        {
                            anchor: 'valley somersaults',
                            annotationKey: 'valley_somersaults'
                        },
                        'in tarred pavement mirage.',
                    ]
                },
                {
                    time: 17,
                    verse: [
                        {
                            anchor: 'Hydrants burst',
                            annotationKey: 'hydrants_burst'
                        },
                        'as early worms work this',
                        {
                            anchor: 'dying coyote\'s jaw.',
                            annotationKey: 'dying_coyotes_jaw'
                        }
                    ]
                },
                {
                    /**
                     * Willy collects recyclables.
                     */
                    time: 23,
                    verse: [
                        'Swill pop poured from',
                        {
                            anchor: 'wayside bottle,',
                            annotationKey: 'wayside_bottle'
                        }
                    ]
                },
                {
                    time: 26,
                    verse: [
                        'his',
                        {
                            anchor: 'pinhead in its shadow',
                            annotationKey: 'pinhead_in_its_shadow'
                        },
                        'eclipsed in full.'
                    ]
                },
                {
                    time: 30,
                    verse: [
                        {
                            italic: [
                                {
                                    anchor: 'Chilled cola\'s free',
                                    annotationKey: 'chilled_colas_free'
                                },
                                'with salvage sold…'
                            ]
                        }
                    ]
                },
                {
                    /**
                     * He ends as troll.
                     */
                    time: 32,
                    verse: [
                        'licking lips',
                        {
                            anchor: 'he ends his stroll.',
                            annotationKey: 'he_ends_his_stroll'
                        }
                    ]
                }
            ],
            [
                {
                    time: 35,
                    verse: 'Oh, has Willy the Cocoa come'
                },
                {
                    time: 38,
                    verse: [
                        'for',
                        {
                            anchor: 'our tins and our jars',
                            annotationKey: 'our_tins_and_our_jars'
                        },
                        'this week?'
                    ]
                },
                {
                    /**
                     * haircutting to the son.
                     */
                    time: 41,
                    verse: [
                        'Saluting Mummy doing some',
                        {
                            anchor: 'haircutting to the sun',
                            annotationKey: 'haircutting_to_the_sun'
                        }
                    ]
                },
                {
                    time: 45,
                    verse: 'when suddenly baby shrieks…'
                }
            ],
            [
                {
                    /**
                     * gap toothed comb
                     */
                    time: 47,
                    verse: 'As gap-toothed coma parts his forehead,'
                },
                {
                    /**
                     * pair of scissors
                     */
                    time: 50,
                    verse: 'launching pair of seizures to the patch.'
                },
                {
                    time: 53,
                    verse: 'Willy ducks behind the porch steps and laughs.'
                },
                {
                    /**
                     * figuratively, but also literally.
                     */
                    time: 59,
                    verse: 'Oh ma\'am, I see your kid with whiskers,'
                },
                {
                    time: 62,
                    verse: 'he croaks, stroking creepers on his cheek,'
                },
                {
                    /**
                     * colic
                     */
                    time: 65,
                    verse: 'And three years howling is the longest cowlick yet I\'ve seen!'
                }
            ],
            [
                {
                    /**
                     * comic book
                     */
                    time: 71,
                    verse: 'Prying X-ray spec\'d, enraged at pages clawed,'
                },
                {
                    /**
                     * changelings were actually old
                     */
                    time: 74,
                    verse: 'a kick slams the bearded baby to the ground'
                },
                {
                    time: 77,
                    verse: 'with his tummy clenched, muffling baffled sobs.'
                },
                {
                    time: 80,
                    verse: 'Papa storms in roaring, Boy, are you proud?'
                },
                {
                    time: 83,
                    verse: 'You\'d learn him good, when smarts he could\'ve took'
                },
                {
                    /**
                     * the idea that I took what should have gone to my brother.
                     */
                    time: 86,
                    verse: 'all went instead to this clever head of yours.'
                },
                {
                    time: 89,
                    verse: 'So to baby—to your brother—you\'ll say sorry for the world!'
                }
            ],
            [
                {
                    /**
                     * Killcrop was an insatiable child
                     */
                    time: 106,
                    verse: 'Killcrop dashing kicks up puddle,'
                },
                {
                    /**
                     * set shoes, drunk thugs.
                     */
                    time: 110,
                    verse: 'soused loafers shouting \'tard payment is due.'
                },
                {
                    /**
                     * Fix a changeling by hitting it.
                     */
                    time: 113,
                    verse: 'Hit this witch with switch, whispers wind, to fix his switcheroo…'
                },
                {
                    time: 119,
                    verse: 'Milksop cornered into scuffle,'
                },
                {
                    /**
                     * Gangbanger takes glass from Willy and smashes his head.
                     */
                    time: 122,
                    verse: 'a sack-spilled glass swung sounds the past-noon toll.'
                },
                {
                    time: 126,
                    verse: [
                        {
                            italic: 'Shelled skull has freed unsalvaged soul…'
                        }
                    ]
                },
                {
                    time: 128,
                    verse: 'dripping Willy\'s stalkless bulb.'
                }
            ],
            [
                {
                    /**
                     * saddest month
                     */
                    time: 131,
                    verse: 'Oh, and August was the sawdust month'
                },
                {
                    /**
                     * Helping mom with gardening, asphodel immortal flower
                     */
                    time: 134,
                    verse: 'that saw this mulch soften asphodel.'
                },
                {
                    /**
                     * comic books no longer read
                     */
                    time: 137,
                    verse: 'Baby bluebonnets bloomed as new comics soon'
                },
                {
                    time: 140,
                    verse: 'lay forgotten amongst the mail.'
                }
            ],
            [
                {
                    /**
                     * marvellous
                     * imagining them talking about my brother
                     */
                    time: 143,
                    verse: 'But how marbleless, some reckoned,'
                },
                {
                    /**
                     * imprint
                     */
                    time: 146,
                    verse: 'being ever stuck in imp-runt age of mind!'
                },
                {
                    /**
                     * Something my own brother would say? Are you six?
                     */
                    time: 149,
                    verse: 'Are you sick? I am seven, he\'d reply…'
                },
                {
                    time: 155,
                    verse: 'And do we speak in winded whimpers'
                },
                {
                    time: 158,
                    verse: 'or squelch shreds of a summer gone,'
                },
                {
                    time: 161,
                    verse: 'ever conscious of days past forever wrong?'
                }
            ],
            [
                {
                    time: 167,
                    verse: 'Such heavy fears, Mummy laughs,'
                },
                {
                    /**
                     * Way below. Cub scouts
                     */
                    time: 171,
                    verse: 'for a cub not yet Webelos!'
                },
                {
                    /**
                     * I wouldn't die for a very long time.
                     */
                    time: 173,
                    verse: 'Son, seventy years and you\'ll be glad'
                },
                {
                    time: 177,
                    verse: 'to finally rest those creaking bones!'
                },
                {
                    time: 179,
                    verse: 'Life\'s like this quilt: patchy, then it fills…'
                },
                {
                    /**
                     * My mother thought I would do great things. Bobtail would be my magnum opus, the book I meant to write.
                     */
                    time: 183,
                    verse: 'In time with needle done, you\'ll write this book of yours.'
                },
                {
                    time: 185,
                    verse: 'Then to Willy, in the cover could say sorry for the world!'
                }
            ],
            [
                {
                    time: 191,
                    verse: 'Bobtail\'s cover could say sorry for the world!'
                },
                {
                    time: 197,
                    verse: 'Oh, Bobtail\'s cover could say sorry…!'
                }
            ]
        ]
    }
};
