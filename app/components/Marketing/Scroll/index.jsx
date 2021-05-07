// Section to show pitch to labels and press.
import React, { forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { mapPitchSegmentIndex } from '../../../redux/marketing/selector'
import './style'

const MarketingScroll = forwardRef(({ children }, ref) => {
    const pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    // TODO: Only in pitch page.
    useEffect(() => {
        // Scroll back to top upon page change.
        ref.current.scrollTop = 0
        logState('pitchSegmentIndex', pitchSegmentIndex)
    }, [pitchSegmentIndex])

    return (
        <div
            {...{
                className: cx(
                    'MarketingScroll',
                    'fCC',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        // Box shadow and gradient mask cannot be on same element.
                        'MarketingScroll__child',
                        'abF',
                    ),
                }}
            >
                <div
                    {...{
                        ref,
                        className: cx(
                            'MarketingScroll__grandchild',
                            'foN',
                            'gradientMask__scrollBottom',
                        ),
                        tabIndex: -1,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
})

MarketingScroll.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MarketingScroll
