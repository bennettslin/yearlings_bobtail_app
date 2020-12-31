import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../Anchor'
import { toggleIsPitchShown } from '../../redux/toggle/action'
import './style'

const PitchAnchor = () => {
    const dispatch = useDispatch()

    const handleAnchorClick = () => {
        dispatch(toggleIsPitchShown())
    }

    return (
        <div {...{ className: 'PitchAnchor' }}>
            {`Interested in working with us? Please read `}
            <Anchor
                {...{
                    text: 'our pitch!',
                    analyticsIdentifier: 'pitch',
                    handleAnchorClick,
                }}
            />
        </div>
    )
}

export default PitchAnchor
