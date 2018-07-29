import keys from 'lodash.keys'

export const getStaticStyleStringForIndex = ({

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

export const getDynamicStyleStringForIndex = ({

    parentPrefix,
    childPrefix,
    style

}) => {

    const selector = `.${parentPrefix} .${childPrefix}`,

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
