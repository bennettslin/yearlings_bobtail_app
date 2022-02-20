import { getPromo } from '../../builds'
import { getArrayOfLength } from '../../../helpers/general'

const {
    pareto: {
        slides: SLIDES,
    },
} = getPromo()

export const getParetoSlidesCount = () => SLIDES.length

export const getIsParetoSlideValid = paretoSlideIndex => (
    getArrayOfLength(getParetoSlidesCount(), 1).some(
        index => index === paretoSlideIndex,
    )
)

export const getPathForParetoSlide = paretoSlideIndex => (
    SLIDES[paretoSlideIndex - 1].path
)

export const getTitleForParetoSlide = paretoSlideIndex => (
    SLIDES[paretoSlideIndex - 1].title
)

export const getBodyForParetoSlide = paretoSlideIndex => (
    SLIDES[paretoSlideIndex - 1].body
)

export const getFootnoteForParetoSlide = paretoSlideIndex => (
    SLIDES[paretoSlideIndex - 1].footnote
)
