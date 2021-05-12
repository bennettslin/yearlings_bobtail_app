import { getArtup } from '../builds'
import { getArrayOfLength } from '../../helpers/general'

const {
    slides: SLIDES,
} = getArtup()

export const getArtupSlidesCount = () => SLIDES.length

const getArtupSlideIndices = () => (
    getArrayOfLength(getArtupSlidesCount(), 1)
)

export const getIsArtupSlideValid = artupSlideIndex => (
    getArtupSlideIndices().some(
        index => index === artupSlideIndex,
    )
)

export const getValidArtupSlideIndex = artupSlideIndex => (
    getIsArtupSlideValid(artupSlideIndex) ? artupSlideIndex : 1
)

export const getPathForArtupSlide = artupSlideIndex => (
    SLIDES[artupSlideIndex - 1].path
)

export const getTitleForArtupSlide = artupSlideIndex => (
    SLIDES[artupSlideIndex - 1].title
)

export const getBodyForArtupSlide = artupSlideIndex => (
    SLIDES[artupSlideIndex - 1].body
)

export const getFootnoteForArtupSlide = artupSlideIndex => (
    SLIDES[artupSlideIndex - 1].footnote
)

export const getShowContactEmailForArtupSlide = artupSlideIndex => (
    Boolean(SLIDES[artupSlideIndex - 1].contactEmail)
)
