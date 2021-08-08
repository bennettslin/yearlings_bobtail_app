import { getCharStringForNumber } from '../../helpers/format'

const getStyleStringForIndex = ({
    index,
    showHexIndices,
    parentPrefix,
    childPrefix,
    style,

}) => {
    const
        shownIndex = showHexIndices ? getCharStringForNumber(index) : index,
        selector = `${
            parentPrefix ? `.${parentPrefix}${shownIndex} ` : ''
        }.${childPrefix}${shownIndex}`,

        styleStrings = Object.keys(style).map(property => (
            `${property}:${style[property]};`
        ))

    return `${selector}{${styleStrings.join('')}}`
}

export const getStyleString = ({
    indices,
    showHexIndices,
    parentPrefix,
    childPrefix,
    getStyle,

}) => (
    indices.map(index => (
        getStyleStringForIndex({
            index,
            showHexIndices,
            parentPrefix,
            childPrefix,
            style: getStyle(index),
        })
    )).join('')
)
