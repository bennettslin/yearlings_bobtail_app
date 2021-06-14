import { getPromo } from '../../builds'
import { getArrayOfLength } from '../../../helpers/general'

const {
    artup2: {
        slides: SLIDES,
    },
} = getPromo()

export const getArtup2SlidesCount = () => SLIDES.length

export const getIsArtup2SlideValid = artup2SlideIndex => (
    getArrayOfLength(getArtup2SlidesCount(), 1).some(
        index => index === artup2SlideIndex,
    )
)

export const getPathForArtup2Slide = artup2SlideIndex => (
    SLIDES[artup2SlideIndex - 1].path
)

export const getTitleForArtup2Slide = artup2SlideIndex => (
    SLIDES[artup2SlideIndex - 1].title
)

export const getBodyForArtup2Slide = artup2SlideIndex => (
    SLIDES[artup2SlideIndex - 1].body
)

export const getFootnoteForArtup2Slide = artup2SlideIndex => (
    SLIDES[artup2SlideIndex - 1].footnote
)
