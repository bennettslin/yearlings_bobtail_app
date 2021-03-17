import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../app/constants/dots'

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
} from '../../../../app/constants/lyrics'

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
                todo: true,
                cards: [
                    {
                        description: [
                            `Growing up in the San Fernando Valley in the 80s meant that you represented the region that popularized the`,
                            {
                                anchor: `Valley girl`,
                                wiki: `Valley_girl`,
                            },
                            `stereotype, whether or not you embodied it yourself.`,
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                        },
                    },
                    {
                        description: [
                            `The`,
                            {
                                anchor: `uncanny valley`,
                                wiki: `Uncanny_valley`,
                            },
                            `is a theory that human replicas only repulse us further as they grow more lifelike, insofar as they remain less than convincingly so. And as I grew older while remaining less than convincing as a grownup, I had to wonder if this Valley boy now elicited a similar revulsion from others.`,
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [PUN]: true,
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
                todo: true,
                card: {
                    description: `I first wrote the music heard here a long while back, upon waking from a horrid nightmare that I badly needed to retell. I quickly shelved it after all my attempts to describe the nightmare to others only elicited laughter. But years later, I realized its gloomy chords and disjointed tempo changes could be repurposed into this song, which plays out as a lecture delivered by a nightmarish version of my parents.`,
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
                            anchor: `Beta,`,
                            todo: true,
                            card: {
                                description: [
                                    `In Hindi,`,
                                    {
                                        // बेटा
                                        isItalic: true,
                                        lyric: `beta`,
                                    },
                                    `means "son." Having unequivocally taken Sita's side, my parents address me in my nightmare as an Indian parent would.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `come`,
                        {
                            anchor: `wax prophetic`,
                            todo: true,
                            cards: [
                                {
                                    description: `Of course, it's more common to "wax poetic," meaning to become eloquent in speech. But my parents use this highbrow expression ironically, as a commentary on the artificial persona that I've created.`,
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Like the ghosts in`,
                                        {
                                            anchor: `Charles Dickens's`,
                                            wiki: `Charles_Dickens`,
                                        },
                                        {
                                            anchor: `A Christmas Carol,`,
                                            wiki: `A_Christmas_Carol`,
                                        },
                                        `my parents invite me on a magical night journey to witness the ordeals of my past, my self-serving ways in the present, and the heart-rending wreckage that is yet to come of it all.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
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
                            anchor: `giving tree.`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Shel Silverstein's`,
                                        wiki: `Shel_Silverstein`,
                                    },
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Giving Tree`,
                                            wiki: `The_Giving_Tree`,
                                        },
                                    },
                                    `is a children's book about a tree's nurturing love for a boy. As the boy grows into a man, her gifts to him become increasingly self-sacrificing in nature. Many read it as an allegory for unhealthy, codependent relationships.`,
                                ],
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:23:08.46`,
                    lyric: [
                        {
                            anchor: `Stumped,`,
                            todo: true,
                            cards: [
                                {
                                    description: `The tree finally sacrifices herself completely, allowing the boy to chop down her trunk to build a boat. When the boy returns as an old man, the tree is now just a stump and can only offer him a place to sit and rest.`,
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                                {
                                    description: `In their claim to be stumped, my parents feign to be oblivious to the outcome of my story.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `I ponder the`,
                        {
                            anchor: `forespoken monster`,
                            todo: true,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Monster at the End of This Book,`,
                                            wiki: `The_Monster_at_the_End_of_This_Book:_Starring_Lovable,_Furry_Old_Grover`,
                                        },
                                    },
                                    {
                                        anchor: `Sesame Street's`,
                                        wiki: `Sesame_Street`,
                                    },
                                    {
                                        anchor: `Grover`,
                                        wiki: `Grover`,
                                    },
                                    `tries to prevent the child reader from turning to the last page of the book, fearful of the monster lying in wait. As it turns out, the only monster present at the end is Grover himself, much to his embarrassment.`,
                                ],
                            },
                        },
                        `at the end of this`,
                        {
                            anchor: `book of yours…`,
                            todo: true,
                            card: {
                                description: [
                                    `Like Grover, I was trapped inside a self-referential work, hoping to shape in real time the outcome toward which I was being relentlessly thrust. But unlike Grover, I already had an inkling of who the monster at the end of`,
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
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `I never liked being a baritone, as it always seemed weird to hear this deep, sonorous tone coming from my small frame. So in recording this album, I would alter my singing voice by channeling`,
                        {
                            anchor: `Ray Davies`,
                            wiki: `Ray_Davies`,
                        },
                        `of the`,
                        {
                            anchor: `Kinks,`,
                            wiki: `The_Kinks`,
                        },
                        `whose nasal vocals conjure the right blend of tenderness and irony. On this song, I changed it up for each section, as I liked the idea of ghosts not having any fixed way of speaking.`,
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
                            todo: true,
                            card: {
                                description: [
                                    `My parents lament that the opportunism born from my ego has made me a future`,
                                    {
                                        anchor: `"soldier of" fortune,`,
                                        wiki: `Mercenary`,
                                    },
                                    `as I squander everything good that I have now with Sita to chase unsavory and foolhardy pursuits.`,
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
                            anchor: `and orphaned.`,
                            todo: true,
                            card: {
                                description: [
                                    `Being`,
                                    {
                                        anchor: `"endorphined"`,
                                        wiki: `Endorphins`,
                                    },
                                    `in my perpetually inebriated state allows me to live like an orphan, in denial of having parents whose high expectations I fail to meet.`,
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
                    mixTime: `0:36:18.46`,
                    lyric: [
                        {
                            anchor: `Upon purchase of a queen's ship,`,
                            todo: true,
                            card: {
                                description: [
                                    `The mail-order cult had promised that I could rise above the bullies once a spaceship was acquired through my efforts. And so I learned to bide my time awaiting this corrective justice. I was like "a pawn" in`,
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
                        {
                            anchor: `earth right now your tourist store…`,
                            todo: true,
                            card: {
                                description: `My mother once filled my head with visions of being a great artist. The mail-order cult then piled on with the belief that I was merely a visitor to this planet. The net effect on my psyche was that I became unaffected by earthly concerns, spurring me to work ever more tirelessly "to restore" my "birthright" of artistic renown.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `My original hope for some of these puns was for listeners to believe they had stumbled upon a`,
                        {
                            anchor: `mondegreen,`,
                            wiki: `Mondegreen`,
                        },
                        `after reading the lyric and discovering it was not what they thought they had heard. But upon further reflection, they would realize that the mishearing made too much sense and was likely an`,
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
                            anchor: `suspecting you of huffing,`,
                            todo: true,
                            card: {
                                description: [
                                    `Inhalant abuse, or`,
                                    {
                                        anchor: `huffing,`,
                                        wiki: `Inhalant`,
                                    },
                                    `was supposedly the scary youth trend of my middle school years. By not responding when threatened, I fit the profile of someone who sniffed glue for fun, which is why I got called into the principal's office.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:52:00.97`,
                    lyric: [
                        `then we caught you`,
                        {
                            anchor: `stuffing twenties`,
                            todo: true,
                            card: {
                                description: [
                                    `I had`,
                                    {
                                        anchor: `pen pals`,
                                        wiki: `Pen_pal`,
                                    },
                                    `when I was younger, so my parents didn't think anything of the random envelopes I was mailing out. But after speaking to the principal, my mother became suspicious and opened one of them to find a wad of cash inside.`,
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
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In`,
                                        {
                                            anchor: `Greek drama,`,
                                            wiki: `Theatre_of_ancient_Greece`,
                                        },
                                        {
                                            anchor: `hamartia`,
                                            wiki: `Hamartia`,
                                        },
                                        `is the tragic flaw that leads to a protagonist's downfall. Here, my parents ask if I recognize the telltale signs pointing to mine. (I've since learned the accent is on the third syllable. But my English teacher pronounced it as I have here, so I plead miseducation.)`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `Perhaps my parents also snidely allude to my erstwhile belief that I was born from the stars. Or as they put it, that I'm "a Martian."`,
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
                            todo: true,
                            card: {
                                description: `I learned early on to deal with problems by locking myself away, both physically and mentally. Once sheltered, I could then calmly and patiently study my situation to plot the best way forward.`,
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
                    lyric: `Oh, bastard ingrate!`,
                },
                {
                    lyric: `Some nights you wake,`,
                },
                {
                    lyric: `climb and survey`,
                },
                {
                    lyric: `the houses you've betrayed.`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `As silly as the original lyrics for the chorus were, I liked them enough to keep them as a vocal`,
                        {
                            anchor: `counter-melody.`,
                            wiki: `Counter-melody`,
                        },
                        `The original counter-melody, which was to be played on guitar, then became the lead vocal line, for which I wrote new lyrics.`,
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
                            anchor: `little prince,`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Antoine de Saint-Exupéry's`,
                                        wiki: `Antoine_de_Saint-Exupéry`,
                                    },
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Little Prince`,
                                            wiki: `The_Little_Prince`,
                                        },
                                    },
                                    `is about a young prince who arrives on Earth from a distant asteroid. During his stay, the prince keenly observes the absurdities of the adult world, and in turn learns a poignant lesson on love and loss.`,
                                ],
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:18:03.06`,
                    lyric: [
                        `safe on your`,
                        {
                            anchor: `tiny planet`,
                            todo: true,
                            card: {
                                description: `Like the little prince, I was also a visitor from beyond the stars, who once saw the world at large through guileless eyes.`,
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
                            anchor: `nutshells are rigged,`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `shell game`,
                                        wiki: `Shell_game`,
                                    },
                                    `is a classic swindle in which a small ball is placed under three nutshells, which are then shuffled in plain view. Typically,`,
                                    {
                                        anchor: `sleight of hand`,
                                        wiki: `Sleight_of_hand`,
                                    },
                                    `is used to misplace the ball. Having recognized life to be an endless series of shell games, I vowed never to be suckered again. And now I could be the one to do some grifting myself.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
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
                        anchor: `Scattered your beans`,
                        todo: true,
                        card: {
                            description: [
                                `As I recall, the nightmare began with me scattering magic beans all around my neighborhood. It was clearly based on the English`,
                                {
                                    anchor: `fairy tale`,
                                    wiki: `Fairy_tale`,
                                },
                                {
                                    anchor: `"Jack and the Beanstalk,"`,
                                    wiki: `Jack_and_the_Beanstalk`,
                                },
                                `though I'm not sure why.`,
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                            },
                        },
                    },
                },
                {
                    lyric: `over suburbia…`,
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
                            anchor: `drowned your stutter,`,
                            todo: true,
                            card: {
                                description: `Sometime in middle school I developed a stammer, perhaps as an unconscious way to buy time for collecting my thoughts. In college, I found that alcohol made it disappear.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:31:03.94`,
                    lyric: [
                        `smugly prepped to`,
                        {
                            anchor: `haze the new latecomers.`,
                            todo: true,
                            card: {
                                description: [
                                    `Some organizations are infamous for the degrading`,
                                    {
                                        anchor: `hazing rituals`,
                                        wiki: `Hazing`,
                                    },
                                    `that new recruits are made to go through. Having endured such abuse for so long myself, I finally concluded that I couldn't have toughened up any other way. And now I had no qualms about doling it out to others.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:35:08.94`,
                    lyric: `This scheming crackpot vowed to clean the jackpot out this time around…`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `I wanted to recreate the`,
                        {
                            anchor: `tremolo`,
                            wiki: `Tremolo`,
                        },
                        `effect used by guitarist`,
                        {
                            anchor: `Jonny Greenwood`,
                            wiki: `Jonny_Greenwood`,
                        },
                        `on the song "Airbag" from`,
                        {
                            anchor: `Radiohead's`,
                            wiki: `Radiohead`,
                        },
                        {
                            anchor: `OK Computer.`,
                            wiki: `OK_Computer`,
                        },
                        `So I recorded several takes of steady eighth notes on the banjo, with each take offset a little further by fractions of a beat to create the impression of tremolo picking. In the last few measures they separate in the balance, like a rope fraying at its end.`,
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
                            anchor: `Rama king,`,
                            properNoun: true,
                            todo: true,
                            cards: [
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
                                                anchor: `Ramayana,`,
                                                wiki: `Ramayana`,
                                            },
                                        },
                                        `an ancient Indian epic poem. The tale recounts Rama's marriage to`,
                                        {
                                            anchor: `Sita,`,
                                            wiki: `Sita`,
                                        },
                                        `daughter of the earth, and his battle to rescue her after she was kidnapped by the demon king`,
                                        {
                                            anchor: `Ravana.`,
                                            wiki: `Ravana`,
                                        },
                                    ],
                                },
                                {
                                    description: `My parents might actually be calling me a "drama" king, a subtle dig to imply that everything I do is an act.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `the`,
                        {
                            anchor: `testifiers' lore?`,
                            todo: true,
                            card: {
                                description: [
                                    `After slaying Ravana, Rama made Sita walk through`,
                                    {
                                        anchor: `sacrificial flames`,
                                        wiki: `Trial_by_ordeal`,
                                    },
                                    `to prove she had remained chaste throughout her abduction. Sita complied and escaped from this "test of fire" unharmed.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:47:23.94`,
                    lyric: [
                        `A`,
                        {
                            anchor: `nation paused`,
                            todo: true,
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
                                    `began its broadcast throughout India. Traffic and train stations would come to a standstill each week as the country sat glued to their television screens.`,
                                ],
                            },
                        },
                        `to watch you`,
                        {
                            anchor: `fail your Sita`,
                            todo: true,
                            card: {
                                description: `Contemporary audiences tend to find it problematic that Rama's first act upon reuniting with Sita was to demand proof of her purity. But the same chauvinism is what prompted my need to be the more sexually experienced partner. I couldn't simply hold Sita with gratitude and accept whatever circumstances led up to such a moment.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `on`,
                        {
                            anchor: `repeat forevermore!`,
                            todo: true,
                            card: {
                                description: [
                                    `As I was making this album, a thought occurred to me. Like Rama, I too was now doomed to endlessly repeat my failures, as the story of how I betrayed my Sita, much like the`,
                                    {
                                        isItalic: true,
                                        lyric: `Ramayana,`,
                                    },
                                    `would forever be retold.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
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
                            anchor: `two were tied?`,
                            todo: true,
                            card: {
                                description: `While Sita had hoped for us to be tied in a matrimonial sense, I chafed that we were also tied in a competitive sense. In terms of who could look back on the most romantic partners, I didn't hold the lead, and this felt like a threat.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
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
                            anchor: `dual match,`,
                            todo: true,
                            card: {
                                description: `To onlookers, Sita and I may have seemed like two people who were the ideal fit for each other. But to me, our relationship had become a zero-sum "duel" match that only one of us could win.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:13:16.57`,
                    lyric: [
                        `and so one night you`,
                        {
                            anchor: `chalked the sidewalks`,
                            todo: true,
                            card: {
                                description: `One night, my friends and I got drunk and decided to tag the streets with fluorescent sidewalk chalk. Since I didn't want anyone to crowd out my artwork, I ran ahead of the group.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `slurring`,
                        {
                            anchor: `Valmiki's chant.`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Valmiki,`,
                                        wiki: `Valmiki`,
                                    },
                                    `the renowned author of the`,
                                    {
                                        isItalic: true,
                                        lyric: `Ramayana,`,
                                    },
                                    `began his early life as Ratnakar, a highway robber. Desperate to repent, he sought counsel from a passing sage, who told him to recite the holy name of Rama. Ratnakar was so sinful, however, that he could only repeat the word`,
                                    {
                                        isItalic: true,
                                        lyric: `mara,`,
                                    },
                                    `or "death." Still, the grace of Rama caused the syllables to gradually shift, until Ratnakar was finally chanting Rama's name.`,
                                ],
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:20:01.17`,
                    lyric: [
                        `When`,
                        {
                            anchor: `wakened from the siren,`,
                            todo: true,
                            cards: [
                                {
                                    description: `Having lost sight of the group, I ended up passing out on the sidewalk. An ambulance siren jolted me awake.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In Greek mythology, the`,
                                        {
                                            anchor: `"Sirens"`,
                                            wiki: `Siren_(mythology)`,
                                        },
                                        `were beautiful women whose enchanting songs would lull sailors and lead them to crash against the rocky shores. But just as`,
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
                        `you found spelled out in`,
                        {
                            anchor: `dead ants:`,
                            todo: true,
                            cards: [
                                {
                                    description: `As Ratnakar chanted Rama's name, his concentration was so intense that an anthill formed over him and he remained undisturbed for years. And so he came to be known as Valmiki, which means "anthill" in Sanskrit.`,
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                                {
                                    description: `My sidewalk art had killed off some ants, whose dead bodies formed an outline around what I had drunkenly scrawled in chalk.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                            ],
                        },
                        {
                            anchor: `_____…`,
                            todo: true,
                            card: {
                                description: `And what I had scrawled in chalk was… Mara's name. No real cliffhanger here. "M" just set a precedent for me to be gun-shy about mentioning her anywhere in my lyrics.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
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
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `On special occasions and for family events, Sita would wear a`,
                                        {
                                            anchor: `sari.`,
                                            wiki: `Sari`,
                                        },
                                        `They always looked really good on her.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Sita's "well-worn sorries" quickly grew tiresome, precisely because only one of us actually needed to beg the other for forgiveness, and we both knew it wasn't her.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `could sway you from a`,
                        {
                            anchor: `fairer marathon!`,
                            todo: true,
                            cards: [
                                {
                                    description: `The constant one-upmanship wasn't just petty. It was exhausting to keep an inner tally of every time I felt slighted. I wanted life to feel more like a marathon that rewards patience and resolve. Since I possessed those traits in spades, that seemed most fair to me.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `"Marathon" sounds like Mara's full name spoken with a lisp.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
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
                                todo: true,
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
                            todo: true,
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
                            anchor: `to be one!`,
                            todo: true,
                            card: {
                                description: `Or else, a contest to be "won."`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `2:38:29.42`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `…traded in for the`,
                            {
                                anchor: `trophy blondes.`,
                                todo: true,
                                cards: [
                                    {
                                        description: `To add insult to injury, the women I left Sita for were usually white, which bothered her greatly. In my defense, this wasn't by design, but seeing her loss as my gain, I let her believe the worst.`,
                                        dotKeys: {
                                            [BACKSTORY]: true,
                                        },
                                    },
                                    {
                                        description: `Like shiny new "bronzes" placed next to a gold award from the past, these other women were never more desirable than Sita in hindsight. They thrilled me most only because I had won them more recently.`,
                                        dotKeys: {
                                            [OBSERVATION]: true,
                                            [PUN]: true,
                                        },
                                    },
                                    {
                                        wormhole: `trophy_bronze`,
                                    },
                                ],
                            },
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
                            anchor: `faces you flip override,`,
                            todo: true,
                            card: {
                                description: `At some point, I noticed I wore drastically different faces for different people in different situations. This wasn't the case when I was a child, which could only mean there was once a true me, and now there wasn't.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:47:04.68`,
                    lyric: [
                        `and all these`,
                        {
                            anchor: `pages you've ripped`,
                            todo: true,
                            card: {
                                description: `My parents lament my eagerness to ditch past sentiments in favor of present ambitions, as if I were tearing out old pages from a scrapbook to free up space for new inserts.`,
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
                    lyric: `Through tatters of sky,`,
                },
                {
                    lyric: [
                        `their`,
                        {
                            anchor: `sun tinkles light`,
                            todo: true,
                            card: {
                                description: `In the nightmare, I was now ruler of the neighborhood as I showered my subjects in urine, their sole means of subsistence. In hindsight, my brain was probably telling me to wake up and use the bathroom.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    lyric: `in needling chimes`,
                },
                {
                    lyric: [
                        `that`,
                        {
                            anchor: `weave through the vines,`,
                            todo: true,
                            card: {
                                description: `The magic beans had sprouted into thick, twisting vines that blocked out the sky as far as my helpless subjects could see.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
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
                                `'s sake,`,
                            ],
                            todo: true,
                            card: {
                                description: `My latest five-year plan, like the one before it, was meant to yield dramatic improvements in my life through a major overhaul of the underlying system. Since it couldn't be left half completed, there was nothing to question while the work remained in progress.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
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
                    lyric: `cast on your peons,`,
                },
                {
                    lyric: {
                        anchor: `old and subservient.`,
                        todo: true,
                        cards: [
                            {
                                description: `It wasn't until college that I learned to appreciate the sacrifices my parents had made for me and my siblings to lead better lives than their own. But that this awareness had to come about through assigned coursework on the history of immigration, rather than through my own lived experiences, only further added to my guilt.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                            {
                                description: `Amongst those I ruled over were my parents, now feeble and senile after a lifetime of following their "son's" bidding.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
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
                                    lyric: `Bildungsroman,`,
                                },
                            ],
                            todo: true,
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
                                    `is a well-known example. My conceit for`,
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
                    ],
                },
                {
                    mixTime: `3:12:20.90`,
                    lyric: [
                        `shouldn't you first be sure you've`,
                        {
                            anchor: `finally become someone?`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `But a key component of the`,
                                        {
                                            isItalic: true,
                                            lyric: `Bildungsroman`,
                                        },
                                        `is the main character's moral and psychological growth from youth into adulthood. Without it, there is no story to be told, a point to which my parents slyly allude here.`,
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
                    ],
                },
            ],
            sideCard: [
                {
                    lyric: {
                        anchor: `Rama, Rama…`,
                        properNoun: true,
                        todo: true,
                        card: {
                            description: `Like Valmiki as he chanted Rama's name, I desperately wanted to be good again.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                            },
                        },
                    },
                },
            ],
            sideSubCard: [
                {
                    lyric: {
                        anchor: `…Maranatha!`,
                        todo: true,
                        card: {
                            description: [
                                `In my case, however, the syllables slowly shift until I'm chanting the holy name of Mara. And unlike Valmiki, who found Eastern spirituality, I find salvation in the embrace of Western women, as represented here by an expression of Western faith. In the`,
                                {
                                    anchor: `New Testament,`,
                                    wiki: `New_Testament`,
                                },
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
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `To record the gradual shift from "Rama" to "Mara" in the backing vocals, I made a`,
                        {
                            anchor: `click track`,
                            wiki: `Click_track`,
                        },
                        `of quarter-note beats that would arrive an eighth note ahead of the mix after seven measures. I then overlaid multiple vocal tracks in which I quietly took a breath at different points to give the impression of an uninterrupted take.`,
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
