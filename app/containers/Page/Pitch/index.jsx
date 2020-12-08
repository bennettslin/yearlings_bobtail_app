import React from 'react'
import Pitch from '../../../components/Pitch'

const getPitchPageComponent = (pagePitchIndex = 1) => {
    /**
     * This returns the same component for each page, differing only by pitch
     * index. Extracting into a getter function to avoid repeating code.
     */
    const PitchPageComponent = () => {
        return (
            <Pitch {...{ pagePitchIndex }} />
        )
    }

    return PitchPageComponent
}

export default getPitchPageComponent
