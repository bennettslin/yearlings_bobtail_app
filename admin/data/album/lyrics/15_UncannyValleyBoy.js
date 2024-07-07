import {
    AFTERWORD,
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
import { REST, REVIEW, REVISE } from '../../../containers/Annotations/constants/todos'

export default {
    title: 'Uncanny Valley Boy',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Acoustic guitar in measure 1`,
    mixStartTime: `0:01:18.46`,
    playerStartTime: 2722.629,
    overview: `Upon learning of my brother's autism, my parents were too harried to notice I was being bullied at school; in guilt, they later indulged every whim I had to find my own path. But it didn't assure them that I failed to mature as I got older— and they were especially crushed when I first left Sita, whom they adored. Naturally, I wasn't happy to disappoint them. Still, I had a master plan to follow, and I wasn't about to change my ways.`,
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
                            `theorizes that as human replicas take on more lifelike characteristics, we grow further repulsed, insofar as they remain less than perfectly convincing to us. And as I grew older while remaining less than convincing as a grownup, it was reasonable to ask if this "Valley boy" now drew the same revulsion.`,
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
                            `stereotype.`,
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
                todo: REVIEW,
                card: {
                    description: `I wrote the music for this song a while back after waking from a horrid nightmare. The premise seemed laughable by day's end, however, and so I shelved it. But years later, I realized that its gloomy chords and abrupt tempo changes would work well for a song about a nightmarish version of my parents.`,
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
                                        `, my parents invite me on a magical night journey. Soon I'll witness the ordeals of my past, my self-serving ways at present, and the emotional devastation to come of it all.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `To "wax poetic" is to become eloquent in speech. And so my parents borrow this expression ironically, to mock the highbrow persona I've created.`,
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
                                    `is a children's book about a tree's nurturing love for a boy. As the boy grows into a man, the tree's gifts to him become increasingly self-sacrificing in nature. The story is understood by some to be an allegory for codependent relationships.`,
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
                                    description: `In their claim to be stumped, my parents pretend to be oblivious to the outcome of my story.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: `Finally, the tree sacrifices herself completely by letting the boy make a boat from her trunk. When the boy returns as an old man, the tree is now but a stump and can only offer him a seat to rest upon.`,
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
                                    `, Sesame Street's Grover tries to prevent the reader from turning to the last page of the book, fearful of the monster lying in wait. As it turns out, the only monster present at the end is Grover himself, much to his embarrassment.`,
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
                            todo: REVIEW,
                            card: {
                                description: [
                                    `Being perpetually drunk, or "`,
                                    {
                                        anchor: `endorphined`,
                                        wiki: `Endorphins`,
                                    },
                                    `," allows me to live as a virtual orphan, as I can now deny having parents whose expectations I fail to meet.`,
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
                                description: `RI Research promised that I could rise above the bullies once a spaceship was funded by my payments. And so I learned to bide my time, building toward and awaiting corrective justice. I was like "a pawn" in chess that "perches over queenship" as it clambers toward the opposite end of the chessboard.`,
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
                                description: `My mother enthralled me with visions of being a great artist, even as she instilled Buddhist ideals of renouncing materialism; the mail-order cult then told me I was a mere visitor to this planet. And so a belief formed in my head that I must work tirelessly "to restore" my "birthright" of artistic renown, unaffected by earthly concerns.`,
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
                todo: REST,
                problem: `Still not 100% confident on tenses.`,
                card: {
                    description: [
                        `The idea behind the puns in this stanza was for listeners to think they heard a`,
                        {
                            anchor: `mondegreen`,
                            wiki: `Mondegreen`,
                        },
                        `. Then upon reflection, they'd realize the mishearing made too much sense to be inadvertent, and was likely an`,
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
                            cards: [
                                {
                                    description: `To defend against the bullies, I would react slowly to their threats— which then forced me to react slowly to anyone in general. At some point, a classmate must have believed I was huffing paint, and this is when I got called into the principal's office.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        {
                                            anchor: `Inhalants`,
                                            wiki: `Inhalant`,
                                        },
                                        `were the scary youth trend of my middle school years.`,
                                    ],
                                },
                            ],
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
                        `I used the`,
                        {
                            anchor: `Kinks`,
                            wiki: `The_Kinks`,
                        },
                        `'`,
                        {
                            anchor: `Village Green Preservation Society`,
                            wiki: `The_Kinks_Are_the_Village_Green_Preservation_Society`,
                        },
                        `as a rough guide for this album, which meant each song had to feature well-crafted musical hooks; represent a different musical style; and clock in at around three minutes. While there's no one-to-one mapping, this song is clearly the "`,
                        {
                            anchor: `Wicked Annabella`,
                            wiki: `Wicked_Annabella`,
                        },
                        `" of the bunch. So I went with the same feel of low notes played on crunchy electric guitars.`,
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
                            anchor: [
                                `your`,
                                {
                                    isItalic: true,
                                    lyric: `hamartia`,
                                },
                            ],
                            todo: REVIEW,
                            cards: [
                                {
                                    description: [
                                        `In Greek drama,`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `hamartia`,
                                                wiki: `Hamartia`,
                                            },
                                        },
                                        `is the tragic flaw that leads to a hero's downfall. And so my parents ask if I see the telltale signs that point to mine, while alluding to my past belief of being born from the stars— or, as they put it, "a Martian."`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `I've since learned that`,
                                        {
                                            isItalic: true,
                                            lyric: `hamartia`,
                                        },
                                        `has four syllables. But my English teacher in middle school pronounced it as I have here, so I plead miseducation.`,
                                    ],
                                    dotKeys: {
                                        [SONGCRAFT]: true,
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
                todo: REST,
                problem: `It seems like there's a way to phrase this that's both more clear and less convoluted. But I've already spent long enough on it as it is.`,
                card: {
                    description: [
                        `As silly as the original lyrics for the chorus were, I liked them enough to keep them as a vocal`,
                        {
                            anchor: `counter-melody`,
                            wiki: `Counter-melody`,
                        },
                        `. So I took the original counter-melody, which I'd intended to play on guitar, and gave it to the lead vocals, for which I then wrote new lyrics.`,
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
                                    `is a swindle in which a pea is placed under one of three nutshells that are then shuffled in plain view. Having recognized life to be an endless series of shell games, I vowed never to get suckered again. And knowing now that the pea gets misplaced through sleight of hand, I could even do some grifting myself.`,
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
                                    `The nightmare began with me scattering magic beans all around the neighborhood. It was clearly based on the English fairy tale "`,
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
                                description: `I developed a stammer in middle school, perhaps as an unconscious way to buy time for collecting my thoughts. Then in college, I found that alcohol made it disappear.`,
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
                                    `Some groups put newcomers through`,
                                    {
                                        anchor: `degrading rituals`,
                                        wiki: `Hazing`,
                                    },
                                    `to toughen them up. And having dealt with such abuse for so long, I finally conceded that I wouldn't have toughened up any other way either. But now I had no misgivings about dishing out the same abuse to others…`,
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
                            todo: REST,
                            problem: `In the first card, the "subtle jab" phrase seems wordy. There might be some benefit to playing around with the order of phrases in that sentence to make it flow more smoothly. And in the second card, I still don't like the two "her"s in a row.`,
                            cards: [
                                {
                                    description: `My parents might be calling me a "drama" king, in a subtle jab that everything I do is an attention-seeking act.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Ramayana`,
                                                wiki: `Ramayana`,
                                            },
                                        },
                                        `is an epic poem of ancient India that tells the life story of`,
                                        {
                                            anchor: `Rama`,
                                            wiki: `Rama`,
                                        },
                                        `, an avatar of the Hindu god`,
                                        {
                                            anchor: `Vishnu`,
                                            wiki: `Vishnu`,
                                        },
                                        `. It recounts his marriage to`,
                                        {
                                            anchor: `Sita`,
                                            wiki: `Sita`,
                                        },
                                        `, the goddess of devotion, and his battles to rescue her after her abduction by the demon king`,
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
                                description: `After slaying Ravana, Rama made Sita walk through sacrificial flames to prove that she'd stayed chaste throughout her abduction. Sita complied and escaped from this "test of fire" unharmed.`,
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
                            todo: REST,
                            problem: `Not entirely comfortable with the exaggeration.`,
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
                                    `was broadcast across India. For an hour each week, all the shops and train stations would be deserted as the entire population stayed at home, glued to their televisions.`,
                                ],
                            },
                        },
                        `to watch you`,
                        {
                            anchor: `fail your Sita`,
                            todo: REVIEW,
                            card: {
                                description: `Modern audiences may find it disgraceful that Rama's first act upon reuniting with Sita was to demand proof of her chastity. And when I look back on my own relationship, I feel the same way about my need to be the more sexually experienced partner. It baffles me why I couldn't just be grateful for whatever needed to happen first before Sita finally chose me.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `on`,
                        {
                            anchor: `repeat forevermore`,
                            card: {
                                description: `As I was making this album, a thought occurred to me: Like Rama, I too am now doomed to repeat my mistakes, as the story of how I betrayed my Sita shall be endlessly retold— and thus, endlessly relived.`,
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
                                description: `While Sita hoped for us to be tied in a matrimonial sense, I chafed to be tied in a competitive sense. Between the two of us, I had fewer past romances to speak of, and this felt like a threat.`,
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
                                description: `To onlookers, Sita and I seemed like the perfect fit for each other. But to me, our relationship was a zero-sum "duel" that only one of us could win.`,
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
                                description: `One evening my friends and I got drunk and decided to tag the streets with fluorescent sidewalk chalk.`,
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
                                    `, the author of the`,
                                    {
                                        isItalic: true,
                                        lyric: `Ramayana`,
                                    },
                                    `, began his early life as Ratnakar, a highway bandit. Eager to repent, he sought counsel one day from a passing sage, who told him to recite the holy name of Rama. But Ratnakar was so sinful, he could only say the word`,
                                    {
                                        isItalic: true,
                                        lyric: `mara`,
                                    },
                                    `, or "death," over and over. Still, the grace of Rama caused the syllables to shift over time, until finally Ratnakar was chanting Rama's name.`,
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
                                    description: `Not wanting anyone to crowd out my artwork, I run ahead of the group— only to pass out where no one can find me. Hours later, an ambulance siren jolts me awake.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In Greek mythology, the "`,
                                        {
                                            anchor: `Sirens`,
                                            wiki: `Siren_(mythology)`,
                                        },
                                        `" were beautiful women whose enchanting songs would lull the passing sailors, causing them to crash against the rocky shores. But much like`,
                                        {
                                            anchor: `Odysseus`,
                                            wiki: `Odysseus`,
                                        },
                                        `, who resisted by having himself tied to a mast, I blocked out the siren song of Sita's love by tying myself to my artistic ambitions.`,
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
                                    description: [
                                        `I sit up and notice my drunken scrawls on the sidewalk, whimsically imagining what would have happened had I used`,
                                        {
                                            anchor: `ant chalk`,
                                            wiki: `Ant_chalk`,
                                        },
                                        `.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `While chanting Rama's name, Ratnakar concentrated so intensely that an anthill formed around him, allowing him to remain undisturbed for years. And thus, he came to be known as Valmiki, from the Sanskrit word for "anthill."`,
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                            ],
                        },
                        `:`,
                        {
                            anchor: `____`,
                            todo: REST,
                            problem: `Maybe I'm just not used to it, given that it's just different enough from how it was before. But I don't feel 100% confident to sign off on it.`,
                            cards: [
                                {
                                    description: `And what I've drunkenly scrawled is… Mara's name.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `This wasn't meant to be a cliffhanger. But since Mara is never directly mentioned in "M," I decided to leave her name out of the rest of the album as well.`,
                                    dotKeys: {
                                        [SONGCRAFT]: true,
                                    },
                                },
                            ],
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
                                    description: `Sita's "well-worn sorries" grew tiresome, since only one of us needed to beg the other for forgiveness— and we both knew it wasn't her.`,
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
                                    description: `The endless one-upmanship wasn't just petty; it was exhausting to counter every perceived slight with one of my own. I wanted life to be like a marathon that rewards patience and resolve— traits I possess in spades.`,
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
                                        `were female monsters with human heads and birdlike bodies. And in common parlance, a harpy is a nagging woman.`,
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
                                        description: `To add insult to injury, most of the women I left Sita for were White, which bothered her greatly. In my defense, this wasn't by design; but seeing her loss as my gain, I let her believe the worst.`,
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
                            todo: REST,
                            problem: `I think it's possible to give this some thought to make sure it says what I want to say in a really satisfying way, but that would take way more time than I've already spent.`,
                            card: {
                                description: `My mother would sometimes ask what happened to the playful little boy I'd once been— which made me wonder myself. I think I learned early on that, for every situation, there's an optimal person to be— and the key is to deftly switch between those various personas. So it made no sense to keep the original personality lying around, once it no longer served any purpose.`,
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
                                description: `My parents bemoan my eagerness to ditch past comforts for present ambitions, as if I'm tearing out pages from a photo album to free up space for new inserts.`,
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
                                todo: REVISE,
                                problem: `Still think there's a more eloquent way to say "from above as a tyrant." Two "would"s in a row.`,
                                card: {
                                    description: `In the nightmare, I ruled the neighborhood from above as a tyrant. I would shower my subjects in urine, which they would then lap up as their sole means of subsistence. Now that I think about it, my brain was probably telling me to wake up and use the bathroom.`,
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
                                    description: `The magic beans had sprouted into thick, twisting vines, blocking out the sky as far as my helpless subjects could see.`,
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
                                description: `My next five-year plan, like the one before, was meant to improve my fortunes through a dramatic overhaul of the underlying system. Since it couldn't be left half completed, there was no point in second-guessing its logic once the work was already in progress.`,
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
                                        description: `It wasn't until college that I understood the sacrifices my parents had made for me and my siblings to lead better lives than their own. But the fact that this awareness had to come about through assigned coursework, rather than my own lived experiences, only added to my guilt.`,
                                        dotKeys: {
                                            [BACKSTORY]: true,
                                        },
                                    },
                                    {
                                        description: `Among those I ruled over were my parents, now feeble after a lifetime of doing their "son's" bidding.`,
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
                                        `is the main character's moral and psychological growth from youth to adulthood. Without it, there's no story to be told— a point that my parents hint at here.`,
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
                                        `But in my chant, the syllables gradually shift to form the holy name of Mara. And while Valmiki embraced Eastern devotion, salvation for me lies in the embrace of Western women. And so my chant ends on a phrase of Western faith: Occurring once in the New Testament,`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `maranatha`,
                                                wiki: `Maranatha`,
                                            },
                                        },
                                        `is Aramaic for "our Lord has come."`,
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
                        `at a tempo sped up to arrive one eighth note ahead after seven measures. I then recorded multiple vocal tracks, taking breaths at different points each time. Heard together at once, they create the impression of a single uninterrupted take.`,
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
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                cards: [
                    {
                        description: [
                            `The final movement of Beethoven's`,
                            {
                                anchor: `last major work`,
                                wiki: `String_Quartet_No._16_(Beethoven)`,
                            },
                            `begins with a bass theme that asks, "Must it be?"— followed by a treble theme that responds, "It must be!"`,
                        ],
                    },
                    {
                        description: [
                            `After Ana and Jacob left the band, it didn't feel right to keep referring to myself as the Yearlings. And with the Web gaining in usage, I wanted a new name that would always be first in search results. So I decided to combine two random words… but all I could think of was "Bobtail Yearlings"… which, for symmetry's sake, would make the album "`,
                            {
                                isItalic: true,
                                lyric: `Yearling's Bobtail`,
                            },
                            `." Then I realized that while one`,
                            {
                                anchor: `acronym`,
                                wiki: `Acronym`,
                            },
                            `asks, "Why be?"— the other responds, "Be why!"— and this felt like`,
                            {
                                anchor: `Beethoven`,
                                wiki: `Ludwig_van_Beethoven`,
                            },
                            `giving his approval.`,
                        ],
                        dotKeys: {
                            [AFTERWORD]: true,
                        },
                    },
                ],
            },
        },
    ],
}
