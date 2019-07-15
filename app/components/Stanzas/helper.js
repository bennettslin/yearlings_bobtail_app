import isFinite from 'lodash/isfinite'

export const getParentOfVerseClassNamesForIndices = ({
    entities = [],

    // "Parent of verse index."
    prefix = 'PoV'
}) => {

    const classNames = entities.map(entity => {
        const { verseIndex } = entity

        return isFinite(verseIndex) ?
            `${prefix}${verseIndex}` :
            null
    })

    // Include the prefix without an index.
    classNames.push(prefix)

    return classNames
}
