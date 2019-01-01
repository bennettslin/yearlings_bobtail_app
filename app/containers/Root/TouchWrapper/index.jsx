/**
 * TODO: Temporary wrapper for remaining class names. Slowly separate them out.
 * Not high priority work, though.
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TouchWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
            isAutoScroll,
            isSliderTouched,
            isSliderMoving,
            interactivatedVerseIndex,
            children
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'TouchWrapper',

                        !isAutoScroll &&
                            'TW__manualScroll',

                        isSliderTouched &&
                            'TW__sliderTouched',

                        // Relevant to verse index classes.
                        isSliderMoving ?
                            'TW__sliderMoving' :
                            'TW__sliderNotMoving',

                        interactivatedVerseIndex >= 0 &&
                            'TW__verseActive',

                        // Make it easier to override this selector.
                        !isSliderMoving &&
                        interactivatedVerseIndex < 0 &&
                            'TW__verseCanHover'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    sessionStore: { interactivatedVerseIndex },
    toggleStore: { isAutoScroll },
    sliderStore: {
        isSliderTouched,
        isSliderMoving
    }
}) => ({
    isAutoScroll,
    isSliderTouched,
    isSliderMoving,
    interactivatedVerseIndex
})

export default connect(mapStateToProps)(TouchWrapper)
