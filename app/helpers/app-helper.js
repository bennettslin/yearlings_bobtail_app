export default {

    getSongObject(activeSongIndex, songs) {
        return activeSongIndex ?
            songs[activeSongIndex - 1] : {};
    },

    getAnnotationObject(activeAnnotationIndex, activeSongObject) {
        const annotations = activeSongObject.annotations;

        return annotations ?
                annotations[activeAnnotationIndex - 1] : null;
    },

    getTaskObjects(activeSongObject, tasks) {
        const songTasks = activeSongObject.tasks;

        // If no song tasks, then return album tasks.
        return songTasks ? songTasks : tasks;
    },

    getOverviewRichText(activeOverviewIndex, activeSongObject, overviews) {
        if (activeOverviewIndex) {
            const songOverviews = activeSongObject.overviews;

            // If no song overviews, then return album overviews.
            return songOverviews ?
                songOverviews[activeOverviewIndex - 1] :
                overviews[activeOverviewIndex - 1];
        } else {
            return null;
        }
    },

    getPortalObjects(annotationObject, songs) {
        if (annotationObject) {
            const portalReferences = annotationObject.portalReferences;

            // Portal objects contain portal titles and indices.
            return portalReferences ? portalReferences.map((portalReference) => {
                const songIndex = portalReference.songIndex,
                    annotationIndex = portalReference.annotationIndex,
                    song = songs[songIndex - 1],
                    annotation = song.annotations[annotationIndex - 1];

                return {
                    songIndex: songIndex,
                    annotationIndex: annotationIndex,
                    songTitle: song.title,
                    annotationTitle: annotation.title
                }
            }) : null;
        } else {
            return null;
        }
    }
}
