import { REDO } from '../../../containers/Annotations/constants/todos'

export default {
    title: 'epilogue',
    isLogue: true,
    /**
     * This is just used to calculate the duration of the last song. It is set
     * to a tenth of a second before the end of the file, to allow the last
     * song to repeat itself without the player ending first.
     */
    playerStartTime: 3576.7,
    todo: REDO,
    problem: `I just don't like it anymore. Redo most of it.`,
    overview: [
        `Thanks for listening! So… what do I hope to gain by putting out this audio webcomic, almost two decades after the album itself was made? In brief, I'm still looking for help— whether in the form of a traditional label deal, or some modern arrangement devised by forward-thinking partners.`,
        [
            `With the indie takeover of music, it's now on the`,
            {
                isEmphasis: true,
                lyric: `artist`,
            },
            `to go "from zero to one"— that is, to make themselves known; only then does a`,
            {
                isEmphasis: true,
                lyric: `partner`,
            },
            `help to take them "from one to`,
            {
                isItalic: true,
                lyric: `n`,
            },
            `"— to get the public to care. Young folks have never known any other way of thinking, of course. But I refuse to adopt it— and not just because I'm of an older generation; it's objectively the`,
            {
                isEmphasis: true,
                lyric: `worst`,
            },
            `use of everyone's unique strengths!`,
        ],
        [
            `The notion that an artist can start by realizing a bold vision, and`,
            {
                isEmphasis: true,
                lyric: `then`,
            },
            `have others invest in their potential, and only`,
            {
                isEmphasis: true,
                lyric: `then`,
            },
            `prove to be viable in the long term— rather than the reverse order, as indie rock insists— is not that crazy. It's how hip hop works. It's how many pioneering artists got their start. The truth is, interdependence was the reason for rock music's great past. Why wouldn't it hold the key to a better future?`,
        ],
    ],
}
