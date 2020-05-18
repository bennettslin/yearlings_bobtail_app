export const addAdminMetadata = (annotationsList, album) => {
    const
        globalAnnotationIndicesList = [],
        globalAnnotationTodos = []

    let globalAnnotationDoneCount = 0

    annotationsList.forEach((annotations, songIndex) => {
        if (annotations) {
            annotations.forEach(annotation => {
                const { annotationIndex } = annotation

                if (!annotation.todo) {
                    globalAnnotationDoneCount += 1
                }

                globalAnnotationTodos.push(annotation.todo)

                globalAnnotationIndicesList.push({
                    songIndex,
                    annotationIndex
                })
            })
        }
    })

    album.globalAnnotationIndicesList = globalAnnotationIndicesList
    album.globalAnnotationTodos = globalAnnotationTodos
    album.globalAnnotationDoneCount = globalAnnotationDoneCount
}
