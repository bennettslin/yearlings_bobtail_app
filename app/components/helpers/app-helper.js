export default {

    getSelectedSongObject(selectedSongIndex, songs) {
        return selectedSongIndex ?
            songs[selectedSongIndex - 1] : {};
    },

    getAnnotationObject(selectedAnnotationIndex, selectedSongObject) {
        const annotations = selectedSongObject.annotations;

        return annotations ?
                annotations[selectedAnnotationIndex - 1] : null;
    },

    getTaskObjects(selectedSongObject, tasks) {
        const songTasks = selectedSongObject.tasks;

        // If no song tasks, then return album tasks.
        return songTasks ? songTasks : this.props.tasks;
    },

    getOverviewRichText(selectedOverviewIndex, selectedSongObject, overviews) {
        if (selectedOverviewIndex) {
            const songOverviews = selectedSongObject.overviews;

            // If no song overviews, then return album overviews.
            return songOverviews ?
                songOverviews[selectedOverviewIndex - 1] :
                overviews[selectedOverviewIndex - 1];
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