import { getArrayOfLength } from '../../helpers/general'

export const getMiddlePitchIndices = ({
    selectedPitchIndex,
    pitchSlideCount,
    isSingleMiddleIndex,
    isOnlyIndex,

}) => {
    const increment = isSingleMiddleIndex ? 1 : 0
    let middleIndex = selectedPitchIndex

    if (!isOnlyIndex) {
        if (selectedPitchIndex <= 3 - increment) {
            middleIndex = 4 - increment
        } else if (selectedPitchIndex >= pitchSlideCount - 2 + increment) {
            middleIndex = pitchSlideCount - 3 + increment
        } else {
            middleIndex = selectedPitchIndex
        }
    }

    return isSingleMiddleIndex ?
        // If device width is too narrow, return a single index.
        [middleIndex] :

        // Otherwise, return three indices.
        getArrayOfLength(3, middleIndex - 1)
}
