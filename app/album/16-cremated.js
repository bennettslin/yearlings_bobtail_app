import { REFRAIN, VERSES, CHORUS, BRIDGE } from 'helpers/constants'

module.exports = {
    title: {
        anchor: `Cremated`,
        annotation: {
            description: ``
        },
        todo: true
    },
    doubleColumns: true,
    totalTime: 164,
    overviews: {
        narrative: `While I can't deny that dating white women helped silence the nagging feeling I had of being racially inferior, I really didn't seek them out. A case in point is Miriam, who approached me at a party, having seen my band perform a week earlier. She was the storybook ending my ego had been waiting for: cute, hip, and drawn to me with no effort on my part. We lasted a few months. In the end, I had to wonder if she was slumming it, and whether I was just one more checkbox to mark off.`,
        music: `A Shepard tone is an auditory illusion in which a single tone descends continuously in pitch while staying within a fixed register. It seemed an apt metaphor for my breakup with Miriam, which left me utterly deflated as I was forced to confront the racial underpinnings of my genetic inferiority complex. This song also uses doublespeaker rhyme, though I've since forgetten which voice represents whose perspective. I suppose that's the point: we both knew full well that the relationship was doomed.`
    },
    lyrics: [
        [
            {
                time: 1,
                centre: `Or another…`
            },
            {
                unitMap: true,
                sectionClass: REFRAIN
            }
        ],
        [
            {
                time: 24,
                left: `Atavist stuck feet first,`,
                right: `At a vista, key turned`
            },
            {
                time: 27,
                left: `subversive inner lotus eater,`,
                right: `to first switch in her low two-seater,`
            },
            {
                time: 30,
                left: `an everlasting doublespeaker,`,
                right: `and deaf from blasting frontal speakers,`
            },
            {
                time: 34,
                left: `his beaten wit and id she's deemed her`,
                right: `this phoenix risen limp beneath her`
            },
            {
                time: 37,
                left: `sinking ship, maybe good for anecdotes.`,
                right: `pinkish slip, making scroonched her pantyhose.`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 39,
                left: `As comedy teams work, a hoot the times`,
                right: `His god humming Freebird, the hula guy`
            },
            {
                time: 42,
                left: `not at each other's throats.`,
                right: `nods as she drums her toes.`
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 46,
                left: `Trophy bronzed from a Trojan`,
                right: `Though, she ponders the children`
            },
            {
                time: 49,
                left: `for some unforeskinned virgin,`,
                right: `born from a forced conversion`
            },
            {
                time: 52,
                left: `on the shelf, serves his declared assertion:`,
                right: `on a self-servicing cleric surgeon`
            },
            {
                time: 56,
                left: `to remain inherently perfect,`,
                right: `duly may inherit his burdens.`
            },
            {
                time: 59,
                left: `as worn puppet his offscreen person dubs.`,
                right: `This swarm pumped and kissed off, she purges up.`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 61,
                left: `His silent dramedy works better;`,
                right: `Despite once promising forever,`
            },
            {
                time: 64,
                left: `twitching sword in care, he's anyone.`,
                right: `which she swore when scarcely twenty-one.`
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true,
                subsequent: true
            }
        ],
        [
            {
                time: 90,
                centre: `Needle done will not retract,`
            },
            {
                time: 94,
                centre: `it hums a typo fragile ex passed through ash…`
            },
            {
                time: 98,
                centre: `With his vinyl, exit Miriam to cash his stash.`
            },
            {
                time: 102,
                centre: `Undeluded, she'll bask in selfish cut-off jeans,`
            },
            {
                time: 106,
                centre: `and in her pool, hears not a worrisome "Bless her, Godspeed…"`
            },
            {
                unitMap: true,
                sectionClass: BRIDGE
            }
        ],
        [
            {
                time: 112,
                left: `The key turned and she floors it,`,
                right: `The seat hurt when he lowered it,`
            },
            {
                time: 115,
                left: `so homeward the sport's escorted,`,
                right: `though no worse but for his soreness,`
            },
            {
                time: 118,
                left: `the cleaved horizon pours the mortar in.`,
                right: `this geezer's life-support's abortive.`
            },
            {
                time: 121,
                left: `Redressed, he gets his notice, short an`,
                // Veggie wishbone.
                right: `He's vegging with his boner shortened;`
            },
            {
                time: 124,
                left: `apology, bold and blunt.`,
                right: `a pop, and she pulls the plug.`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 127,
                left: `Life's a dumb ex-dromedary, hungry carrying`,
                right: `Lights one up then draws a daring puff, preparing`
            },
            {
                time: 130,
                left: `this groovy second hump.`,
                right: `the scoop, he's getting dumped.`
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ]
    ],
    tasks: [
        {
            taskName: `annotations`,
            workedHours: 6,
            neededHours: 35,
            subtasks: [
                {
                    taskName: `split into dots`,
                    workedHours: 0,
                    neededHours: 3
                }
            ]
        },
        {
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        },
        {
            taskName: `restructure lyrics`,
            workedHours: 1,
            neededHours: 1
        }
    ]
}
