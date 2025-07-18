import { REVIEW } from '../../../containers/Annotations/constants/todos'

export default {
    title: 'epilogue',
    isLogue: true,
    /**
     * This is just used to calculate the duration of the last song. It is set
     * to a tenth of a second before the end of the file, to allow the last
     * song to repeat itself without the player ending first.
     */
    playerStartTime: 3576.7,
    todo: REVIEW,
    overview: [
        `Thanks for listening! So what do I hope to gain by putting out this audio webcomic, almost two decades after the album itself was made? In brief, I'm still looking for help— whether in the form of a traditional label deal, or some modern arrangement devised by forward-thinking partners.`,
        [
            `With the indie takeover of music, it's now on the artist to go from "zero to one"— that is, to get themselves known; only then does a partner help to take them "from one to`,
            {
                isItalic: true,
                lyric: `n`,
            },
            `"— to make the public care. Young folks know of no other paradigm, of course… but I still refuse to accept it. And not just because I'm from an earlier time; it's a waste of everyone's strengths!`,
        ],
        [
            `Let's face it: Music was better when the`,
            {
                isEmphasis: true,
                lyric: `partner`,
            },
            `made an artist known, and then put it on the`,
            {
                isEmphasis: true,
                lyric: `artist`,
            },
            `to get the public to care. So can we return to this older paradigm? Yes! It just needs to happen again once. This is why I've devoted half my life to`,
            {
                isItalic: true,
                lyric: `Yearling's Bobtail`,
            },
            `— the ultimate one-to-`,
            {
                isItalic: true,
                lyric: `n`,
            },
            `project. And with your help, the Bobtail Yearlings can now go from zero to one!`,
        ],
    ],
}
