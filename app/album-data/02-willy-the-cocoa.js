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
            description: 'Occasionally, a coyote would wander down from the surrounding hillsides and get hit by traffic. Of course, the Valley is also like one big lower jaw, and .'
        },
        wayside_bottle: {
            description: 'Willy begins his daily rounds by filling up a shopping cart with recyclables found in garbage bins or littered along the sidewalks.'
        },
        pinhead_in_its_shadow: {
            description: 'Willy has microcephaly, a medical condition in which the brain fails to develop properly, resulting in a head that is abnormally small in size. He peers through an empty soda bottle, the top of which is tapered like the outline of his skull.'
        },
        chilled_colas_free: {
            description: 'At the recycling center where Willy drops off his recyclables, a complimentary drink is part of his reimbursement.'
        },
        he_ends_his_stroll: {
            description: 'Or else, "he ends as troll." In most legends, changelings wittingly participate in the deceit, and actively take pains to hide their true identity.'
        },
        our_tins_and_our_jars: {
            description: 'Some families help Willy by leaving out their discarded recyclables for him to gather in bulk.'
        },
        haircutting_to_the_sun: {
            description: 'Our mother is cutting my brother\'s hair on the front lawn, since the cleanup afterwards will be easier.'
        },
        suddenly_baby_shrieks: {
            description: 'As a child, my younger brother was typically calm and quiet in demeanour. When made to do things he didn\'t enjoy or didn\'t understand, however, he was prone to frenzied outbursts, which were scary given how likely he was to injure himself.'
        },
        gap_toothed_coma: {
            description: 'Or "gap-toothed comb."'
        },
        pair_of_seizures: {
            description: 'Or "pair of scissors."'
        },
        see_your_kid_with_whiskers: {
            description: 'Willy jokingly remarks that given my brother\'s distaste for haircuts, he will likely sport an unshaven look in his adult years. But also, in many legends, the changeling is not a child of any sort, but is in fact a fully grown troll who is perhaps even centuries old. So Willy may also be implying that my brother is a changeling whose actual age is belied by a childlike appearance.'
        },
        creepers_on_his_cheek: {
            description: 'After all, Willy might be a changeling himself, as evinced by his own unkempt facial hair.'
        },
        longest_cowlick: {
            description: 'Being acquainted with my family over the years, Willy understands why my mother allows my brother\'s hair to reach unruly lengths. However, Willy is also observing that my brother has yet to outgrow his "colic," a period of excessive crying in infants. In the past, such signs of slow development in older children were inexplicable and thus gave rise to changeling legends.'
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
                    verse: [
                        'when',
                        {
                            anchor: 'suddenly baby shrieks…',
                            annotationKey: 'suddenly_baby_shrieks'
                        }
                    ]
                }
            ],
            [
                {
                    time: 47,
                    verse: [
                        'As',
                        {
                            anchor: 'gap-toothed coma',
                            annotationKey: 'gap_toothed_coma'
                        },
                        'parts his forehead,'
                    ]
                },
                {
                    time: 50,
                    verse: [
                        'launching',
                        {
                            anchor: 'pair of seizures',
                            annotationKey: 'pair_of_seizures'
                        },
                        'to the patch.'
                    ]
                },
                {
                    time: 53,
                    verse: 'Willy ducks behind the porch steps and laughs.'
                },
                {
                    time: 59,
                    verse: [
                        'Oh ma\'am, I',
                        {
                            anchor: 'see your kid with whiskers,',
                            annotationKey: 'see_your_kid_with_whiskers'
                        }
                    ]
                },
                {
                    time: 62,
                    verse: [
                        'he croaks, stroking',
                        {
                            anchor: 'creepers on his cheek,',
                            annotationKey: 'creepers_on_his_cheek'
                        }
                    ]
                },
                {
                    time: 65,
                    verse: [
                        'And three years howling is the',
                        {
                            anchor: 'longest cowlick',
                            annotationKey: 'longest_cowlick'
                        },
                        'yet I\'ve seen!'
                    ]
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
