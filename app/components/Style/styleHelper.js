import keys from 'lodash.keys'

export const getStyleString = ({

    indices,
    rootPrefix,
    childPrefix,
    style

}) => {

    return indices.map(index => {
        const
            selector = `.${rootPrefix}${index} .${childPrefix}${index}`,
            properties = keys(style),
            styleStrings = properties.map(property => (
                `    ${property}: ${style[property]};`
            ))

        return (
            `${selector} {\n`
            + `${styleStrings.join('\n')}\n`
            + '}'
        )
    })
}
