// Parse album data for presentation.

export default {

    getSong(activeSongIndex, songs) {
        return activeSongIndex ?
            songs[activeSongIndex - 1] : {}
    },

    getAnnotation(activeAnnotationIndex, activeSong) {
        const annotations = activeSong.annotations

        return annotations ?
                annotations[activeAnnotationIndex - 1] : null
    },

    getTasks(activeSong, tasks) {
        const songTasks = activeSong.tasks

        // If no song tasks, then return album tasks.
        return songTasks ? songTasks : tasks
    },

    getOverviewText(activeOverviewIndex, activeSong, overviews) {
        if (activeOverviewIndex) {
            const songOverviews = activeSong.overviews

            // If no song overviews, then return album overviews.
            return songOverviews ?
                songOverviews[activeOverviewIndex - 1] :
                overviews[activeOverviewIndex - 1]
        } else {
            return null
        }
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
