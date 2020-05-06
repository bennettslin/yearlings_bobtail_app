import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TouchWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        isScrolling: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        isActivated: PropTypes.bool.isRequired,
        isBannerHovering: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
            isAutoScroll,
            isScrolling,
            isSliderTouched,
            isSliderMoving,
            isActivated,
            isBannerHovering,
            children
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'TouchWrapper',

                        !isAutoScroll && 'TW__manualScroll',
                        isScrolling ? 'TW__isScrolling' : 'TW__isStationary',
                        isSliderTouched && 'TW__sliderTouched',
                        isSliderMoving && 'TW__sliderMoving',
                        isActivated && 'TW__verseActive',
                        isBannerHovering && 'TW__bannerHovering',

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
    scrollOverlayStore: { isScrolling },
    toggleStore: { isAutoScroll },
    sliderStore: {
        isSliderTouched,
        isSliderMoving
    },
    bannerStore: { isBannerHovering }
}) => ({
    isAutoScroll,
    isScrolling,
    isSliderTouched,
    isSliderMoving,
    isActivated,
    isBannerHovering
})

export default connect(mapStateToProps)(TouchWrapper)
