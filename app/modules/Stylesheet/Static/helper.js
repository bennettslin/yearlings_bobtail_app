export const getStaticStyleStringForIndex = ({
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
