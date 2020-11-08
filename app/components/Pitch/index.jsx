import React from 'react'
import Anchor from '../Anchor'
import './style'

const Pitch = () => {
    const handlePitchClick = () => {
        // TODO: Analytics.
    }

    return (
        <div {...{ className: 'Pitch' }} >
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

export default Pitch
