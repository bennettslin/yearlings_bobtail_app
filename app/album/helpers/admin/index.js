export const addGlobalAnnotationIndices = (album) => {
    const
        { songs } = album,
        annotationIndices = []

    songs.forEach(song => {
        const {
            annotations,
            songIndex
        } = song

        if (annotations) {
            annotations.forEach(annotation => {
                const { annotationIndex } = annotation

                // Let annotation object know its global index.
                annotation.globalIndex = annotationIndices.length

                annotationIndices.push({
                    songIndex,
                    annotationIndex
                })
            })
        }
    })

    album.globalAnnotationIndices = annotationIndices
}
