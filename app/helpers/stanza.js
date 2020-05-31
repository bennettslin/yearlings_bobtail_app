import cx from 'classnames'
import { getVerseIndicesForStanza } from '../album/api/stanzas'

const getParentOfVerseClassNamesForIndices = ({
    entities = [],

    // "Parent of verse index."
    prefix = 'PoV'
}) => {

    const classNames = entities.map(entity => {
        const verseIndex = typeof entity === 'object' ?
            entity.verseIndex :
            entity

        return Number.isFinite(verseIndex) ?
            `${prefix}${verseIndex}` :
            null
    })

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
        getParentOfVerseClassNamesForIndices({
            entities: getVerseIndicesForStanza(
                songIndex,
                stanzaIndex
            )
        })
    )
)
