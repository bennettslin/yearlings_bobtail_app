import { BACKSTORY,
         NARRATIVE,
         OBSERVATION,
         PUN,
         REFERENCE,
         AFTERWORD,
         SONGWRITING } from '../constants/dots'
import { VERSES,
         PRECHORUS,
         CHORUS,
         REFRAIN,
         IS_DOT_STANZA } from '../constants/lyrics'
import { TAIWAN_PUPPET_SHOW_TILES,
         SCHOOLBUS_TILES,
         TETHERBALL_SCENE_TILES } from '../constants/stageTiles'
import { SKY_NO_TIME,
         SKY_SUMMER } from '../constants/stageValues'
module.exports = {
    scenes: [
        {
            unitIndex: 1,
            description: `Puppets of Bennett and family are crossing a rope bridge that spans several mountains in Taiwan.`,
            tiles: TAIWAN_PUPPET_SHOW_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SUMMER
            }
        },
        {
            unitIndex: 4,
            description: `Bennett has drawn a picture of himself holding hands with Sasha, together exploring the mountains of Taiwan.`,
            actors: {
            },
            tiles: TAIWAN_PUPPET_SHOW_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SUMMER
            }
        },
        {
            unitIndex: 6,
            description: `In Bennett's thought bubble, he recollects sitting one bus seat behind Sasha on the bus. She is chatting flirtatiously with a boy seated next to her who is wearing a yarmulke.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    workedHours: 1.75,
                    description: 'side seated, pretending to read, panicked'
                },
                sasha: {
                    todo: true,
                    workedHours: 1.75,
                    description: 'side seated, laughing, braids trailing'
                },
                brad: {
                    jewishBoy: {
                        todo: true,
                        workedHours: 2.75,
                        description: 'side seated, turned away, pointing to window'
                    }
                }
            },
            tiles: SCHOOLBUS_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SUMMER
            }
        },
        {
            unitIndex: 9,
            description: `In Bennett's thought bubble, he is being tied to a tetherball pole by two bullies. Sasha is yelling at them, telling them to untie Bennett and to leave him alone. Bennett looks physically roughed up, and emotionally mortified.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    workedHours: 1.75,
                    description: 'tied up, greeting Sasha with nervous laughter'
                },
                sasha: {
                    todo: true,
                    workedHours: 1.75,
                    description: 'indignant, yelling at bullies'
                },
                andrew: {
                    todo: true,
                    workedHours: 2.75,
                    description: 'laughing, feigning fear of Sasha'
                },
                brad: {
                    todo: true,
                    workedHours: 2.75,
                    description: 'laughing, tying up Bennett'
                }
            },
            tiles: TETHERBALL_SCENE_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SUMMER
            }
        },
        {
            unitIndex: 12,
            description: `In Bennett's sketch, there is a drawing of Bennett by himself on the island of Taiwan, and Sasha and a Jewish boy on North America, with an ocean separating them.`,
            actors: {},
            tiles: TAIWAN_PUPPET_SHOW_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SUMMER
            }
        }
    ],
    totalTime: 171,
    overview: `Sasha was a childhood friend, as well as my first crush. The strength she drew from her Jewish identity fascinated me, as I felt no cultural or religious pull of my own. But this clued me in on a cruel paradox. Namely, that nothing comes from longing to share in someone's faith and roots, which stay strong precisely by not being shared. Sasha moved away in middle school, just as I began dealing with bullies. That summer, I wrote her a letter on a family trip to Taiwan.`,
    title: {
        anchor: `Dear Saskia`,
        annotation: {
            description: `Sasha's given name was actually Saskia, but because this was difficult for other children to pronounce, she had gone by the nickname of Sasha her entire life.`,
            dotKeys: {
                [BACKSTORY]: true
            }
        }
    },
    lyrics: [
        [
            {
                time: 0,
                centre: {
                    italic: `(Sasha's theme)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `As a teenager, I tried to figure out how`,
                            {
                                anchor: `The Beatles`,
                                wiki: `The_Beatles`
                            },
                            `weaved melodies and chords progressions so seamlessly. The music for this song began as a zealous attempt to match their form and style. In the end, it suffered from overthinking, and I put it away in disgust. Years later, I realised that its overwrought nature was exactly what my letter to Sasha called for, and trotted it back out.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 5,
                centre: `Dearest Sasha,`
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 7,
                lyric: [
                    `It's nearing autumn here with`,
                    {
                        anchor: `record highs.`,
                        annotation: {
                            description: `It's hard to begin writing a letter. But one can always talk about the weather.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 10,
                lyric: `Is it searing in Boston? Hope this letter finds`
            },
            {
                time: 13,
                lyric: [
                    `your`,
                    {
                        anchor: `first semester`,
                        annotation: {
                            description: `My family is spending the summer in Taiwan. By the time we're to get back to the States, Sasha will have already moved to Boston and begun the new school year.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `fine while I'm out of town…`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `I wanted the vocals to sound sickly here, which worked out well, since I was guaranteed to catch an awful cold at some point during the five years that I worked on this album.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 18,
                lyric: [
                    {
                        anchor: `You'd love Taiwan,`,
                        annotation: {
                            description: `As we toured the countryside with our Taiwanese cousins, I would add to my mental list of all the things I could share with Sasha one day. I think this might get at why I've never felt strongly about being Taiwanese. Until one's heritage can be shared with someone else, there doesn't seem to be any real point.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `surrounded by walls of mountains,`
                ]
            },
            {
                time: 22,
                lyric: `their peaks sealed and shielded by foggy clouds.`
            },
            {
                time: 26,
                lyric: `Beneath this ceiling yields the scene a reeling feel`
            },
            {
                time: 30,
                lyric: [
                    `of some`,
                    {
                        anchor: `giant's house.`,
                        annotation: {
                            description: `Here I describe to Sasha my most vivid memory of Taiwan thus far, in which I'm standing in the middle of a lush valley. The ground is completely level, the surrounding mountains are almost vertical, and a translucent blanket of clouds covers the sky, dipping below the mountain peaks. I feel like a tiny guest in a giant's house.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 33,
                lyric: `So… before I left, you said`
            },
            {
                time: 37,
                lyric: [
                    `I should`,
                    {
                        anchor: `keep your kid name,`,
                        annotation: {
                            description: `Sasha decided that, once in Boston, she would start to go by her given name of Saskia. I asked her if I should now call her Saskia as well. She said no, that it would be nice to always be reminded of which friends knew her first.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `with everything it meant.`
                ]
            },
            {
                time: 41,
                lyric: [
                    `But then in`,
                    {
                        anchor: `your embrace,`,
                        annotation: {
                            description: `Of course, it's no comfort to be cherished as an old friend by someone so visibly eager to dive into the new. As we hugged on the last day of school, Sasha fidgeted like a creature ready to slough off her old skin and fly away.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `I felt you`,
                    {
                        anchor: `prepped to shed…`,
                        annotation: {
                            description: `Sasha is literally "prepped," in that she is to begin enrollment at a preparatory school in Boston.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 48,
                lyric: [
                    `And I'd reflect inside`,
                    {
                        anchor: `withering`,
                        annotation: {
                            portal: `withering`
                        }
                    },
                    {
                        anchor: `amber eyes—`,
                        annotation: {
                            description: [
                                `Sasha's eyes were of an amber colour. Also,`,
                                {
                                    anchor: `amber`,
                                    wiki: `Amber`
                                },
                                `is fossilised tree resin that sometimes preserves the remains of trapped insects from epochs past.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 52,
                lyric: [
                    {
                        anchor: `your pupil's pupal fly,`,
                        annotation: {
                            description: `While I reflect on my feelings for Sasha, petrified at the thought of losing her, I recall that last day when I was literally reflected in her eyes, seeing myself as a petrified larva without any chance to moult.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `a pet petrified—`
                ]
            },
            {
                time: 56,
                lyric: [
                    `with you raving over how`,
                    {
                        anchor: `he's getting you`,
                        annotation: {
                            description: `Everyone I had known Sasha to crush on was Jewish, and these crushes in turn motivated her to be a better Jew. I was frustrated that anyone who was part of this positive feedback loop instantly had the winning advantage over me in "getting her."`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 64,
                lyric: [
                    `staying kosher. Though, you know,`,
                    {
                        anchor: `I would have too…`,
                        annotation: {
                            description: `It seemed obvious to me that if Sasha were to want me, then I would certainly convert to Judaism.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `I matched the passive-aggressiveness of the lyrics with woodwind screeches and scratch tones on bowed guitars.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 71,
                centre: {
                    italic: `(Sasha's theme)`
                }
            },
            {
                unitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 74,
                lyric: [
                    `And I sniffled daily when you`,
                    {
                        anchor: `skipped a grade.`,
                        annotation: {
                            description: `I panicked when Sasha was allowed to skip the fifth grade, as this opened new vistas for her that necessarily excluded me. With middle school now underway, I am reminded of this panic as Sasha navigates with seeming ease the same social landscape that I find so treacherous.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 77,
                lyric: [
                    `One`,
                    {
                        anchor: `bus seat`,
                        annotation: {
                            description: [
                                `My family lived in the largely nonwhite neighbourhood of`,
                                {
                                    anchor: `North Hollywood.`,
                                    wiki: `North_Hollywood,_Los_Angeles`
                                },
                                `Halfway through elementary school, however, my mother pulled a scam that allowed my sister and I to bus into`,
                                {
                                    anchor: `Sherman Oaks,`,
                                    wiki: `Sherman_Oaks,_Los_Angeles`
                                },
                                `a wealthy district with few minorities. I remember feeling out of my element, although at the time I didn't know exactly why.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `up you moved, letting rippled braids`
                ]
            },
            {
                time: 80,
                lyric: [
                    `caress, sun-streaked and loose, a`,
                    {
                        anchor: `wet-cheeked papoose`,
                        annotation: {
                            description: [
                                `Here, I recall one afternoon, when Sasha's hair blew in my face from the seat ahead of mine, and I realised that she had matured to the next peer group. I felt like a`,
                                {
                                    anchor: `papoose,`,
                                    wiki: `Papoose`
                                },
                                `or Native American child, strapped to his mother's back, in anguish over having to start walking on his own.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 84,
                lyric: `sadly weaned from you…`
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 88,
                lyric: `Whom I knew I'd lose the day,`
            },
            {
                time: 92,
                lyric: `you flew enraged and shooed them from their game;`
            },
            {
                time: 95,
                lyric: [
                    `untied this`,
                    {
                        anchor: `"tetherboy,"`,
                        annotation: [
                            {
                                description: `Here, I recall an incident in which Sasha came to my defence when a bully proceeded to punch me as if I were the "tetherball," after having wrapped me in its rope.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            },
                            {
                                description: `There exists a comfortable notion in our society that the children of overprotective parents, who are often said to be kept on a tether, actually benefit from the occasional beatdown, which toughens them up.`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        ]
                    },
                    `soothing in your lecture voice.`
                ]
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 103,
                lyric: [
                    `Oh but Sasha, if`,
                    {
                        anchor: `anarchy reigns,`,
                        annotation: {
                            description: `It was weird to be taught in history class that anarchy devolves into tyranny, and then to walk onto the quad and witness this very principle in action.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 107,
                lyric: [
                    `then no one lives when`,
                    {
                        anchor: `narcing to the aides,`,
                        annotation: {
                            description: [
                                `To narc is to snitch, much like the narcotics officers who bust drug dealers by posing as high school students.`
                            ],
                            dotKeys: {
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 110,
                lyric: [
                    `who shrug when thus annoyed, yawning,`,
                    {
                        anchor: `"Boys will beat boys…"`,
                        annotation: {
                            description: `It's more common to say that boys will "be" boys, of course, but the one naturally follows the other. It caught me off guard that the school aides typically declined to intervene on behalf of the victims of bullying, as if such predation was natural to the middle school ecosystem.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 118,
                lyric: `Well Sasha… okay, you saw the cuts.`
            },
            {
                time: 122,
                lyric: [
                    `But though my`,
                    {
                        anchor: `jaw was stuck,`,
                        annotation: {
                            description: `Here, I recall another incident in which a bully snuck up from behind and put me in a chokehold while I was waiting for the school bus.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `so now I`,
                    {
                        anchor: `talk Canuck,`,
                        annotation: {
                            description: [
                                `The chokehold incident left me with a dislocated jaw that required me to clench it whenever I spoke. This led to a peculiar manner of pronunciation that some to this day mistake for a`,
                                {
                                    anchor: `Canadian accent.`,
                                    wiki: `Canadian_raising`
                                },
                                `Canadians, of course, are affectionately known as`,
                                {
                                    anchor: `Canucks.`,
                                    wiki: `Canuck`
                                }
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 126,
                lyric: `there's been plenty days I've really been through worse.`
            },
            {
                time: 134,
                lyric: [
                    `Anyway, I'm feeling healed. Still,`,
                    {
                        anchor: `hugging hurts…`,
                        annotation: {
                            description: `To avoid the humiliation of getting beaten up, I would typically downplay my injuries. But here, in explaining to Sasha why I winced as we hugged that last day, I'm more eager to downplay how much it hurt in the metaphorical sense.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `When I first began to write songs, I noticed that every other aspiring songwriter would figure out their chords upfront, then fit any feasible melody to go on top. But my theory was that the Beatles wrote the melody and chords together, allowing their music to unfold organically. I was always trying to write the next "Martha My Dear," which may be evident here.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 138,
                centre: {
                    italic: `(Sasha's theme)`
                }
            },
            {
                unitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 143,
                lyric: `And Sasha, I know you'll have them all,`
            },
            {
                time: 147,
                lyric: [
                    `while if I last the fall`,
                    {
                        anchor: `playing possum`,
                        annotation: {
                            description: [
                                `To avoid confrontation, an opossum will faint and remain comatose in order to create the impression of being dead, which is known as`,
                                {
                                    anchor: `playing possum.`,
                                    wiki: `Apparent_death`
                                },
                                `Similarly, I lament to Sasha here that my only recourse for the next few years is to periodically exit my body and hope for the best.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 151,
                lyric: [
                    `is a toss-up. But where some`,
                    {
                        anchor: `haemophile`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Haemophilia`,
                                    wiki: `Haemophilia`
                                },
                                `is a disease in which blood cannot clot properly, leading to continuous bleeding.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 154,
                lyric: `might bleed the Nile to nausea,`
            },
            {
                time: 158,
                lyric: `I can wash up, and hope the bastards croak,`
            },
            {
                time: 162,
                lyric: [
                    `on`,
                    {
                        anchor: `rat turds choked.`,
                        annotation: {
                            description: `I wasn't sure how to end a song about a painful stage of my life that seems comical in retrospect. I decided I was happier to err on the side of humour.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [SONGWRITING]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `Confused by the lack of interest in the album's release, I distilled my approach to writing songs into a lesson plan called`,
                            {
                                italic: `Bobtail Method.`
                            },
                            `Unfortunately, this generated even less interest and probably only cemented my status as a hobbyist, rather than the kind of serious, career-oriented musician sought after by the indie labels.`
                        ],
                        dotKeys: {
                            [AFTERWORD]: true,
                            [OBSERVATION]: true
                        }
                    }
                }
            }
        ]
    ],
    tasks: [
        {
            taskName: `review tense and categorisation`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `Make just one bully`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `tenses and categorisation`,
            workedHours: 6,
            neededHours: 6
        },
        {
            taskName: `annotations`,
            workedHours: 24,
            neededHours: 24
        },
        {
            taskName: `include wiki urls`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `rough illustration synopses`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `afterword annotations`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `music annotations`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `review synopses and rough illustrations`,
            workedHours: 3,
            neededHours: 3,
        }
    ]
}
