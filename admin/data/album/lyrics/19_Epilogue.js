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
        [
            `Thanks for listening! It means a lot. So what do I hope to gain by creating this audio webcomic, an entire decade after the album was finished? In brief, I'm still looking for help, whether in the form of a traditional record deal, or some modern arrangement devised by forward-thinking Gen Zers. The notion that an artist can start by realizing a bold vision, and`,
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
        `Test second paragraph.`,
    ],
}
