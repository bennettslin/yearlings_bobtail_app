import keys from 'lodash.keys'

export const getDynamicStyleStringForIndex = ({

    parentPrefixes = [],
    childPrefixes = [],
    style

}) => {
    const
        parentPrefixSelector = parentPrefixes.map(parentPrefix => {
            return parentPrefix ? (
                `.${parentPrefix}`
            ) : ''
        }).join(''),
        childPrefixSelector = childPrefixes.map(childPrefix => {
            return childPrefix ? (
                `.${childPrefix}`
            ) : ''
        }).join('')

    const selector =
        parentPrefixSelector ?
            `${parentPrefixSelector} ${childPrefixSelector}` :
            childPrefixSelector,

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
