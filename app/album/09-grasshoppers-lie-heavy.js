import { REFRAIN, VERSES, PRECHORUS, CHORUS, BRIDGE, OUTRO } from 'helpers/constants'

// TODO: Missing portal for Look Back in Anger. Is it "bell"?

module.exports = {
    title: {
        anchor: `Grasshoppers Lie Heavy`,
        annotation: {
            description: [
                `I was reading a lot of`,
                {
                    anchor: `Philip Dick`,
                    wiki: `Philip_K._Dick`
                },
                `novels during this time, including`,
                {
                    italic: {
                        anchor: `The Man in the High Castle,`,
                        wiki: `The_Man_in_the_High_Castle`
                    }
                },
                `in which the Axis powers had won World War II. Curiously, the characters in this alternate history are engrossed in their own alternate history novel called`,
                {
                    italic: `The Grasshopper Lies Heavy,`
                },
                `in which the Allies had won. Beyond the Philip Dick reference, I liked the image of two grasshoppers hidden in the tall grass, each sending hesitant signals to the other, with neither wishing to be the first to reveal itself.`
            ]
        }
    },
    doubleColumns: true,
    totalTime: 272,
    overview: `I worked my way through college as a dishwasher in a cafeteria, which is how I met Sita. After I scared her off, we didn't speak for several months, but she eventually reached out again, and we became friends. As I continued to suck at dating, and through my rough start in performing live, Sita lent her moral support, though a part of me always wanted more. At some point, she started to like me back. I'm still not sure how.`,
    lyrics: [
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `Just as`,
                            {
                                italic: `The Grasshopper Lies Heavy`
                            },
                            `is an alternate history novel that offers its readers a vastly different reality, this song in isolation offers a vastly different ending from the album as a whole. Like Dick, I also wanted to suggest meta-awareness of being a story within a story, and did so by including lyrical references to all the other songs on the album. Musically, I tried to channel`,
                            {
                                anchor: `Simon and Garfunkel`,
                                wiki: `Simon_%26_Garfunkel`
                            },
                            `in both form and harmony.`
                        ],
                        dotKeys: {
                            music: true
                        }
                    }
                }
            }
        ],
        [
            {
                time: 0,
                lyric: {
                    italic: [
                        {
                            anchor: `L.A. to the Bay,`,
                            properNoun: true,
                            annotation: {
                                description: `After high school, I hightailed it out of Los Angeles to attend college in the Bay Area.`,
                            }
                        },
                        {
                            // TODO: Separate 'pompous' anchor?
                            anchor: `pompous autumn waits.`,
                            annotation: {
                                description: `In high school, I soldiered on with the same iffy persona to which I had tied myself years earlier in middle school. It just didn't seem possible to become a completely different person while surrounded by all the same classmates. But in my head, I was crafting a brand new persona that was raring to go at the earliest opportunity.`,
                                portal: `pampas`
                            }
                        }
                    ]
                }
            },
            {
                unitMap: true,
                sectionClass: REFRAIN
            }
        ],
        [
            {
                time: 10,
                lyric: `Uprooted, then en route,`
            },
            {
                time: 12,
                lyric: `eighteen threw off the brutes`
            },
            {
                time: 14,
                lyric: [
                    `and their`,
                    {
                        anchor: `molls perched on pedestals,`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Gun molls`,
                                    wiki: `Gun_moll`
                                },
                                `were the female companions of American gangsters in the early 1900s. In the same way that society viewed their exploits, I simultaneously desired and feared the girls who dated the boys who bullied me. Their contempt was certainly tougher to stomach.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 17,
                lyric: [
                    `noses in`,
                    {
                        anchor: `penny dreadfuls.`,
                        annotation: {
                            description: [
                                `In 19th-century England, a new market emerged for sensational fiction published in cheap novellas, which the highbrow derided as`,
                                {
                                    anchor: `penny dreadfuls.`,
                                    wiki: `Penny_dreadful`
                                }
                            ]
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 19,
                lyric: `For a cafeteria's wage,`
            },
            {
                time: 22,
                lyric: [
                    `death of`,
                    {
                        anchor: `dull dishroom days`,
                        annotation: {
                            description: `I got a job washing dishes at a university cafeteria. The pay was decent, but the work was uneventful. I would sit and read while the dishes piled up, then clean them all at once. When it got really busy, I would switch to writing song lyrics in my head.`
                        }
                    }
                ]
            },
            {
                time: 24,
                lyric: [
                    `stalled by`,
                    {
                        anchor: `keys left on dumbwaiter trays.`,
                        annotation: {
                            description: `The university students bussed their trays on a vertical conveyor belt, which then transported the dirty dishes to the dishroom one floor below. Occasionally someone would leave a personal item on the tray by accident, and would then come downstairs to retrieve it. The crew always got a kick when that happened, as it broke up the monotony.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 29,
                lyric: [
                    {
                        anchor: `Down the steps`,
                        annotation: {
                            portal: `down_the_steppes`
                        }
                    },
                    `to`,
                    {
                        anchor: `fetch her lancet pen,`,
                        annotation: {
                            description: [
                                `As a diabetic, Sita regularly checked her blood sugar level before meals by pricking her finger with a`,
                                {
                                    anchor: `lancing device.`,
                                    wiki: `Blood_lancet`
                                },
                                `That day, she forgot to take it with her after bussing her tray, and came down to the dishroom to retrieve it.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 34,
                lyric: [
                    `and stunned, by`,
                    {
                        anchor: `reflex you asked.`,
                        annotation: {
                            description: `After handing Sita her lancing device, I made small talk before asking for her phone number. By then, I was mostly on autopilot when it came to hitting on random women in random situations.`
                        }
                    }
                ]
            },
            {
                time: 38,
                lyric: [
                    `At first she hedged, but then`,
                    {
                        anchor: `laying qualms to rest:`,
                        annotation: {
                            description: `It was well known to the students that the cafeteria hired most of its workers through a rehabilitation program. For this reason, along with feeling unfairly ambushed, Sita was hesitant to say yes to a date. But as we chatted, my taste in literature and seeming familiarity with underground culture ultimately won her over.`,
                            portal: `laid_tourettes`
                        }
                    }
                ]
            },
            {
                time: 43,
                lyric: [
                    {
                        anchor: `Schwa stickers`,
                        properNoun: true,
                        annotation: {
                            description: [
                                {
                                    anchor: `Schwa`,
                                    wiki: `Schwa_(art)`
                                },
                                `is the underground artwork of William Barker. In the late 90s, his oblong alien heads popped up on print media everywhere. A friend who worked in a record store gave me a few stickers, though at the time I had no idea what they were.`
                            ],
                            portal: `swastikas`
                        }
                    },
                    `attached to your`,
                    {
                        anchor: `sci-fi paperback.`,
                        annotation: {
                            description: `At the time, I was obsessed with Philip K. Dick's stories of altered states and dystopian worlds, and never left home without one of his novels under my arm. Sita would soon hear all about it on our first date.`,
                            portal: `safeway_paper_bag`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 48,
                lyric: [
                    `First date`,
                    {
                        anchor: `nosebleed`,
                        annotation: {
                            description: `After getting a nosebleed on the first date, I recounted past fights that ended with me getting a bloody nose.`,
                            portal: `know_is_bleat`
                        }
                    },
                    `spurs tales of`,
                    {
                        anchor: `bare-knuckle defeats…`,
                        annotation: {
                            description: `Sita seemed intrigued by my rough-and-tumble past, even as I was honest that these were literal beatdowns in which I never threw a single punch.`,
                            portal: `barnacle`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 58,
                lyric: `Snowflakes in time come to see off the year.`
            },
            {
                time: 63,
                lyric: `You cried for one to sit; it kissed your ear.`
            },
            {
                time: 67,
                lyric: [
                    `Her`,
                    {
                        anchor: `show played in mimes,`,
                        annotation: {
                            description: `The world of dating was awash in hidden cues and gestures that no one could be expected to recognise or understand, as far as I knew. So I desperately wanted everything to be plainly spelled out, and it baffled me that I was alone in feeling this way.`
                        }
                    },
                    `but you pleaded to hear.`
                ]
            },
            {
                time: 72,
                lyric: `Then just like the drift, she disappeared…`
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 77,
                left: [
                    `Alone his first gig,`,
                    {
                        anchor: `stagefright ignites.`,
                        annotation: {
                            description: `Shortly after Sita and I stopped talking, I began to play open mic nights. The first few times were a disaster, but I eventually learned to conquer my stagefright with just the right amount of alcohol.`
                        }
                    }
                ],
                right: `With no sister ship slain by his side,`
            },
            {
                time: 87,
                left: [
                    `But`,
                    {
                        anchor: `no convert's missed,`,
                        annotation: {
                            description: `After I grew disillusioned with the mail-order cult, I never heard from them again. Clearly, they had learned to ask for the largest payments upfront in response to this recurring scenario. My failure to win over Sita left me with a similar feeling. Now that I had fulfilled my purpose and was no longer of use, my absence would not be noticed.`
                        }
                    },
                    `once assured his tithe.`
                ],
                right: [
                    `and so off her list,`,
                    {
                        anchor: `sunken Tirpitz lies.`,
                        annotation: {
                            description: [
                                    `The Bismarck and the Tirpitz were`,
                                    {
                                        anchor: `sister battleships`,
                                        wiki: `Bismarck-class_battleship`
                                    },
                                    `of the German navy in World War II. After all, the Axis were the heroes in`,
                                {
                                    italic: `The Man in the High Castle.`
                                }
                            ],
                            portal: `sunken_tirpitz`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: REFRAIN
            }
        ],
        [
            {
                time: 96,
                lyric: `Homeward, mop-sopped to your knees.`
            },
            {
                time: 98,
                lyric: [
                    `Tonight, just`,
                    {
                        anchor: `sour grapes, bitter sweets`,
                        annotation: {
                            description: `At the end of each shift, I would scavenge enough leftovers for my next meal. Busy days were doubly cruel because after staying late and working myself to exhaustion, I would head to the dining area to pick through the dried-out scraps that no one else wanted.`
                        }
                    }
                ]
            },
            {
                time: 101,
                lyric: `left to brave February's brutal gust;`
            },
            {
                time: 104,
                lyric: [
                    {
                        anchor: `chimneys weep`,
                        annotation: {
                            portal: `chimney_sweep`
                        }
                    },
                    {
                        anchor: `sooty dust.`,
                        annotation: {
                            portal: `suttee_dust`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 106,
                lyric: [
                    {
                        anchor: `Phantom limbs`,
                        annotation: {
                            description: [
                                `A`,
                                {
                                    anchor: `phantom limb`,
                                    wiki: `Phantom_limb`
                                },
                                `is the sensation that a missing limb is still attached and responsive. After several weeks of giddy hope, the thought of spending my weekends alone again, with no other prospects on the horizon, felt like an amputation.`
                            ]
                        }
                    },
                    `trip left and right`
                ]
            },
            {
                time: 108,
                lyric: [
                    `them`,
                    {
                        anchor: `tripped on runner's high.`,
                        annotation: {
                            description: [
                                `A`,
                                {
                                    anchor: `runner's high`,
                                    wiki: `Neurobiological_effects_of_physical_exercise`
                                },
                                `is a feeling of euphoria experienced through exercise. I often needed a beer or two to muster the energy to walk home after a gruelling shift, so it was hard to feel gracious towards anyone out for an evening jog.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 110,
                lyric: [
                    `Below the`,
                    {
                        anchor: `window of your Walkman`,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Walkman`,
                                    wiki: `Walkman`
                                },
                                `is a portable cassette player. I would listen to mixtapes on the walk home, seemingly absorbed in my music even as I wished pratfalls upon others, much as a child might duck beneath a window after pulling a prank.`
                            ]
                        }
                    },
                    `you hide.`
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 115,
                lyric: [
                    `Your gate code punched, when a`,
                    {
                        anchor: `looming shadow nears,`,
                        annotation: {
                            description: `I lived along the path between the campus and Sita's boarding house. By chance, she had been walking half a block behind that evening, debating whether to flag me down. After I turned to open the gate and noticed her presence, there was an awkward few seconds where neither of us was sure what to do next.`
                        }
                    }
                ]
            },
            {
                time: 120,
                lyric: [
                    `as your`,
                    {
                        anchor: `heartbeats,`,
                        annotation: {
                            portal: `harpies`
                        }
                    },
                    `her steps, race to first.`
                ]
            },
            {
                time: 125,
                lyric: `And she deftly thrusts through the shield of your sneer:`
            },
            {
                time: 130,
                lyric: [
                    `"Hey, you know`,
                    {
                        anchor: `you're my password?"`,
                        annotation: {
                            description: `Watching as I enter the passcode to unlock my front gate, Sita breaks the ice by mentioning that a topic we had once discussed is now part of a password that she recently created.`
                        }
                    }
                ]
            },
            {
                time: 132,
                lyric: `I am? "Well, you're backward…"`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 135,
                lyric: [
                    `She`,
                    {
                        anchor: `locks your arm.`,
                        annotation: {
                            description: `Shivering from the winter chill, Sita tucks her hand underneath my arm as she invites herself into my apartment. And just like that, I am once again on guard, second-guessing everything I say and do.`
                        }
                    },
                    {
                        anchor: `Key turned,`,
                        annotation: {
                            portal: `key_turned`
                        }
                    },
                    {
                        anchor: `returned to your guard…`,
                        annotation: {
                            description: `I was like an escaped convict who had just been handcuffed and sent back to the penitentiary, where a prison guard now directs me into a holding cell.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 144,
                lyric: [
                    `In her`,
                    {
                        anchor: `gingerbread prison,`,
                        annotation: {
                            description: `Even if not totally filling, it's sweet to taste, readily escapable, and ultimately of one's own making.`
                        }
                    },
                    `here now you submit.`
                ]
            },
            {
                time: 149,
                lyric: [
                    `Though`,
                    {
                        anchor: `never full, you're fed;`,
                        annotation: {
                            description: `Like a tired fugitive relieved to come back to a warm bed and regular meals, I conceded that platonic friendship was better than the cold, bleak alternative.`
                        }
                    },
                    `so you`,
                    {
                        anchor: `hit the switch.`,
                        annotation: {
                            portal: `hit_the_switch`
                        }
                    }
                ]
            },
            {
                time: 153,
                lyric: [
                    `On your bed's rumpled linens, a`,
                    {
                        anchor: `lidless Vaseline sits.`,
                        annotation: {
                            description: `I kept a jar of Vaseline by my bedside, which made masturbation quick and easy. Its last usage was obviously quite recent.`,
                            portal: `lidless_vaseline_sits`
                        }
                    }
                ]
            },
            {
                time: 158,
                lyric: [
                    `"Shall I leave you," she says,`,
                    {
                        anchor: `"here to Philip Dick?"`,
                        annotation: {
                            description: `Or else, "Shall I leave you here to feel up dick?" Sita takes a gentle jab at my carefully crafted bookish persona, while subtly conveying her acceptance of the flawed, vulnerable person underneath.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 164,
                lyric: [
                    `Thoughts sift in the`,
                    {
                        anchor: `waiting room:`,
                        annotation: {
                            description: `One night, Sita had a severe hypoglycemic episode. I drove her to the hospital and sat in the waiting room while she was being examined. Also, "wedding room." In traditional weddings, the groom's entrance begins the ceremony. He then stands and waits for the bride to close the procession.`
                        }
                    }
                ]
            },
            {
                time: 166,
                lyric: [
                    `Why does she play`,
                    {
                        anchor: `bright to your gloom`,
                        annotation: {
                            description: `Or else, "play bride to your groom." While I relied on humour and wit to mask my cynicism, Sita's positive outlook was genuinely heartfelt. What I stood to gain from her was obvious; less so was what she stood to gain from me.`
                        }
                    }
                ]
            },
            {
                time: 169,
                lyric: `past a year on a stalled friendship's sails?`
            },
            {
                unitMap: true,
                sectionClass: BRIDGE
            }
        ],
        [
            {
                time: 174,
                lyric: [
                    `On a`,
                    {
                        anchor: `malady`,
                        annotation: {
                            description: `Or else, on a "melody," as the wedding procession is typically accompanied by music.`
                        }
                    },
                    `your thoughts are stuck,`
                ]
            },
            {
                time: 176,
                lyric: [
                    `and the`,
                    {
                        anchor: `organ on which it struck,`,
                        annotation: {
                            description: `In a chapel, processional music may be performed on an organ. Also, organ failure is one of the dangers of hypoglycemia.`
                        }
                    }
                ]
            },
            {
                time: 178,
                lyric: [
                    `in the`,
                    {
                        anchor: `ever-present scent`,
                        annotation: {
                            portal: 'present_sent'
                        }
                    },
                    `of her trail.`
                ]
            },
            {
                unitMap: true,
                sectionClass: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 183,
                lyric: [
                    `Then you wake by a`,
                    {
                        anchor: `bell with a ring.`,
                        annotation: {
                            description: `At the hospital, a bell is rung to indicate that a patient has been released from care and is returning to the waiting room. Also, "belle with a ring." The momentous occasion of a wedding may leave the groom in a daze, to be roused only by the exchange of vows.`,
                            portal: `withering`
                        }
                    }
                ]
            },
            {
                time: 185,
                lyric: [
                    `In her`,
                    {
                        anchor: `white gown,`,
                        annotation: {
                            description: `White gowns are common attire in both wedding ceremonies and hospitals.`
                        }
                    },
                    `crept up she beams;`
                ]
            },
            {
                time: 187,
                lyric: [
                    `and you marvel, glimmer of her`,
                    {
                        anchor: `cheek unveiled.`,
                        annotation: {
                            description: `It takes some cheek to sneak up on someone who's dozing off. Also, in a traditional wedding, the father of the bride lifts her veil to kiss her on the cheek.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 193,
                lyric: {
                    anchor: `She loves you…`,
                    annotation: {
                        description: `It took a long while for Sita and I to grow fully comfortable around each other. During the first year or so of our friendship, we mainly just studied together. Then at some point, those study sessions progressed into cuddling, followed by necking. It all happened so fast towards the end that I was still processing what exactly triggered it.`
                    }
                }
            },
            {
                time: 196,
                lyric: `…and now you're left with no defences.`
            },
            {
                time: 201,
                lyric: `Well, who'd have guessed this?`
            },
            {
                time: 204,
                lyric: [
                    `You`,
                    {
                        anchor: `stand unsure.`,
                        annotation: {
                            // todo: foreshadow
                            description: `The night that we decided to have sex, I was suddenly overcome with a weary unease. As Sita lay naked under the covers, I stood forlornly by the bedside for what seemed like several minutes.`,
                            portal: `stand_onshore`
                        }
                    },
                    `She lures with a tease,`
                ]
            },
            {
                time: 207,
                lyric: `"Oh sweetie, you're right:`
            },
            {
                time: 209,
                lyric: [
                    `you wear your`,
                    {
                        anchor: `hard-on in a sleeve."`,
                        annotation: {
                            description: `Seeing my penis tucked in a condom, Sita lightens the mood by feigning to agree with a past self-assessment of mine. I had once judged myself to be too upfront about my feelings, or as I had put it, to "wear my heart on my sleeve."`
                        }
                    }
                ]
            },
            {
                time: 212,
                lyric: [
                    `So`,
                    {
                        anchor: `how's that compromise?`,
                        annotation: {
                            description: `I had spent so long constructing a facade behind which to tuck away my emotions, that I was now hesitant to compromise the safety of this position. I just didn't want to be vulnerable again, and I had so little faith that my desires wouldn't be used against me, were I to reveal them to Sita as I had once before.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: OUTRO
            }
        ],
        [
            {
                time: 216,
                lyric: `And dude, you love her…`
            },
            {
                time: 218,
                lyric: `…when your paws were thrashed sparring with the tide,`
            },
            {
                time: 221,
                lyric: [
                    `from your`,
                    {
                        anchor: `Grace Darling's beacon`,
                        properNoun: true,
                        annotation: {
                            description: [
                                {
                                    anchor: `Grace Darling`,
                                    wiki: `Grace_Darling`
                                },
                                `was a lighthouse keeper's daughter who rescued the survivors of a shipwreck by paddling out to sea in a rowboat. Though this brave feat won her instant renown in the Victoria era, the consequent public exposure led to her death by tuberculosis at age 26. And, of course, Sita was my "grace darling," having rescued me from a sea of loneliness.`
                            ],
                            portal: `grey_starling`
                        }
                    },
                    `light`,
                    {
                        anchor: `fell an oar.`,
                        annotation: {
                            description: [
                                `Or "fell Lenore." In Edgar Allan Poe's poem`,
                                {
                                    anchor: `"The Raven,"`,
                                    wiki: `The_Raven`
                                },
                                `the narrator laments the death of his beloved Lenore.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 225,
                lyric: [
                    `Let`,
                    {
                        anchor: `pure lose to pure…`,
                        annotation: {
                            description: `Sita and I were both virgins, which ultimately made it easier to lower my defences, as it was a reminder that neither of us really knew what we were doing.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: OUTRO,
                subsequent: true
            }
        ],
        [
            {
                time: 229,
                lyric: [
                    `You`,
                    {
                        anchor: `stroke her temples.`,
                        annotation: {
                            description: `Referring to her literal temples, and possibly to her figurative ones as well.`
                        }
                    },
                    `She gushes as she guides,`
                ]
            },
            {
                time: 233,
                // TODO: The little death. (orgasm) The Odin theme.
                lyric: [
                    `and pulls you up`,
                    {
                        anchor: `inside her thighs.`,
                        annotation: {
                            description: `That night, we had sex for the first time.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: OUTRO,
                subsequent: true
            }
        ]
    ],
    tasks: [
        {
            taskName: `Look Back portal`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `afterword annotations`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `music annotations`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `include wiki urls`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `sort out past and present tense`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `annotations`,
            workedHours: 41,
            neededHours: 41
        },
        {
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        }
    ]
}
