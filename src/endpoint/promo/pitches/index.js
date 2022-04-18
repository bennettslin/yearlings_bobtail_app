import { getPromo } from '../../builds'
import { getArrayOfLength } from '../../../helpers/general'

const getSlides = pitchKey => getPromo()[pitchKey]?.slides || []

export const getSlidesCount = pitchKey => getSlides(pitchKey).length

export const getIsSlideValid = (pitchKey, pitchSlideIndex) => (
    getArrayOfLength(getSlidesCount(pitchKey), 1).some(
        index => index === pitchSlideIndex,
    )
)

export const getPathForSlide = (pitchKey, pitchSlideIndex) => (
    getSlides(pitchKey)[pitchSlideIndex - 1].path
)

export const getTitleForSlide = (pitchKey, pitchSlideIndex) => (
    getSlides(pitchKey)[pitchSlideIndex - 1].title
)

export const getBodyForSlide = (pitchKey, pitchSlideIndex) => (
    getSlides(pitchKey)[pitchSlideIndex - 1].body
)

export const getFootnoteForSlide = (pitchKey, pitchSlideIndex) => (
    getSlides(pitchKey)[pitchSlideIndex - 1].footnote
)
