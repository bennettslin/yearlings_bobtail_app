// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getFormattedTime } from '../../../../helpers/format'

const mapStateToProps = state => {
    const {
        selectedStore: {
            isSelectedLogue,
            selectedTime
        },
        sliderStore: {
            isSliderMoving,
            sliderTime
        },
        activatedStore: {
            isActivated,
            activatedTime
        },
        bannerStore: {
            isBannerHovering,
            bannerHoverTime
        }
    } = state

    return {
        isSelectedLogue,
        selectedTime,
        isSliderMoving,
        sliderTime,
        isActivated,
        activatedTime,
        isBannerHovering,
        bannerHoverTime
    }
}

class SongBannerTimer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTime: PropTypes.number.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        sliderTime: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
        activatedTime: PropTypes.number.isRequired,
        isBannerHovering: PropTypes.bool.isRequired,
        bannerHoverTime: PropTypes.number.isRequired
    }

    render() {
        const {
            isSelectedLogue,
            selectedTime,
            isSliderMoving,
            sliderTime,
            isActivated,
            activatedTime,
            isBannerHovering,
            bannerHoverTime
        } = this.props

        let time = selectedTime

        if (isSliderMoving) {
            time = sliderTime
        }

        if (isActivated) {
            time = activatedTime
        }

        if (isBannerHovering) {
            time = bannerHoverTime
        }

        return !isSelectedLogue && (
            <div className={cx(
                'SongBannerTimer',
                'fCC',
                'abF'
            )}>
                {getFormattedTime(time)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SongBannerTimer)
