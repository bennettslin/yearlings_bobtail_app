export const getParentOfVerseClassNamesForIndices = ({
    entities = [],

    // "Parent of verse index."
    prefix = 'PoV'
}) => {

    const classNames = entities.map(entity => {
        let verseIndex = entity.verseIndex

        /**
         * If it's a unit map, get the verse index from the subCard, which is
         * only ever an array of one.
         */
        if (entity.subCard) {
            verseIndex = entity.subCard[0].verseIndex
        }

        return !isNaN(verseIndex) ?
            `${prefix}${verseIndex}` :
            null
    })

    // Include the prefix without an index.
    classNames.push(prefix)

    return classNames
}
