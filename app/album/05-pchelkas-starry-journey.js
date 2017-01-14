import { REFRAIN, VERSES, PRECHORUS, CHORUS, POSTCHORUS, BRIDGE, RESPONSE } from 'helpers/constants'

/**
 * NOTE: Ash Wednesday and Pchelka`s Starry Journey have been switched from the song
 * list order on the album.
 */
module.exports = {
    title: {
        anchor: `Pchelka's Starry Journey`,
        annotation: {
            description: [
                {
                    anchor: `Pchelka and Mushka`,
                    wiki: `Soviet_space_dogs`
                },
                `were dogs sent into orbit under the Soviet space program. In this allegorical retelling, I imagine myself as Pchelka, and my brother as Mushka.`
            ]
        }
    },
    scenes: [
        {
            verseIndex: 0,
            description: ``,
            characters: {

            }
        },
        {
            verseIndex: 0,
            description: ``,
            characters: {

            }
        },
        {
            verseIndex: 0,
            description: ``,
            characters: {

            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 211,
    overview: `At the height of my years of getting bullied at school, a strange letter arrived promising spiritual answers. With each new payment I sent, it was revealed to me that I belonged to a race of interstellar beings, with a mission to shut myself from the world. I did so by being unresponsive like my brother, and felt a psychic bond with him as a result, even as my sanity chipped away. In time, I came to see that I was in a mail-order cult. It took me a long while to recover.`,
    lyrics: [
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `In keeping with the Russian theme, the spirit of the balalaika is evoked by frenetically plucked mandolins. Since Tuva is a Russian republic, I also threw in`,
                            {
                                anchor: `Tuvan throat singing,`,
                                wiki: `Tuvan_throat_singing`
                            },
                            `where overtones in a lone voice sound like accompaniment by a second voice. I liked the implied notion that my brother sings along with me in spirit.`
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
                    emphasis: [
                        `But F., that man is the`,
                        {
                            anchor: `worst nuisance on the beach.`,
                            annotation: {
                                description: [
                                    `While being in a mail-order cult was a painful experience, there is a comic absurdity to it as well, which this line captures beautifully. In a humourous passage from`,
                                    {
                                        anchor: `Leonard Cohen's`,
                                        wiki: `Leonard_Cohen`
                                    },
                                    `otherwise tragic`,
                                    {
                                        italic: {
                                            anchor: `Beautiful Losers,`,
                                            wiki: `Beautiful_Losers`
                                        }
                                    },
                                    `the character F. tires of getting bullied at the beach. He signs up for the Charles Axis bodybuilding course advertised in a comic book, only to discover that Charles Axis is the one who bullies him.`
                                ]
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
                time: 11,
                lyric: `Mother, woken from her nap,`
            },
            {
                time: 13,
                lyric: `hears a piercing scream and thunders,`
            },
            {
                time: 15,
                lyric: [
                    `"Why'd you`,
                    {
                        anchor: `hit your baby brother,`,
                        annotation: {
                            description: `The times that I hit my brother were actually rare. They just stick out in my memory.`
                        }
                    }
                ]
            },
            {
                time: 17,
                lyric: `when he so looks up to you!`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 19,
                lyric: `Don't you remember days past,`
            },
            {
                time: 21,
                lyric: [
                    `when you wanted to`,
                    {
                        anchor: `buy a fortress`,
                        annotation: {
                            description: `Our cousin was well off and would receive new toys on a regular basis, one of which was a lifesize wooden castle. Since my birthday is in November, I always had the option of asking for a more expensive toy, which would then serve as my Christmas gift as well. So I was dismayed to learn that some toys were too expensive to count even for two gifts.`
                        }
                    }
                ]
            },
            {
                time: 23,
                lyric: `but your daddy couldn't afford it,`
            },
            {
                time: 25,
                lyric: `so you brought him into your room?`
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 27,
                lyric: [
                    `You stowed away`,
                    {
                        anchor: `beneath your captain bed.`,
                        annotation: {
                            description: `I slept in a captain bed that rested atop a dresser on one side, with the other side placed flush against the wall. By removing the bottom drawer, I could crawl into the space underneath with my brother and stay hidden.`
                        }
                    }
                ]
            },
            {
                time: 30,
                lyric: [
                    `We`,
                    {
                        anchor: `didn't hear a peep`,
                        annotation: {
                            description: `My brother would play alongside me for hours without once speaking or interacting. It was a strange closeness we shared.`
                        }
                    },
                    `throughout the entire weekend!"`
                ]
            },
            {
                unitMap: true,
                subStanza: [
                    {
                        time: 34,
                        lyric: {
                            emphasis: {
                                anchor: `Poor Sam Peabody!`,
                                annotation: {
                                    description: [
                                        `When my family visited Canada one late summer, the`,
                                        {
                                            anchor: `white-throated sparrow`,
                                            wiki: `White-throated_sparrow`
                                        },
                                        `was in breeding season, and we heard its song everywhere. I found the sound haunting and soothing, and longed to hear it again ever afterwards. "Poor Sam Peabody, Peabody, Peabody" is a mnemonic used by birdwatchers to mimic the song in cadence and pitch.`
                                    ]
                                }
                            }
                        }
                    }
                ],
                sectionClass: PRECHORUS,
                subsectionClass: RESPONSE
            }
        ],
        [
            {
                time: 38,
                lyric: [
                    `Oh brother, when all you`,
                    {
                        anchor: `know is bleat,`,
                        annotation: {
                            portal: `know_is_bleat`
                        }
                    }
                ]
            },
            {
                time: 40,
                lyric: [
                    `they'll catch you by`,
                    {
                        anchor: `your cape`,
                        annotation: {
                            description: `I was well-liked in elementary school for being physically small and ever eager to draw cartoon figures for anyone who asked. But these very traits that had once made me a hero suddenly marked me as easy prey in middle school, and I was ill-prepared.`
                        }
                    },
                    `and beat you,`
                ]
            },
            {
                time: 42,
                lyric: `threatening never to release you`
            },
            {
                time: 44,
                lyric: [
                    `till you`,
                    {
                        anchor: `learn to kick it back.`,
                        annotation: {
                            description: `In middle school, the most well-liked kids were the ones who were least concerned about being liked. This ran counter to my instinct for throwing myself whole-heartedly into anything worth doing.`
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
                time: 46,
                lyric: [
                    {
                        anchor: `Feigning sick,`,
                        annotation: {
                            description: `As a kid, I was proud of my perfect attendance record. After the bullying began, I would fake being sick in order to skip school. My mother noticed the change, but trusted me enough not to press too deeply on it.`
                        }
                    },
                    `I chanced to read`
                ]
            },
            {
                time: 48,
                lyric: `these words in a comic to me speaking:`
            },
            {
                time: 50,
                lyric: [
                    `"Are you`,
                    {
                        anchor: `tired of being the weakling?"…`,
                        annotation: {
                            description: [
                                `In a well-known advertisement seen in the back of comic books at the time, a skinny guy builds up his muscles by sending away for`,
                                {
                                    anchor: `Charles Atlas's`,
                                    wiki: `Charles_Atlas`
                                },
                                `free bodybuilding guide, which then allows him to take revenge on a bully.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 52,
                lyric: `I clipped and mailed the ad.`
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 54,
                lyric: [
                    `Soon`,
                    {
                        anchor: `send-away offers`,
                        annotation: {
                            description: `Since I had few friends, I would amuse myself by sending away for free samples and making small purchases through mail order. As a result, I got flooded with junk mail advertising even more such offers. It was during this time that I received the letter from RI Research, Special Human Being Laboratory.`
                        }
                    },
                    `were piling up high,`
                ]
            },
            {
                time: 57,
                lyric: `and then one day one came and made me cry and cry.`
            },
            {
                time: 61,
                lyric: [
                    {
                        anchor: `Red pouches unspent`,
                        annotation: {
                            description: [
                                `In East Asian cultures, adult relatives give monetary gifts to children sealed in`,
                                {
                                    anchor: `red envelopes.`,
                                    wiki: `Red_envelope`
                                },
                                `My parents insisted that we save this money for college. But desperate for answers, I blew my entire savings on my correspondence with RI Research.`
                            ]
                        }
                    },
                    `for years, at once counted and sent,`
                ]
            },
            {
                time: 64,
                lyric: `while all the weeks I waited, weighing those words in bold text:`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 68,
                lyric: [
                    {
                        anchor: `"Are you a Beyonder`,
                        annotation: {
                            description: `According to RI Research, Beyonders are an ancient race of beings born from the stars, who were scattered across the universe with no memory of their true origin. Those who made it to Earth adopted the likeness of human beings, yet are beset by a nagging disquiet that they do not truly belong.`
                        }
                    },
                    `sent down to be Earth-fostered?`
                ]
            },
            {
                time: 71,
                lyric: [
                    `Do you often feel like a`,
                    {
                        anchor: `wanderer lost?"`,
                        annotation: {
                            description: `Hitting all the right nerves, the letter from RI Research addressed my yearning to belong, and spoke to my frustration that these desired ends should so elude me. It then shared its hopeful news: They believed that I might be a Beyonder, and after searching for so long, they had found me.`
                        }
                    }
                ]
            },
            {
                time: 76,
                lyric: [
                    `But`,
                    {
                        anchor: `waiting for Goddard,`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Robert Goddard`,
                                    wiki: `Robert_H._Goddard`
                                },
                                `ushered in the Space Age by inventing the liquid-fueled rocket. Unfortunately in my case, I couldn't wait for a more promising age to arrive on its own. Middle school was brutal and felt endless, and I needed answers right then. Also,`,
                                {
                                    italic: {
                                        anchor: `Waiting for Godot`,
                                        wiki: `Waiting_for_Godot`
                                    }
                                },
                                `is a play by Samuel Beckett that explores existential themes.`
                            ]
                        }
                    },
                    `our two impatient paupers,`
                ]
            },
            {
                time: 79,
                lyric: [
                    {
                        anchor: `Gogo and his Didi,`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `In Chinese,`,
                                {
                                    italic: `Gogo`
                                },
                                `means "big brother." And of course,`,
                                {
                                    italic: `Didi`
                                },
                                `this time refers to`,
                                {
                                    emphasis: `my`
                                },
                                `little brother. Didi and Gogo are also the respective pet names of Vladimir and Estragon, the two characters who are still waiting for Godot by the end of Beckett's play.`,
                            ]
                        }
                    },
                    `sauntered off…`
                ]
            },
            {
                time: 83,
                lyric: [
                    `Till`,
                    {
                        anchor: `in hunger they were led`,
                        annotation: {
                            description: `Some of the dogs chosen for the Soviet space program were strays found on the streets of Moscow. This includes Laika, the first dog in orbit, whose death was intentional as her spacecraft was not designed to return. I liked the analogy of being thrust helplessly from one desperate circumstance to another.`
                        }
                    },
                    `into`,
                    {
                        anchor: `Huntsville`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `Huntsville, Alabama is where the`,
                                {
                                    anchor: `largest NASA center`,
                                    wiki: `Marshall_Space_Flight_Center`
                                },
                                `is located.`
                            ]
                        }
                    },
                    `and fed,`
                ]
            },
            {
                time: 86,
                lyric: [
                    `dragged to sled by`,
                    {
                        anchor: `hunter's belt`,
                        annotation: {
                            description: [
                                `The constellations Canis Major and Canis Minor, or "greater dog" and "lesser dog," are said to follow the constellation Orion, named after the`,
                                {
                                    anchor: `hunter in Greek mythology.`,
                                    wiki: `Orion_(mythology)`
                                },
                                `Orion can be identified by three stars in a row that represent his belt. And sadly, a belt can be used to instill obedience in wayward animals.`
                            ]
                        }
                    },
                    `and launched!`
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 90,
                lyric: `"Far from home and shaped like common men,`
            },
            {
                time: 93,
                lyric: [
                    `Beyonders bleed the most, their`,
                    {
                        anchor: `roots unknown to them.`,
                        annotation: {
                            description: [
                                `I didn't know this at the time, but the notion of`,
                                {
                                    anchor: `"star people"`,
                                    wiki: `Star_people_(New_Age_belief)`
                                },
                                `was a New Age belief popular in the 1970s. Like Beyonders, star people arrived on Earth with no recollection of their true origin. Undoubtedly, the letters from RI Research drew much of their material from this body of thought.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 98,
                lyric: `We've received your fee, and per the tests,`
            },
            {
                time: 101,
                lyric: `you are indeed a seed from that nebular nest.`
            },
            {
                unitMap: true,
                sectionClass: POSTCHORUS
            }
        ],
        [
            {
                time: 105,
                lyric: [
                    `Is this`,
                    {
                        anchor: `too much at once?`,
                        annotation: {
                            description: `I sobbed when I got the letter confirming that I was a Beyonder. While I was relieved to finally have an explanation for my torment, the last thing I wanted was the burden of being different from everyone else.`
                        }
                    },
                    `We're trusting mum's to be the word.`
                ]
            },
            {
                unitMap: true,
                sectionClass: POSTCHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 112,
                lyric: `Beyonders pine for a love no mortals give,`
            },
            {
                time: 116,
                lyric: [
                    `one they'll find only once we build the`,
                    {
                        anchor: `mothership.`,
                        annotation: {
                            description: `To present the appearance of a legitimate institute, the letters from RI Research were peppered with pseudo-scientific terms, as they promised to keep me abreast of their ongoing technological developments. This included a spacecraft that would allow us to make contact with our extraplanetary kin.`
                        }
                    }
                ]
            },
            {
                time: 119,
                lyric: `Your monthly tithe shall fund good tidings soon to come.`
            },
            {
                time: 123,
                lyric: [
                    `But till then, here's`,
                    {
                        anchor: `how you're to live…"`,
                        annotation: {
                            description: `The letters cautioned me to keep myself separate from society. I realised that my brother had been doing this all along, and thus modelled my own behaviour after his.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                subStanza: [
                    {
                        time: 128,
                        lyric: {
                            emphasis: `Poor Sam Peabody!`
                        }
                    }
                ],
                sectionClass: BRIDGE,
                subsectionClass: RESPONSE
            }
        ],
        [
            {
                time: 134,
                lyric: [
                    `So thus we learned to`,
                    {
                        anchor: `act the dunce`,
                        annotation: {
                            description: `By adopting my brother's composure in refusing to acknowledge or respond to other students, I came across as dimwitted.`
                        }
                    }
                ]
            },
            {
                time: 136,
                lyric: `as spies among the carnal fallen,`
            },
            {
                time: 138,
                lyric: [
                    `twin friars`,
                    {
                        anchor: `cast here in pollens`,
                        annotation: {
                            description: [
                                `In Greek mythology,`,
                                {
                                    anchor: `Castor and Pollux`,
                                    wiki: `Castor_and_Pollux`
                                },
                                `were twin brothers fathered by Zeus. Castor was mortal, however, so Pollux pleaded with Zeus to let him share his immortality with his twin. Thus they were transformed into the constellation Gemini. Similarly, it felt as if my brother were sharing his autism with me, along with all its spiritual answers.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 140,
                lyric: `from a star's placenta sac.`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 141,
                lyric: `Braced for an earth stay unloved,`
            },
            {
                time: 143,
                lyric: [
                    `twits daily`,
                    {
                        anchor: `murdered for their virtue.`,
                        annotation: {
                            description: `Like all ordeals, mine became more bearable once I could tie it to a greater purpose.`
                        }
                    }
                ]
            },
            {
                time: 145,
                lyric: `Mirthful, the merciless would hurt you,`
            },
            {
                time: 147,
                lyric: [
                    `as`,
                    {
                        anchor: `omerta`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Omerta`,
                                    wiki: `Omertà`
                                },
                                `is the Mafia's code of honour that praises silence and refusal to cooperate with authorities. Of course, I wasn't the first kid ever to observe similarities between school life and prison culture.`
                            ]
                        }
                    },
                    `turned their backs.`
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
                time: 149,
                lyric: [
                    `Stung by venomous vipers, our`,
                    {
                        anchor: `muted youths lapsed.`,
                        annotation: {
                            description: `While I only spent a year actively feigning autism, the social repercussions lasted much longer, as I was now and forever "that kid" to others. It's not that I lacked the will to correct their perceptions. I was as baffled as anyone about what had just happened, and there were no guide books for how to proceed from there.`
                        }
                    }
                ]
            },
            {
                time: 153,
                lyric: [
                    `We knew the`,
                    {
                        anchor: `shortest cyphers`,
                        annotation: {
                            description: [
                                `The lengthier a`,
                                {
                                    anchor: `cryptogram`,
                                    wiki: `Cryptogram`
                                },
                                `gets, the more hints it necessarily drops, and thus the easier it becomes to solve. Conversely, the less I said, the fewer openings others were given to get under my skin.`
                            ]
                        }
                    },
                    `are the toughest ones to crack.`
                ]
            },
            {
                time: 156,
                lyric: [
                    `But`,
                    {
                        anchor: `every hero has a heel,`,
                        annotation: {
                            description: [
                                `The Greek hero`,
                                {
                                    anchor: `Achilles`,
                                    wiki: `Achilles`
                                },
                                `was invulnerable everywhere on his body except for his heel. Meanwhile, my one weakness was that I genuinely craved acceptance from others.`
                            ]
                        }
                    },
                    `we'd realise, blind before the squad.`
                ]
            },
            {
                time: 160,
                lyric: [
                    `The only spies who get to feel love first`,
                    {
                        anchor: `unearth their own plots!`,
                        annotation: {
                            description: `Figuratively, to reveal one's secret plans, but also literally, to dig one's own grave. A spy succeeds by staying hidden; recognition and appreciation can only come after facing the firing squad. Similarly, at some point I tried to open up, thus sabotaging my past efforts to be unresponsive, but this only exposed me to greater scrutiny, as I was now forced to explain myself.`
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
                time: 164,
                lyric: [
                    {
                        anchor: `Mushing onward,`,
                        annotation: {
                            description: [
                                `Upon their arrival in the New World, the French learned the practise of dog sledding from the natives. They commanded their dog teams to move by shouting`,
                                {
                                    italic: `"marche,"`
                                },
                                `meaning "go." After the territory was ceded to the British, this term continued in English as`,
                                {
                                    anchor: `"mush."`,
                                    wiki: `Mushing`
                                }
                            ]
                        }
                    },
                    {
                        anchor: `Mushka's`,
                        properNoun: true,
                        annotation: {
                            description: `While Pchelka and Mushka successfully spent a day in orbit aboard Sputnik 6, there was an error upon reentry. To prevent the spacecraft from landing in hostile territory, the Soviets had it self-destruct, killing all aboard. In my own analogy, I as Pchelka managed to avoid the sad fate that my brother as Mushka could not.`
                        }
                    },
                    `dragged by collar`
                ]
            },
            {
                time: 167,
                lyric: [
                    `to`,
                    {
                        anchor: `his slaughter`,
                        annotation: {
                            description: `I wrote this song during the peak of my activism within the animal rights movement, which takes a dim view of sled dog racing. Not only are dogs routinely abandoned or killed when they outlive their usefulness, but the race itself is grueling enough to cause death by overexertion.`
                        }
                    },
                    `under`,
                    {
                        anchor: `undying dawn.`,
                        annotation: {
                            description: `During summer in the Arctic, the sun remains visible for the full 24 hours of each day.`
                        }
                    }
                ]
            },
            {
                time: 171,
                lyric: [
                    `Choked, he's soon a goner,`,
                    {
                        anchor: `no one heard his hollers,`,
                        annotation: {
                            description: `I often wondered whether my brother was screaming on the inside, as I was during this time. If so, then he certainly wasn't being heard.`
                        }
                    }
                ]
            },
            {
                time: 175,
                lyric: [
                    `this pack honours only the`,
                    {
                        anchor: `idiot's rod.`,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Iditarod`,
                                    wiki: `Iditarod_Trail_Sled_Dog_Race`
                                },
                                `is an annual sled dog race held in Alaska. The rod refers to the whip used by some mushers to keep the pack disciplined.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 178,
                lyric: [
                    `Next cabins come equipped with`,
                    {
                        anchor: `pentobarbitone syringe,`,
                        annotation: {
                            description: [
                                `A`,
                                {
                                    anchor: `pentobarbitone`,
                                    wiki: `Pentobarbital`
                                },
                                `injection is the most humane means of euthanasia. No such kindness was prepared for Laika, whose death by heat exhaustion was expected in advance.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 182,
                lyric: `nothing too rich for glorious cosmonauts!`
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 186,
                lyric: [
                    `I'm`,
                    {
                        anchor: `sorry I bailed,`,
                        annotation: {
                            description: `By wanting to rejoin the company of others, I felt like I was betraying my brother somehow. Unlike me, he wasn't a tourist in the land of autism. He wasn't free to come and go as he pleased.`
                        }
                    },
                    {
                        anchor: `Xiao Xiang,`,
                        properNoun: true,
                        annotation: {
                            description: `Mushka means "little fly" in Russian. By coincidence, my brother's Chinese name, Xiao Xiang, literally means "little fly." (Though in his case, the second word is a verb, not a noun.) Incidentally, Pchelka means "little bee," which maybe also makes sense, given that my name starts with the letter B?`
                        }
                    },
                    `mush on…`
                ]
            },
            {
                time: 189,
                lyric: [
                    `I couldn't ditch my wails, I`,
                    {
                        anchor: `needed the pod.`,
                        annotation: {
                            description: [
                                `A group of whales is called a pod. Because I wanted to belong to a social group, I couldn't "ditch my whales," and thus I sought out a metaphorical escape pod.`
                            ]
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: POSTCHORUS
            }
        ],
        [
            {
                // TODO: Music mention David Bowie's space oddity.
                time: 193,
                lyric: [
                    `"Kids say you're`,
                    {
                        anchor: `hopped on drugs,`,
                        annotation: {
                            description: `Eventually a classmate suspected me of being on drugs, and I was sent to the principal's office. When my mother came to pick me up, she proceeded to chew out the principal for even suspecting that I was capable of such a thing. Since I was generally more responsive around authority figures, he had to agree that the charge didn't make sense, and dropped it.`
                        }
                    },
                    `son, with Mum we'll need a word."`
                ]
            },
            {
                time: 200,
                lyric: [
                    `Mushka, per their bargain, I`,
                    {
                        anchor: `can't ever return.`,
                        annotation: {
                            description: `I'd grown disillusioned with RI Research at this point anyway, as the letters inexplicably began to take on Christian overtones. It's not that I held Christianity to be conclusively false. It was just incongruous with all the previous talk of extraterrestrial origins.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: POSTCHORUS,
                subsequent: true
            }
        ]
    ],
    tasks: [
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
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        },
        {
            taskName: `annotations`,
            workedHours: 40,
            neededHours: 40
        },
        {
            taskName: `include wiki urls`,
            workedHours: 1,
            neededHours: 1
        }
    ]
}
