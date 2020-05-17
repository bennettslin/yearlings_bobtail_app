const getAnnotationObject = (
    songs,
    songIndex,
    annotationIndex
) => {
    const { annotations } = songs[songIndex]
    return annotations ? annotations[annotationIndex - 1] : null
}

export const tellEachSourceLinkItsDestination = (songs, tempWormholeLinks) => {
    /**
     * For each annotation with a wormhole, add an array of links to all
     * other wormholes.
     */
    for (const linkKey in tempWormholeLinks) {
        const tempLinks = tempWormholeLinks[linkKey]

        tempLinks.forEach((tempLink, index) => {
            const {
                    songIndex,
                    annotationIndex,
                    cardIndex
                } = tempLink,

                // Find the card for this link.
                { cards } = getAnnotationObject(songs, songIndex, annotationIndex),
                card = cards[cardIndex]

            // Let it know every other link for this wormhole key.
            card.wormholeLinks =
                tempLinks.filter((destinationLink, thisIndex) => {

                    return (
                        // Don't add link to its own wormhole.
                        index !== thisIndex &&

                        /**
                         * Don't add link from the same song. Applies to the
                         * two "shiv" wormholes in Odin.
                         */
                        songIndex !== destinationLink.songIndex
                    )
                })
        })

    }
}

export const addWormholeLinksToCard = (songs, tempWormholeLinks) => {
    // Now that each wormhole knows its source index, get destination indices.
    for (const linkKey in tempWormholeLinks) {
        const tempLinks = tempWormholeLinks[linkKey]

        tempLinks.forEach((destinationLink, index) => {
            const {
                    songIndex,
                    annotationIndex,
                    cardIndex,
                    tempSourceWormholeLinks
                } = destinationLink,

                annotation = getAnnotationObject(songs, songIndex, annotationIndex),
                {
                    cards,
                    tempSourceWormholeIndices
                } = annotation,
                card = cards[cardIndex]

            card.wormholeLinks = tempLinks.filter((destinationLink, thisIndex) => {

                return (
                    // Don't add link to its own wormhole.
                    index !== thisIndex &&

                    /**
                     * Don't add link from the same song. Applies to the
                     * two "shiv" wormholes in Odin.
                     */
                    songIndex !== destinationLink.songIndex
                )

            }).map(sourceLink => {
                const {
                    songIndex,
                    verseIndex,
                    annotationIndex,
                    columnIndex,
                    wormholePrefix
                } = sourceLink
                let sourceWormholeIndex,
                    destinationWormholeIndex

                /**
                 * Add destination wormhole indices. This is as complicated as
                 * it is because of the three "shiv" wormholes.
                 */
                tempSourceWormholeLinks.forEach(tempSourceLink => {

                    const {
                        tempSourceSongIndex,
                        tempSourceAnnotationIndex,
                        tempSourceWormholeIndex
                    } = tempSourceLink

                    if (
                        /**
                         * Links will match only once for each source and
                         * destination pair.
                         */
                        songIndex === tempSourceSongIndex &&
                        annotationIndex === tempSourceAnnotationIndex
                    ) {
                        // Exchange knowledge of source and destination indices.
                        destinationWormholeIndex = tempSourceWormholeIndex
                        sourceWormholeIndex = tempSourceWormholeIndices.shift()
                    }
                })

                return {
                    songIndex,
                    verseIndex,
                    annotationIndex,
                    columnIndex,
                    wormholePrefix,
                    destinationWormholeIndex,
                    sourceWormholeIndex
                }
            })
        })
    }
}
