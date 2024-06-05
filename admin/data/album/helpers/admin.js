import { REVIEW, REVISE } from '../../../containers/Annotations/constants/todos'

export const addAdminMetadata = (annotationsList, album) => {
    const
        globalAnnotationIndicesList = [],
        globalAnnotationTodos = []

    let globalAnnotationTodosCount = 0
    let globalAnnotationReviewsCount = 0
    let globalAnnotationRevisionsCount = 0

    annotationsList.forEach((annotations, songIndex) => {
        if (annotations) {
            annotations.forEach(annotation => {
                const { annotationIndex } = annotation

                if (annotation.todo) {
                    globalAnnotationTodosCount += 1
                }

                if (annotation.todo === REVIEW) {
                    globalAnnotationReviewsCount += 1
                } else if (annotation.todo === REVISE) {
                    globalAnnotationRevisionsCount += 1
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
    album.globalAnnotationReviewsCount = globalAnnotationReviewsCount
    album.globalAnnotationRevisionsCount = globalAnnotationRevisionsCount
}
