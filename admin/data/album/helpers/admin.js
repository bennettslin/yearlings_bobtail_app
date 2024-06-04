export const addAdminMetadata = (annotationsList, album) => {
    const
        globalAnnotationIndicesList = [],
        globalAnnotationTodos = []

    let globalAnnotationTodosCount = 0

    annotationsList.forEach((annotations, songIndex) => {
        if (annotations) {
            annotations.forEach(annotation => {
                const { annotationIndex } = annotation

                if (annotation.todo) {
                    globalAnnotationTodosCount += 1
                }

                globalAnnotationTodos.push(annotation.todo)

                globalAnnotationIndicesList.push({
                    songIndex,
                    annotationIndex,
                })
            })
        }
    })

    album.globalAnnotationIndicesList = globalAnnotationIndicesList
    album.globalAnnotationTodos = globalAnnotationTodos
    album.globalAnnotationTodosCount = globalAnnotationTodosCount
}
