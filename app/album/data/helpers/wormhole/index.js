import { initialiseTempWormholeLinks } from './helpers/initialise'
import { registerWikiAndWormholeLinks } from './helpers/register'
import {
    tellEachSourceLinkItsDestination,
    addWormholeLinksToCard
} from './helpers/source'

const TEMP_WORMHOLE_LINKS = {}

export const addWormholeMetadata = (songs) => {
    initialiseTempWormholeLinks(songs, TEMP_WORMHOLE_LINKS)
    tellEachSourceLinkItsDestination(songs, TEMP_WORMHOLE_LINKS)
    registerWikiAndWormholeLinks(songs)
    addWormholeLinksToCard(songs, TEMP_WORMHOLE_LINKS)
}
