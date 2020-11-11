import React from 'react'
import Anchor from '../Anchor'
import './style'

const PitchAnchor = () => {
    const handlePitchClick = () => {
        // TODO: Analytics.
    }

    return (
        <div {...{ className: 'PitchAnchor' }} >
            {`Interested in working with us? Check out `}
            <Anchor
                {...{
                    to: '/Pitch',
                    text: 'our pitch!',
                    analyticsIdentifier: 'pitch',
                    handleAnchorClick: handlePitchClick
                }}
            />
        </div>
    )
}

export default PitchAnchor
