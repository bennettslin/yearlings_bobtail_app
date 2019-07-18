import album from 'album'

export const getGlobalAnnotation = (globalIndex) => {
    const { globalAnnotationIndices } = album
    return globalAnnotationIndices[globalIndex]
}
