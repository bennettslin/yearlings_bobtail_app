// Section to show pitch to labels and press.
import React, { forwardRef } from 'react'
import cx from 'classnames'
import PitchTitle from './Title'
import PitchImage from './Image'
import PitchText from './Text'
import './style'

const PitchScroll = forwardRef((props, ref) => (
    <div
        {...{
            className: cx(
                // Box shadow and gradient mask cannot be on same element.
                'PitchScroll__container',
                'abF'
            )
        }}
    >
        <div
            {...{
                ref,
                className: cx(
                    'PitchScroll',
                    'foN',
                    'gradientMask__pitch'
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
    </div>
))

export default PitchScroll
