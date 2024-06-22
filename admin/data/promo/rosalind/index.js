import { getUrl } from '../../../../src/utils/gatsby/path'
import { getFormattedSlideMetadata } from '../helpers/slide'

export default getFormattedSlideMetadata({
    body: [
        {
            paragraph: {
                isItalic: true,
                lyric: `May 2022`,
            },
        },
        {
            paragraph: [
                {
                    anchor: `comic book`,
                    externalLink: getUrl(`share/rosalind/rf_comic.pdf`),
                },
                `(9 MB)`,
                { breakTag: true },
                {
                    anchor: `mp3s`,
                    externalLink: getUrl(`share/rosalind/rf_mp3s.zip`),
                },
                `(28.9 MB zipped)`,
                { breakTag: true },
                {
                    anchor: `scores`,
                    externalLink: getUrl(`share/rosalind/rf_scores.pdf`),
                },
                `(2.1 MB)`,
            ],
        },
    ],
})
