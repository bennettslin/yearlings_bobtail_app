import { getArrayOfLength } from '../../helpers/general'

export const getMiddlePitchIndices = ({
    selectedPitchIndex,
    pitchSlideCount,
}) => {
    let indexBase
    if (selectedPitchIndex <= 3) {
        indexBase = 3
    } else if (selectedPitchIndex >= pitchSlideCount - 2) {
        indexBase = pitchSlideCount - 4
    } else {
        indexBase = selectedPitchIndex - 1
    }

    return getArrayOfLength(3, indexBase)
}
