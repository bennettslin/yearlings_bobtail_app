import { isString } from '../../../../../helpers/general'

import {
    WIKI,
    WIKI_INDEX
} from '../../../../../constants/lyrics'

const _registerWikiLinksForCard = ({
    annotation,
    entity
}) => {

    // If it's not an array or an object, just exit now.
    if (!entity || typeof entity !== 'object') {
        return false

    // It's an array, so recurse.
    } else if (Array.isArray(entity)) {
        return entity.reduce((keyFound, element) => {

            // Reversing order so that index gets added if needed.
            return _registerWikiLinksForCard({
                annotation,
                entity: element
            }) || keyFound

        }, false)

    // It's an object.
    } else {
        /**
         * The anchor is nested further, to accommodate italic text, for
         * example, so recurse.
         */
        if (entity.lyric) {
            return _registerWikiLinksForCard({
                annotation,
                entity: entity.lyric
            })
        }

        return Object.keys(entity).reduce((keyFound, currentKey) => {
            const hasWiki = Boolean(entity[WIKI])

            if (!entity[WIKI_INDEX] && isString(entity[WIKI])) {

                // Let annotation anchor know its annotation.
                entity.wikiAnnotationIndex = annotation.annotationIndex

                if (!annotation.wikiWormholes) {
                    annotation.wikiWormholes = []
                }

                // Popup anchor index is either for wormhole or wiki.
                entity[WIKI_INDEX] = annotation.wikiWormholes.length + 1

                annotation.wikiWormholes.push(entity[WIKI])

                delete entity[WIKI]
            }

            return keyFound || hasWiki || _registerWikiLinksForCard(annotation, entity[currentKey])
        }, false)
    }
}

const _registerWormholeLinksForCard = ({
    songIndex,
    annotation,
    wormholeLinks
}) => {
    wormholeLinks.forEach(keyLink => {

        // Access will loop through this array.
        if (!annotation.wikiWormholes) {
            annotation.wikiWormholes = []
        }

        // Wiki wormhole indices are 1-based.
        const wikiWormholeIndex = annotation.wikiWormholes.length + 1
        annotation.wikiWormholes.push(wikiWormholeIndex)

        // Allow each wormhole to know its source wormhole index.
        if (!annotation.tempSourceWormholeIndices) {
            annotation.tempSourceWormholeIndices = []
        }
        annotation.tempSourceWormholeIndices.push(wikiWormholeIndex)

        // Temporarily, also allow wormhole to know its source annotations.
        if (!keyLink.tempSourceWormholeLinks) {
            keyLink.tempSourceWormholeLinks = []
        }
        keyLink.tempSourceWormholeLinks.push({
            tempSourceSongIndex: songIndex,
            tempSourceAnnotationIndex: annotation.annotationIndex,
            tempSourceWormholeIndex: wikiWormholeIndex
        })
    })
}

const _registerWikiAndWormholeLinksForCard = ({
    songIndex,
    annotation,
    card: {
        description,
        wormholeLinks
    }
}) => {
    if (description) {
        _registerWikiLinksForCard({
            annotation,
            entity: description
        })

    } else if (wormholeLinks) {
        _registerWormholeLinksForCard({
            songIndex,
            annotation,
            wormholeLinks
        })
    }
}

export const registerWikiAndWormholeLinks = (songs) => {
    songs.forEach(({ annotations }, songIndex) => {
        if (annotations) {
            /**
             * Add wiki and wormhole indices. These can only be determined
             * after collecting wormhole links from the entire album.
             */
            annotations.forEach(annotation => {
                const { cards } = annotation

                cards.forEach(card => {
                    _registerWikiAndWormholeLinksForCard({
                        songIndex,
                        annotation,
                        card
                    })
                })
            })
        }
    })
}
