import { REDO, REVIEW, REVISE } from '../../../containers/Annotations/constants/todos'

export const addAdminMetadata = (annotationsList, album) => {
    const
        todoAnnotationIndicesList = [],
        todoAnnotationTodos = []

    let todoAnnotationTodosCount = 0
    let todoAnnotationReviewsCount = 0
    let todoAnnotationRevisionsCount = 0
    let todoAnnotationRedosCount = 0

    annotationsList.forEach((annotations, songIndex) => {
        if (annotations) {
            annotations.forEach(annotation => {
                const { annotationIndex } = annotation

                if (annotation.todo) {
                    todoAnnotationTodosCount += 1
                }

                if (annotation.todo === REVIEW) {
                    todoAnnotationReviewsCount += 1
                } else if (annotation.todo === REVISE) {
                    todoAnnotationRevisionsCount += 1
                } else if (annotation.todo === REDO) {
                    todoAnnotationRedosCount += 1
                }

                todoAnnotationTodos.push(annotation.todo)

                todoAnnotationIndicesList.push({
                    songIndex,
                    annotationIndex,
                })
            })
        }
    })

    album.todoAnnotationIndicesList = todoAnnotationIndicesList
    album.todoAnnotationTodos = todoAnnotationTodos
    album.todoAnnotationTodosCount = todoAnnotationTodosCount
    album.todoAnnotationReviewsCount = todoAnnotationReviewsCount
    album.todoAnnotationRevisionsCount = todoAnnotationRevisionsCount
    album.todoAnnotationRedosCount = todoAnnotationRedosCount
}
