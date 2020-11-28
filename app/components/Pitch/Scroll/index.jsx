// Section to show pitch to labels and press.
import React, { forwardRef, useRef } from 'react'
import cx from 'classnames'
import PitchTitle from './Title'
import PitchImage from './Image'
import PitchText from './Text'
import './style'

const PitchScroll = forwardRef((props, ref) => {
    const pitchScrollElement = useRef()

    const setRef = node => {
        if (ref) {
            ref.current = node
        }
        pitchScrollElement.current = node
    }

    return (
        <div
            {...{
                ref: setRef,
                className: cx(
                    'PitchScroll',
                    'foN'
                ),
                tabIndex: -1
            }}
        >
            <PitchTitle />
            <div
                {...{
                    className: cx(
                        'PitchScroll__content'
                    )
                }}
            >
                <PitchImage />
                <PitchText />
            </div>
        </div>
    )
})

export default PitchScroll
