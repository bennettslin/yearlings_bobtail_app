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
}
