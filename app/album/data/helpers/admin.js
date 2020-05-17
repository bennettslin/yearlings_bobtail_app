export const addDotUnitsCount = (song) => {
    const { lyricUnits } = song

    if (lyricUnits) {
        let dotUnitsCount = 0

        lyricUnits.forEach(unit => {
            const { unitMap: { unitDot } } = unit

            if (unitDot) {
                dotUnitsCount++
            }
        })

        song.adminDotUnitsCount = dotUnitsCount
    }
}

export const addPluralCardsCount = (song) => {
    const { annotations } = song

    if (annotations) {
        let pluralCardsCount = 0

        annotations.forEach(annotation => {
            const { cards } = annotation
            if (cards.length > 1) {
                pluralCardsCount++
            }
        })

        song.adminPluralCardsCount = pluralCardsCount
    }
}

export const addGlobalAnnotationIndices = (album) => {
    const { finalSongs } = album,
        annotationIndices = []

    let globalAnnotationIndicesDone = 0

    finalSongs.forEach(({ annotations }, songIndex) => {
        if (annotations) {
            annotations.forEach(annotation => {
                const { annotationIndex } = annotation

                // Let annotation object know its global index.
                annotation.globalIndex = annotationIndices.length

                if (!annotation.todo) {
                    globalAnnotationIndicesDone += 1
                }

                annotationIndices.push({
                    songIndex,
                    annotationIndex
                })
            })
        }
    })

    album.globalAnnotationIndicesDone = globalAnnotationIndicesDone
    album.globalAnnotationIndices = annotationIndices
}
