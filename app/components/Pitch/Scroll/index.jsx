// Section to show pitch to labels and press.
import React from 'react'
import cx from 'classnames'
import PitchTitle from './Title'
import PitchImage from './Image'
import PitchText from './Text'
import './style'

const PitchScroll = () => (
    <div
        {...{
            className: cx(
                'PitchScroll'
            )
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

export default PitchScroll
