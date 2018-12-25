import album from 'album'

export const getGlobalAnnotationObject = (globalIndex) => {
    const { globalAnnotationIndices } = album
    return globalAnnotationIndices[globalIndex]
}
