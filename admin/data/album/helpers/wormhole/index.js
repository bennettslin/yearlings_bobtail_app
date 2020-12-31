import { initialiseTempWormholeLinks } from './helpers/initialise'
import { registerWikiWormholeLinks } from './helpers/register'
import {
    tellEachSourceLinkItsDestination,
    addWormholeLinksToCard,
} from './helpers/source'

const wormholeLinks = {}

export const addWormholeMetadata = (annotationsList, album) => {
    initialiseTempWormholeLinks(annotationsList, wormholeLinks)
    tellEachSourceLinkItsDestination(annotationsList, wormholeLinks)
    registerWikiWormholeLinks(annotationsList)
    addWormholeLinksToCard(annotationsList, wormholeLinks)

    annotationsList.forEach((annotations, songIndex) => {
        if (annotations) {
            const annotationWikiWormholes = []

            annotations.forEach(annotation => {
                annotationWikiWormholes.push(annotation.wikiWormholes || null)
            })

            album
                .songs[songIndex]
                .annotationWikiWormholes = annotationWikiWormholes
        }
    })

    // Tell each song its list of wormhole links.
    annotationsList.forEach((annotations, songIndex) => {
        if (annotations) {
            const annotationCardsWormholeLinksList = []

            annotations.forEach(annotation => {
                let wormholeLinks = null

                annotation.cards.forEach(card => {
                    /**
                     * There is only one wormholeLinks array per annotation. So
                     * it does not need to be nested under any given card.
                     */
                    if (card.wormholeLinks) {

                        // If there is only one link, just add it directly.
                        wormholeLinks = card.wormholeLinks.length === 1 ?
                            card.wormholeLinks[0] :
                            card.wormholeLinks
                    }
                })

                annotationCardsWormholeLinksList.push(wormholeLinks)
            })

            album.songs[songIndex].annotationCardsWormholeLinksList = annotationCardsWormholeLinksList
        }
    })
}
