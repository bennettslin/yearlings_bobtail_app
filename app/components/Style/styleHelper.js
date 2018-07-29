import keys from 'lodash.keys'

export const getStyleStringForIndex = ({

    index,
    parentPrefix,
    childPrefix,
    style

}) => {

    const selector = `.${parentPrefix}${index} .${childPrefix}${index}`,

        properties = keys(style),

        styleStrings = properties.map(property => (
            `    ${property}: ${style[property]};`
        ))

    return (
        `${selector} {\n`
        + `${styleStrings.join('\n')}\n`
        + '}'
    )
}
