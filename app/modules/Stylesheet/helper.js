const getStyleStringForIndex = ({
    index,
    parentPrefix,
    childPrefix,
    style

}) => {
    const
        selector = `${
            parentPrefix ? `.${parentPrefix}${index} ` : ''
        }.${childPrefix}${index}`,

        styleStrings = Object.keys(style).map(property => (
            `${property}:${style[property]};`
        ))

    return `${selector}{${styleStrings.join('')}}`
}

export const getStyleString = ({
    indices,
    parentPrefix,
    childPrefix,
    getStyle

}) => (
    indices.map(index => (
        getStyleStringForIndex({
            index,
            parentPrefix,
            childPrefix,
            style: getStyle(index)
        })
    )).join('')
)
