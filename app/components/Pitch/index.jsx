import React from 'react'
import Anchor from '../Anchor'
import './style'

const Pitch = () => {
    const handlePitchClick = () => {
        // TODO: Analytics.
    }

    return (
        <div {...{ className: 'Pitch' }} >
            {`If you're interested in working with us, check out `}
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
