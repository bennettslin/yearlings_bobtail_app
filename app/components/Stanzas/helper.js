import isNumber from 'lodash.isnumber'

export const getParentOfVerseClassNamesForIndices = ({
    entities = [],

    // "Parent of verse index."
    prefix = 'PoV'
}) => {

    const classNames = entities.map(entity => {
        const { verseIndex } = entity

        return isNumber(verseIndex) ?
            `${prefix}${verseIndex}` :
            null
    })

    // Include the prefix without an index.
    classNames.push(prefix)

    return classNames
}
