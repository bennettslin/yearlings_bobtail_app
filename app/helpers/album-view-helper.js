// Parse album data for presentation.
import { ALBUM_BUILD_KEYS } from './constants'

export default {

    getSong({ selectedSongIndex, songs }) {
        return selectedSongIndex ?
            songs[selectedSongIndex - 1] : {}
    },

    getAnnotation(selectedAnnotationIndex, selectedSong) {
        const { annotations } = selectedSong

        return annotations ?
                annotations[selectedAnnotationIndex - 1] : null
    },

    getVerse(selectedVerseIndex, selectedSong) {
        const { lyrics } = selectedSong

        return this._parseLyrics(lyrics, selectedVerseIndex)
    },

    /**
     * Recurse until object with verse index is found.
     */
    _parseLyrics(lyric, selectedVerseIndex) {
        if (lyric.verseIndex === selectedVerseIndex) {
            return lyric
        } else if (Array.isArray(lyric)) {
            return lyric.reduce((childSelectedLyric, childLyric) => {
                return childSelectedLyric || this._parseLyrics(childLyric, selectedVerseIndex)
            }, null)
        }
    },

    getTasks(selectedSong, tasks) {
        const songTasks = selectedSong.tasks

        // If no song tasks, then return album tasks.
        return songTasks ? songTasks : tasks
    },

    getPortalLinks(card, songs) {
        if (card) {
            const { portalLinks } = card

            // Each portal link contains a portal title and index.
            return portalLinks ? portalLinks.map((portalLink) => {
                const { songIndex,
                        annotationIndex } = portalLink,
                    song = songs[songIndex - 1],
                    annotation = song.annotations[annotationIndex - 1]

                return {
                    songIndex,
                    annotationIndex,
                    songTitle: song.title,
                    annotationTitle: annotation.title
                }
            }) : null
        } else {
            return null
        }
    }
}
