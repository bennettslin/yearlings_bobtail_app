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
        isActivated: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
            isAutoScroll,
            isSliderTouched,
            isSliderMoving,
            isActivated,
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
                        isSliderMoving &&
                            'TW__sliderMoving',

                        isActivated &&
                            'TW__verseActive',

                        (isSliderMoving || isActivated) ?
                            'TW__lyricsLocked' :
                            'TW__lyricsUnlocked'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    activatedStore: { isActivated },
    toggleStore: { isAutoScroll },
    sliderStore: {
        isSliderTouched,
        isSliderMoving
    }
}) => ({
    isAutoScroll,
    isSliderTouched,
    isSliderMoving,
    isActivated
})

export default connect(mapStateToProps)(TouchWrapper)
