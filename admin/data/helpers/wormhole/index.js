import { initialiseTempWormholeLinks } from './helpers/initialise'
import { registerWikiWormholeLinks } from './helpers/register'
import {
    tellEachSourceLinkItsDestination,
    addWormholeLinksToCard
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
                const wormholeLinks = []

                annotation.cards.forEach(card => {
                    wormholeLinks.push(card.wormholeLinks)
                })

                annotationCardsWormholeLinksList.push(
                    /**
                     * No need to identify by card, because there is only one
                     * wormholeLinks array per annotation.
                     */
                    wormholeLinks.find(links => links) || null
                )
            })

            album.songs[songIndex].annotationCardsWormholeLinksList = annotationCardsWormholeLinksList
        }
    })
}
