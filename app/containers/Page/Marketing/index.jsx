import React from 'react'
import Marketing from '../../../components/Marketing'

const getMarketingPageComponent = (pagePitchIndex = 1) => {
    /**
     * This returns the same component for each page, differing only by pitch
     * index. Extracting into a getter function to avoid repeating code.
     */
    const MarketingPageComponent = () => {
        return (
            <Marketing {...{ pagePitchIndex }} />
        )
    }

    return MarketingPageComponent
}

export default getMarketingPageComponent
