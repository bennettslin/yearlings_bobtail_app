import { initialiseTempWormholeLinks } from './helpers/initialise'
import { registerWikiWormholeLinks } from './helpers/register'
import {
    tellEachSourceLinkItsDestination,
    addWormholeLinksToCard
} from './helpers/source'

const TEMP_WORMHOLE_LINKS = {}

export const addWormholeMetadata = (songs) => {
    initialiseTempWormholeLinks(songs, TEMP_WORMHOLE_LINKS)
    tellEachSourceLinkItsDestination(songs, TEMP_WORMHOLE_LINKS)
    registerWikiWormholeLinks(songs)
    addWormholeLinksToCard(songs, TEMP_WORMHOLE_LINKS)

    songs.forEach(song => {
        const { annotations } = song
        if (annotations) {
            const annotationWikiWormholes = []

            annotations.forEach(annotation => {
                annotationWikiWormholes.push(annotation.wikiWormholes || null)
            })

            song.annotationWikiWormholes = annotationWikiWormholes
        }
    })
}
