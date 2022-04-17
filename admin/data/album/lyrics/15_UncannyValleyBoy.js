import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../src/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    CODA,
    INTRO,
    OUTRO,
    RHYME,
    RESPONSE,
    BACKING,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    path: 'uncanny-valley-boy',
    title: 'Uncanny Valley Boy',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Acoustic guitar in measure 1`,
    mixStartTime: `0:01:18.46`,
    playerStartTime: 2722.629,
    overview: `Upon learning of my brother's autism, my parents were too harried to notice I was being bullied at school. In guilt, they later indulged every whim I had to find my own path. But as I got older, they grew concerned that I wasn't maturing as I went. On top of this, they were devastated when I left Sita, whom they adored. Naturally, I felt crushed by the weight of disappointing them. Still, I had a master plan to follow, and I wasn't about to change my ways.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                cards: [
                    {
                        description: [
                            `The`,
                            {
                                anchor: `uncanny valley`,
                                wiki: `Uncanny_valley`,
                            },
                            `is a theory that human replicas only repulse us further as they grow more lifelike, insofar as they remain less than convincingly so. And as I grew older while remaining less than convincing as a grownup, it was reasonable to wonder if this "valley boy" now elicited the same revulsion.`,
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [PUN]: true,
                        },
                    },
                    {
                        description: [
                            `The San Fernando Valley is known to the world for having popularized the`,
                            {
                                anchor: `Valley girl`,
                                wiki: `Valley_girl`,
                            },
                            `stereotype. So the kids I grew up with self-identified with the label, even if they didn't embody its traits.`,
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                        },
                    },
                ],
            },
        },
        {
            unitMap: {
                formType: INTRO,
            },
            mainVerses: [
                {
                    mixTime: null,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(keyboards)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I wrote the music for this song a while back after waking from a horrid nightmare. The premise quickly seemed laughable, so I shelved it. But years later, I realized its gloomy chords and disjointed tempo changes would work well for a song about a nightmarish version of my parents.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:14:23.07`,
                    lyric: [
                        {
                            anchor: `Beta`,
                            card: {
                                description: [
                                    `In Hindi,`,
                                    {
                                        // बेटा
                                        isItalic: true,
                                        lyric: `beta`,
                                    },
                                    `means "son." Having unequivocally taken Sita's side, I imagine my parents addressing me as an Indian parent would.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `, come`,
                        {
                            anchor: `wax prophetic`,
                            cards: [
                                {
                                    description: [
                                        `Like the ghosts in`,
                                        {
                                            anchor: `Charles Dickens`,
                                            wiki: `Charles_Dickens`,
                                        },
                                        `'s`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `A Christmas Carol`,
                                                wiki: `A_Christmas_Carol`,
                                            },
                                        },
                                        `, my parents invite me on a magical night journey to witness the ordeals of my past, my self-serving ways at present, and the emotional devastation soon to come of it all.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `It's more common to "wax poetic," meaning to become eloquent in speech. But my parents use this highbrow expression ironically, as commentary on the artificial persona I've created.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `with me.`,
                    ],
                },
                {
                    mixTime: `0:18:20.97`,
                    lyric: [
                        `Rest your rump, boy, by your old`,
                        {
                            anchor: `giving tree`,
                            card: {
                                description: [
                                    {
                                        anchor: `Shel Silverstein`,
                                        wiki: `Shel_Silverstein`,
                                    },
                                    `'s`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Giving Tree`,
                                            wiki: `The_Giving_Tree`,
                                        },
                                    },
                                    `is a children's book about a tree's nurturing love for a boy. As the boy grows into a man, the tree's gifts to him become increasingly self-sacrificing in nature. The story can be understood as an allegory for unhealthy, codependent relationships.`,
                                ],
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:23:08.46`,
                    lyric: [
                        {
                            anchor: `Stumped`,
                            cards: [
                                {
                                    description: `In their claim to be stumped, my parents feign to be oblivious to the outcome of my story.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: `The tree finally sacrifices herself completely, allowing the boy to chop down her trunk to build a boat. When the boy returns as an old man, the tree is now but a stump and can only offer him a place to sit and rest.`,
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                            ],
                        },
                        `, I ponder the`,
                        {
                            anchor: `forespoken monster`,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Monster at the End of This Book`,
                                            wiki: `The_Monster_at_the_End_of_This_Book:_Starring_Lovable,_Furry_Old_Grover`,
                                        },
                                    },
                                    `,`,
                                    {
                                        anchor: `Sesame Street`,
                                        wiki: `Sesame_Street`,
                                    },
                                    `'s`,
                                    {
                                        anchor: `Grover`,
                                        wiki: `Grover`,
                                    },
                                    `tries to prevent the reader from turning to the last page of the book, fearful of the monster lying in wait. As it turns out, the only monster present at the end is Grover himself, much to his embarrassment.`,
                                ],
                            },
                        },
                        `at the end of this`,
                        {
                            anchor: `book of yours`,
                            card: {
                                description: [
                                    `Like Grover, I was trapped inside a self-referential work, hoping to shape in real time the outcome toward which I was being relentlessly thrust. But unlike Grover, I had an inkling of who the monster at the end of`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail`,
                                    },
                                    `might turn out to be.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:28:20.96`,
                    lyric: [
                        `And you, for a future,`,
                        {
                            anchor: `sold your whole fortune`,
                            card: {
                                description: [
                                    `My parents lament that my opportunism has made me a future "soldier of" fortune, or`,
                                    {
                                        anchor: `mercenary`,
                                        wiki: `Mercenary`,
                                    },
                                    `, as I squander everything good I have with Sita to chase unsavory and foolhardy pursuits.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:32:00.97`,
                    lyric: [
                        `to live neutered, blissfully`,
                        {
                            anchor: `and orphaned`,
                            card: {
                                description: [
                                    `Being "`,
                                    {
                                        anchor: `endorphined`,
                                        wiki: `Endorphins`,
                                    },
                                    `" in my perpetually drunken state allows me to behave as a virtual orphan. I can live in denial of having parents whose expectations I fail to meet.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:36:18.46`,
                    lyric: [
                        {
                            anchor: `Upon purchase of a queen's ship`,
                            card: {
                                description: [
                                    `RI Research promised I would rise above the bullies once a spaceship was funded by my payments. And so I learned to bide my time building toward and awaiting corrective justice. I was like "a pawn" in`,
                                    {
                                        anchor: `chess`,
                                        wiki: `Chess`,
                                    },
                                    `that "perches over queenship" as it clambers toward the opposite end of the chessboard.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                        {
                            anchor: `earth right now your tourist store`,
                            card: {
                                description: `My mother tried to instill Buddhist ideals, even as she filled my head with visions of being a great artist. The mail-order cult then piled on with the belief that I was only a visitor to this planet. The lasting effect on my psyche was that I became unaffected by earthly concerns, preferring instead to work tirelessly "to restore" my "birthright" of artistic renown.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `My original hope for some of these puns was for listeners to believe they'd stumbled upon a`,
                        {
                            anchor: `mondegreen`,
                            wiki: `Mondegreen`,
                        },
                        `. But upon further reflection, they would realize the mishearing made too much sense to be inadvertent, and was likely an`,
                        {
                            anchor: `Easter egg`,
                            wiki: `Easter_egg_(media)`,
                        },
                        `instead.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:41:18.47`,
                    lyric: `But distracted by your brother's tantrums,`,
                },
                {
                    mixTime: `0:45:10.97`,
                    lyric: `we couldn't imagine your mail-order cult,`,
                },
                {
                    mixTime: `0:48:20.96`,
                    lyric: [
                        `till they called,`,
                        {
                            anchor: `suspecting you of huffing`,
                            card: {
                                description: [
                                    {
                                        anchor: `Inhalants`,
                                        wiki: `Inhalant`,
                                    },
                                    `were the scary youth trend of my middle school years. To remain unresponsive to the bullies' threats, I had to be slow to respond in general. Eventually, someone thought I must be huffing paint, and I got called into the principal's office.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:52:00.97`,
                    lyric: [
                        `then we caught you`,
                        {
                            anchor: `stuffing twenties`,
                            card: {
                                description: [
                                    `Since I had`,
                                    {
                                        anchor: `pen pals`,
                                        wiki: `Pen_pal`,
                                    },
                                    `as a child, my parents didn't think anything of the random envelopes I was mailing out. But after speaking to the principal, my mother grew suspicious and opened one of them to find a wad of cash inside.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `in an envelope…`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The`,
                        {
                            anchor: `Kinks`,
                            wiki: `The_Kinks`,
                        },
                        `'`,
                        {
                            anchor: `Village Green Preservation Society`,
                            wiki: `The_Kinks_Are_the_Village_Green_Preservation_Society`,
                        },
                        `was my model for this album. As such, my songs all had to be memorable pop tunes, contain zero filler, and represent a diversity of musical styles. And each one would clock in at three minutes or so, with none over four. While there was no one-to-one mapping, this song was clearly the "`,
                        {
                            anchor: `Wicked Annabella`,
                            wiki: `Wicked_Annabella`,
                        },
                        `" of the bunch. So I borrowed its sound of low notes played on distorted electric guitars.`,
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:55:23.47`,
                    lyric: [
                        `So do you believe`,
                        {
                            anchor: `your hamartia`,
                            cards: [
                                {
                                    description: [
                                        `In`,
                                        {
                                            anchor: `Greek drama`,
                                            wiki: `Theatre_of_ancient_Greece`,
                                        },
                                        `,`,
                                        {
                                            anchor: `hamartia`,
                                            wiki: `Hamartia`,
                                        },
                                        `is the tragic flaw that leads to a hero's downfall. Here, my parents ask if I recognize the telltale signs that point to mine. (I've since learned there are four syllables in the word. But my English teacher pronounced it as I have here, so I plead miseducation.)`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `My parents also allude to my former belief that I was born from the stars, or as they put it, "a Martian."`,
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `now?`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
                subVerseType: RHYME,
                sideCardType: BACKING,
            },
            mainVerses: [
                {
                    mixTime: `1:03:03.06`,
                    lyric: `Mowed down by the tides,`,
                },
                {
                    mixTime: `1:05:03.88`,
                    lyric: `and inundated under in unfair fights,`,
                },
                {
                    mixTime: `1:08:23.32`,
                    lyric: [
                        `you made a`,
                        {
                            anchor: `bunker that shuts airtight`,
                            card: {
                                description: `I learned early on to deal with problems by locking myself away, both physically and mentally. Then once sheltered, I could calmly and patiently study my situation to plot the best way forward.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `1:11:18.46`,
                    lyric: {
                        isItalic: true,
                        lyric: `to seal out their floods.`,
                    },
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: `Oh, bastard ingrate!`,
                    },
                },
                {
                    lyric: {
                        isItalic: true,
                        lyric: `Some nights you wake,`,
                    },
                },
                {
                    lyric: {
                        isItalic: true,
                        lyric: `climb and survey`,
                    },
                },
                {
                    lyric: {
                        isItalic: true,
                        lyric: `the houses you've betrayed.`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `As silly as the original lyrics for the chorus were, I liked them enough to keep them as a vocal`,
                        {
                            anchor: `counter-melody`,
                            wiki: `Counter-melody`,
                        },
                        `. The original counter-melody, which I'd planned to play on guitar, was then given to the lead vocals, for which I wrote new lyrics.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: CHORUS,
                subVerseType: RHYME,
                sideCardType: BACKING,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:16:02.26`,
                    lyric: [
                        `But then, my`,
                        {
                            anchor: `little prince`,
                            card: {
                                description: [
                                    {
                                        anchor: `Antoine de Saint-Exupéry`,
                                        wiki: `Antoine_de_Saint-Exupéry`,
                                    },
                                    `'s`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Little Prince`,
                                            wiki: `The_Little_Prince`,
                                        },
                                    },
                                    `is about a young prince who lives with a rose on a small planet. On his journey to Earth, the prince keenly observes the foibles of the adults he encounters. Then during his stay, a fox teaches him a poignant lesson on love and loss.`,
                                ],
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:18:03.06`,
                    lyric: [
                        `safe on your`,
                        {
                            anchor: `tiny planet`,
                            card: {
                                description: `Like the little prince, I was also a visitor from the stars who once saw this world through guileless eyes.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `where none else fit,`,
                    ],
                },
                {
                    mixTime: `1:21:22.52`,
                    lyric: [
                        `you finally granted their`,
                        {
                            anchor: `nutshells are rigged`,
                            card: {
                                description: [
                                    `The classic`,
                                    {
                                        anchor: `shell game`,
                                        wiki: `Shell_game`,
                                    },
                                    `is a swindle in which a pea is placed under one of three nutshells that are then shuffled in plain view. Having recognized life to be an endless series of shell games, I vowed never to get suckered again. And knowing now that the pea gets misplaced through`,
                                    {
                                        anchor: `sleight of hand`,
                                        wiki: `Sleight_of_hand`,
                                    },
                                    `, I could even do some grifting myself.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `1:24:17.66`,
                    lyric: {
                        isItalic: true,
                        lyric: `and healed round your grudge…`,
                    },
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: {
                            anchor: `Scattered your beans`,
                            card: {
                                description: [
                                    `The nightmare began with me scattering magic beans all around the neighborhood. It was clearly based on the English`,
                                    {
                                        anchor: `fairy tale`,
                                        wiki: `Fairy_tale`,
                                    },
                                    `"`,
                                    {
                                        anchor: `Jack and the Beanstalk`,
                                        wiki: `Jack_and_the_Beanstalk`,
                                    },
                                    `," though I'm not sure why.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    },
                },
                {
                    lyric: {
                        isItalic: true,
                        lyric: `over suburbia…`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `1:27:12.79`,
                    lyric: [
                        `Now suddenly dressed to play, you`,
                        {
                            anchor: `drowned your stutter`,
                            card: {
                                description: `Sometime in middle school I developed a stammer, perhaps as an unconscious way to buy time for collecting my thoughts. In college, I found that alcohol made it disappear.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:31:03.94`,
                    lyric: [
                        `smugly prepped to`,
                        {
                            anchor: `haze the new latecomers`,
                            card: {
                                description: [
                                    `Some organizations put new recruits through degrading`,
                                    {
                                        anchor: `hazing rituals`,
                                        wiki: `Hazing`,
                                    },
                                    `. After enduring such abuse for so long myself, I finally conceded that I could't have toughened up any other way. And now I had no qualms about dishing it out to others.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:35:08.94`,
                    lyric: `This scheming crackpot vowed to clean the jackpot out this time around…`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I wanted to mimic`,
                        {
                            anchor: `Radiohead`,
                            wiki: `Radiohead`,
                        },
                        `guitarist`,
                        {
                            anchor: `Jonny Greenwood`,
                            wiki: `Jonny_Greenwood`,
                        },
                        `'s`,
                        {
                            anchor: `tremolo`,
                            wiki: `Tremolo`,
                        },
                        `picking on the song "Airbag" from their album`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `OK Computer`,
                                wiki: `OK_Computer`,
                            },
                        },
                        `. But as a left-hander who plays right-handed, I've always struggled with`,
                        {
                            anchor: `alternate picking`,
                            wiki: `Alternate_picking`,
                        },
                        `. So I recorded several takes of steady eighth notes on the banjo, each one offset further in the mix by a fraction of a beat. In the last few measures they separate in the balance, like a rope fraying at one end.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:41:16.44`,
                    lyric: [
                        `But have you heard, my beloved`,
                        {
                            anchor: `Rama king`,
                            properNoun: true,
                            cards: [
                                {
                                    description: `My parents might be calling me a "drama" king, in a subtle dig that everything I do is an attention-seeking act.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        {
                                            anchor: `Rama`,
                                            wiki: `Rama`,
                                        },
                                        `is an avatar of the Hindu god`,
                                        {
                                            anchor: `Vishnu`,
                                            wiki: `Vishnu`,
                                        },
                                        `and the hero of the`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Ramayana`,
                                                wiki: `Ramayana`,
                                            },
                                        },
                                        `, an epic poem of ancient India. The epic recounts the marriage of Rama to`,
                                        {
                                            anchor: `Sita`,
                                            wiki: `Sita`,
                                        },
                                        `, daughter of the earth, and his battle to rescue her after she was abducted by the demon king`,
                                        {
                                            anchor: `Ravana`,
                                            wiki: `Ravana`,
                                        },
                                        `.`,
                                    ],
                                },
                            ],
                        },
                        `, the`,
                        {
                            anchor: `testifiers' lore`,
                            card: {
                                description: [
                                    `After slaying Ravana, Rama made Sita walk through`,
                                    {
                                        anchor: `sacrificial flames`,
                                        wiki: `Trial_by_ordeal`,
                                    },
                                    `to prove she'd kept chaste throughout her abduction. Sita complied and escaped from this "test of fire" unharmed.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
                {
                    mixTime: `1:47:23.94`,
                    lyric: [
                        `A`,
                        {
                            anchor: `nation paused`,
                            card: {
                                description: [
                                    `In 1987, a`,
                                    {
                                        anchor: `television serial`,
                                        wiki: `Ramayan_(1987_TV_series)`,
                                    },
                                    `based on the`,
                                    {
                                        isItalic: true,
                                        lyric: `Ramayana`,
                                    },
                                    `began to broadcast throughout India. Each week, street markets and train stations came to a standstill as so many people dropped what they were doing to glue themselves to the closest television screen.`,
                                ],
                            },
                        },
                        `to watch you`,
                        {
                            anchor: `fail your Sita`,
                            card: {
                                description: `Modern audiences may find it disgraceful that Rama's first act upon reuniting with Sita was to demand proof of her purity. I feel similarly when looking back on my need to be the more sexually experienced partner in the relationship. It baffles me why I couldn't just be grateful for whatever circumstances needed to happen before Sita finally chose me.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `on`,
                        {
                            anchor: `repeat forevermore`,
                            card: {
                                description: `As I was making this album, a thought occurred to me. Like Rama, I too was now doomed to repeat my failures, as the story of how I betrayed my Sita would be endlessly retold.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `!`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:54:26.44`,
                    lyric: `Did you find a rival in the goddess you once sought as prize—`,
                },
                {
                    mixTime: `2:00:29.55`,
                    lyric: [
                        `your idol who riled you when you saw that you`,
                        {
                            anchor: `two were tied`,
                            card: {
                                description: `While Sita had hoped for us to be tied in a matrimonial sense, I chafed that we were also tied in a competitive sense. Between the two of us, I had fewer past romances to speak of, and this felt like a threat.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `2:07:01.98`,
                    lyric: [
                        `With bride you bridled in this perfect`,
                        {
                            // NOTE: I changed "duel" to "dual" here.
                            anchor: `dual match`,
                            card: {
                                description: `To onlookers, Sita and I may have seemed like the perfect fit for each other. But to me, our relationship was a zero-sum "duel" match that only one of us could win.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:13:16.57`,
                    lyric: [
                        `and so one night you`,
                        {
                            anchor: `chalked the sidewalks`,
                            card: {
                                description: `One night, my friends and I got drunk and decided to tag the streets with fluorescent sidewalk chalk. Since I didn't want anyone to crowd out my artwork, I ran ahead of the group.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `slurring`,
                        {
                            anchor: `Valmiki's chant`,
                            properNoun: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Valmiki`,
                                        wiki: `Valmiki`,
                                    },
                                    `, the renowned author of the`,
                                    {
                                        isItalic: true,
                                        lyric: `Ramayana`,
                                    },
                                    `, began his early life as Ratnakar, a highway bandit. Desperate to repent, he sought counsel from a passing sage, who told him to recite the holy name of Rama. Ratnakar was so sinful, however, that he could only repeat the word`,
                                    {
                                        isItalic: true,
                                        lyric: `mara`,
                                    },
                                    `, or "death." Still, the grace of Rama caused the syllables to shift over time, until Ratnakar was finally chanting Rama's name.`,
                                ],
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:20:01.17`,
                    lyric: [
                        `When`,
                        {
                            anchor: `wakened from the siren`,
                            cards: [
                                {
                                    description: `Having lost sight of the group, I ended up passing out on the sidewalk. An ambulance siren jolted me awake.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In Greek mythology, the "`,
                                        {
                                            anchor: `Sirens`,
                                            wiki: `Siren_(mythology)`,
                                        },
                                        `" were beautiful women whose enchanting songs would lull sailors and lead them to crash against the rocky shores. But just as`,
                                        {
                                            anchor: `Odysseus`,
                                            wiki: `Odysseus`,
                                        },
                                        `resisted by having himself tied to the mast, I blocked out the siren song of Sita's love by tying myself to my artistic ambitions.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `, you found spelled out in`,
                        {
                            anchor: `dead ants`,
                            cards: [
                                {
                                    description: `My sidewalk art had killed off some ants, whose dead bodies formed an outline around what I'd drunkenly scrawled in chalk.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `While chanting Rama's name, Ratnakar's concentration was so intense that an`,
                                        {
                                            anchor: `anthill`,
                                            wiki: `Ant_colony`,
                                        },
                                        `formed over him, and he remained undisturbed for years. And so he came to be known as Valmiki, from the Sanskrit word for "anthill."`,
                                    ],
                                },
                            ],
                        },
                        `:`,
                        {
                            anchor: `_____`,
                            card: {
                                description: `And what I'd scrawled in chalk was… Mara's name. No real cliffhanger here. "M" just set a precedent for me to be gun-shy about mentioning her anywhere in my lyrics.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subVerseType: RESPONSE,
            },
            mainVerses: [
                {
                    mixTime: `2:26:15.77`,
                    lyric: [
                        `No`,
                        {
                            anchor: `well worn sari`,
                            cards: [
                                {
                                    description: [
                                        `On special occasions, Sita would wear a`,
                                        {
                                            anchor: `sari`,
                                            wiki: `Sari`,
                                        },
                                        `. They looked really good on her.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Sita's "well-worn sorries" in time grew tiresome, since only one of us needed to beg the other for forgiveness, and we both knew it wasn't her.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `could sway you from a`,
                        {
                            anchor: `fairer marathon`,
                            cards: [
                                {
                                    description: [
                                        `The endless one-upmanship wasn't just petty. It was exhausting to counter every perceived slight with one of my own. I wanted life to be like a`,
                                        {
                                            anchor: `marathon`,
                                            wiki: `Marathon`,
                                        },
                                        `that rewards patience and resolve, the traits I possessed in spades.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `"Marathon" sounds like Mara's full name spoken with a lisp.`,
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `!`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `2:32:09.42`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `Your`,
                            {
                                anchor: `dulling gold`,
                                card: {
                                    description: `My once treasured bond with Sita had lost its luster, even if only by my neglect.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            },
                            `now gone…`,
                        ],
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subVerseType: RESPONSE,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:33:29.42`,
                    lyric: [
                        `Stubborn`,
                        {
                            anchor: `harpies`,
                            cards: [
                                {
                                    description: [
                                        `In Greek mythology, the`,
                                        {
                                            anchor: `harpies`,
                                            wiki: `Harpy`,
                                        },
                                        `were female monsters with human heads and birdlike bodies. In common parlance, a harpy is a nagging woman.`,
                                    ],
                                },
                                {
                                    wormhole: `harpies`,
                                },
                            ],
                        },
                        `can't draw this contest`,
                        {
                            anchor: `to be one`,
                            card: {
                                description: `Or else, a contest to be "won."`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `!`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `2:38:29.42`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `…`,
                            {
                                anchor: `traded in`,
                                card: {
                                    description: `Like shiny new "bronzes" placed next to a gold trophy on the shelf, these other women were never more desirable than Sita in hindsight. They thrilled me only because I'd won them recently.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true,
                                    },
                                },
                            },
                            `for the`,
                            {
                                anchor: `trophy blondes`,
                                cards: [
                                    {
                                        description: `To add insult to injury, the women I left Sita for were often white, which bothered her greatly. In my defense, this wasn't by design. But seeing her loss as my gain, I let her believe the worst.`,
                                        dotKeys: {
                                            [BACKSTORY]: true,
                                        },
                                    },
                                    {
                                        wormhole: `trophy_bronze`,
                                    },
                                ],
                            },
                            `.`,
                        ],
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
                subVerseType: RHYME,
                sideCardType: BACKING,
            },
            mainVerses: [
                {
                    mixTime: `2:41:14.41`,
                    lyric: `Oh child of mine,`,
                },
                {
                    mixTime: `2:43:15.22`,
                    lyric: [
                        `what's left of what these`,
                        {
                            anchor: `faces you flip override`,
                            card: {
                                description: `My mother would sometimes ask what happened to the playful little boy she once knew. I think I just learned early on that for every given situation, there's an optimal person to be, and the key is to juggle those various personalities. So it made no sense to keep the original lying around if it served no other purpose.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:47:04.68`,
                    lyric: [
                        `and all these`,
                        {
                            anchor: `pages you've ripped`,
                            card: {
                                description: `My parents bemoan my eagerness to ditch past comforts for present ambitions, as if I'm tearing out pages from a scrapbook to free up space for new inserts.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `from your spine`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `2:49:29.82`,
                    lyric: {
                        isItalic: true,
                        lyric: `to find a cleared path`,
                    },
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: `Through tatters of sky,`,
                    },
                },
                {
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `their`,
                            {
                                anchor: `sun tinkles light`,
                                card: {
                                    description: `In the nightmare, I now ruled the neighborhood from above as a tyrant. I would shower my subjects in urine, which they lapped up as their sole means of subsistence. Now that I think about it, my brain was probably telling me to wake up and use the bathroom.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                            },
                        ],
                    },
                },
                {
                    lyric: {
                        isItalic: true,
                        lyric: `in needling chimes`,
                    },
                },
                {
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `that`,
                            {
                                anchor: `weave through the vines`,
                                card: {
                                    description: `The magic beans had sprouted into thick, twisting vines that blocked out the sky as far as my helpless subjects could see.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            },
                            `,`,
                        ],
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
                subVerseType: RHYME,
                sideCardType: BACKING,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:54:13.60`,
                    lyric: `in life's unbearable maze?`,
                },
                {
                    mixTime: `2:56:14.41`,
                    lyric: `Then once for all to render it all fail-safe,`,
                },
                {
                    mixTime: `3:00:03.88`,
                    lyric: [
                        `your thoughts`,
                        {
                            anchor: [
                                `surrendered for`,
                                {
                                    isItalic: true,
                                    lyric: `Bobtail`,
                                },
                                `'s sake`,
                            ],
                            card: {
                                description: `My next five-year plan, like the one before it, was meant to dramatically improve my life through an overhaul of the underlying system. Since it couldn't be left half completed, there was no point in second-guessing its logic once the work was already in progress.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `3:02:29.02`,
                    lyric: {
                        isItalic: true,
                        lyric: `to five-year plans.`,
                    },
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: `cast on your peons,`,
                    },
                },
                {
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `old and subservient`,
                                cards: [
                                    {
                                        description: `It wasn't until college that I understood the sacrifices my parents made for me and my siblings to lead better lives than their own. But this awareness came about through coursework rather than my own lived experiences, which just added to my guilt.`,
                                        dotKeys: {
                                            [BACKSTORY]: true,
                                        },
                                    },
                                    {
                                        description: `Among those I ruled over were my parents, now feeble and senile after a lifetime of following their "son's" bidding.`,
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [PUN]: true,
                                        },
                                    },
                                ],
                            },
                            `.`,
                        ],
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: CODA,
                sideCardType: BACKING,
                sideSubCardType: RESPONSE,
            },
            mainVerses: [
                {
                    mixTime: `3:05:24.14`,
                    lyric: [
                        `Now son, before you embark on your`,
                        {
                            anchor: [
                                `great`,
                                {
                                    isItalic: true,
                                    lyric: `Bildungsroman`,
                                },
                            ],
                            card: {
                                description: [
                                    `A`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Bildungsroman`,
                                            wiki: `Bildungsroman`,
                                        },
                                    },
                                    `is a literary coming-of-age story, of which James Joyce's`,
                                    {
                                        isItalic: true,
                                        lyric: `A Portrait of the Artist as a Young Man`,
                                    },
                                    `is a notable example. My conceit for`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail`,
                                    },
                                    `was to push the boundaries of this genre into the musical realm.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `3:12:20.90`,
                    lyric: [
                        `shouldn't you first be sure you've`,
                        {
                            anchor: `finally become someone`,
                            cards: [
                                {
                                    description: [
                                        `But a key component of the`,
                                        {
                                            isItalic: true,
                                            lyric: `Bildungsroman`,
                                        },
                                        `is the main character's moral and psychological growth from youth to adulthood. Without it, there is no story to be told, a point that my parents hint at here.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `finally_become_someone`,
                                },
                            ],
                        },
                        `?`,
                    ],
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `Rama`,
                                properNoun: true,
                                card: {
                                    description: `Like Valmiki as he chanted Rama's name, I desperately want to be good again.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            },
                            `, Rama…`,
                        ],
                    },
                },
            ],
            sideSubCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `…`,
                            {
                                anchor: `Maranatha`,
                                card: {
                                    description: [
                                        `But in my chant, the syllables gradually shift to form the holy name of Mara. And while Valmiki embraced Eastern devotion, salvation for me lies in the embrace of Western women. And so my chant ends on a phrase of Western faith. Occurring once in the`,
                                        {
                                            anchor: `New Testament`,
                                            wiki: `New_Testament`,
                                        },
                                        `,`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `maranatha`,
                                                wiki: `Maranatha`,
                                            },
                                        },
                                        `is`,
                                        {
                                            anchor: `Aramaic`,
                                            wiki: `Aramaic`,
                                        },
                                        `for "our Lord has come."`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                            },
                            `!`,
                        ],
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `To record the gradual shift from "Rama" to "Mara" in the backing vocals, I made a`,
                        {
                            anchor: `click track`,
                            wiki: `Click_track`,
                        },
                        `at a tempo sped up to arrive an eighth note ahead after seven measures. I then recorded multiple vocal tracks, taking breaths at different points each time. Heard together at once, they create the impression of a single uninterrupted take.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `3:20:22.26`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(electric guitar, Mara's theme)`,
                    },
                },
            ],
        },
    ],
}
