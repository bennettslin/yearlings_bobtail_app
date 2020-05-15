
export const getStaticStyleStringForIndex = ({

    index,
    parentPrefix,
    childPrefix,
    style

}) => {

    const selector = `.${parentPrefix}${index} .${childPrefix}${index}`,

        properties = Object.keys(style),

        styleStrings = properties.map(property => (
            `    ${property}: ${style[property]};`
        ))

    return (
        `${selector} {\n`
        + `${styleStrings.join('\n')}\n`
        + '}'
    )
}
