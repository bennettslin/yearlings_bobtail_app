export const getParentOfVerseClassNamesForIndices = (verseIndices) => {
    const
        // "Parent of verse index."
        prefix = 'PoV',
        classNames = verseIndices.map(verseIndex => (
            `${prefix}${verseIndex}`
        ))

    // Include the prefix without an index.
    classNames.push(prefix)

    return classNames
}
