module.exports = {
    title: 'Didi',
    speechBubbles: {
        narrative: 'As a child, I tagged along with my older sister everywhere she went.',
        backstory: [
            'James Joyce\'s novel',
            {
                italic: 'A Portrait of the Artist as a Young Man'
            },
            'begins in the simple prose of a child, so I did the same for this first song. Toy instruments abound, including an autoharp and glockenspiel that evoke the intro to The Beach Boys\'',
            {
                italic: 'Pet Sounds.'
            },
            // TODO: Too moralistic?
            'Beyond paying homage, I was planting a reminder that Brian Wilson\'s masterpiece was never performed live in its own time precisely because it was paving the way for what had yet to be achievable onstage. And far from being discredited as a hobby project, it now tops every list of rock\'s greatest albums. But my worries proved well-founded, as the lack of resources needed for my live shows to match the recordings meant that my album was dead on arrival to the indie rock scene.',
            ''
        ]
    },
    annotations: {
        didi_translation: {
            description: 'hi'
        }
    },
    lyrics: {
        right: [
            [
                {
                    time: 17,
                    verse: 'Didi left the house this morning'
                },
                {
                    time: 22,
                    verse: 'wondering to himself, who would tie his shoes?'
                },
                {
                    time: 28,
                    verse: 'And he left alone because he'
                },
                {
                    time: 34,
                    verse: 'had to finish up all his orange juice.'
                }
            ],
            [
                {
                    time: 40,
                    verse: 'Didi, you\'ve been following, I didn\'t want you here.'
                },
                {
                    time: 46,
                    verse: 'Didi, couldn\'t you find another sister to be near?'
                }
            ],
            [
                {
                    /**
                     * Zeizei
                     */
                    time: 52,
                    verse: 'Cause I get sick of hearing, "Zeizei, let Didi play with you…"'
                },
                {
                    time: 57,
                    verse: 'And I tire of saying, "My Didi wants to come too."'
                }
            ],
            [
                {
                    time: 63,
                    verse: 'Didi made an "accident" in class,'
                },
                {
                    time: 68,
                    verse: 'so the nurse sent him home, snickered the recess crowd.'
                },
                {
                    time: 74,
                    verse: 'They saw him crying beside a Safeway paper bag,'
                },
                {
                    time: 80,
                    verse: 'decked in overalls from the lost and found.'
                }
            ],
            [
                {
                    time: 85,
                    verse: 'Didi, you\'ve been in the bath all this time.'
                },
                {
                    time: 91,
                    verse: 'Didi, come out, you can\'t soak there all night.'
                },
                {
                    time: 97,
                    verse: '<em>Don\'t little raisin fingers need to dry?</em>'
                }
            ],
            [
                {
                    time: 100,
                    verse: 'Didi, someday you will be a hero'
                },
                {
                    time: 103,
                    verse: 'in the movies, fighting those'
                },
                {
                    time: 106,
                    verse: 'crooked thieves with your sheriff\'s badge and gun…'
                },
                {
                    time: 112,
                    verse: 'Didi, one day you will be a picture'
                },
                {
                    time: 115,
                    verse: 'taped to all the girls\' mirrors.'
                },
                {
                    time: 117,
                    verse: 'They\'ll say, who now could have ever figured'
                },
                {
                    time: 120,
                    verse: 'you\'d finally become someone?'
                }
            ],
            [
                {
                    time: 129,
                    verse: 'Didi dear, I\'m sorry that I yelled at you that way.'
                },
                {
                    time: 135,
                    verse: 'Didi dear, I know today just wasn\'t your day.'
                }
            ],
            [
                {
                    time: 141,
                    verse: 'And now I think all I want is my Didi well by tomorrow,'
                },
                {
                    time: 146,
                    verse: 'and there are things I hope my Didi will never know.'
                }
            ],
            [
                {
                    time: 152,
                    verse: 'Yes, and now I think all I want is my Didi well by tomorrow,'
                },
                {
                    time: 158,
                    verse: 'and there are things I hope Didi will never have to know.'
                }
            ]
        ]
    },
    tasks: [
        {
            taskName: ' test task 1',
            workedHours: 4,
            neededHours: 8
        },
        {
            taskName: 'test task with subtasks 1',
            subtasks: [
                {
                    taskName: 'test subtask 1',
                    workedHours: 3,
                    neededHours: 4
                },
                {
                    taskName: 'test subtask 2',
                    workedHours: 2,
                    neededHours: 5
                }
            ],
            workedHours: 0,
            neededHours: 4
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
        {
            taskName: 'test task with subtasks 2',
            subtasks: [
                {
                    taskName: 'test subtask 1',
                    workedHours: 3,
                    neededHours: 4
                },
                {
                    taskName: 'test subtask 2',
                    workedHours: 2,
                    neededHours: 5
                }
            ],
            workedHours: 1,
            neededHours: 3
        }
    ]
};