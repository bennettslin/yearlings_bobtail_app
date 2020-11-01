import React from 'react'
import Anchor from '../Anchor'
import './style'

const Pitch = () => {
    const handlePitchClick = () => {
        // TODO: Analytics.
    }

    return (
        <div {...{ className: 'Pitch' }} >
            {'Take a look at our '}
            <Anchor
                {...{
                    to: '/Pitch',
                    text: 'startup pitch!',
                    analyticsIdentifier: 'pitch',
                    handleAnchorClick: handlePitchClick
                }}
            />
        </div>
    )
}

export default Pitch
