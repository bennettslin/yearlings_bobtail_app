import cx from 'classnames'
import { getVerseIndicesForStanza } from '../api/album/stanzas'

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

export const getLogicClassNamesForStanza = (songIndex, stanzaIndex) => (
    cx(
        // "Child component stanza index."

        // Aligned selector when on cursor.
        Number.isFinite(stanzaIndex) &&
        `ChS${stanzaIndex}`,

        /**
         * General selector when before cursor, general
         * sibling selector when after cursor.
         */
        Number.isFinite(stanzaIndex) &&
        'ChS',

        // "Parent of verse index."
        getParentOfVerseClassNamesForIndices(
            getVerseIndicesForStanza(
                songIndex,
                stanzaIndex
            )
        )
    )
)
