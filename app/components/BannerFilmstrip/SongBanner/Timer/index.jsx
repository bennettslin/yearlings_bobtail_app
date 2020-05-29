// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import { getFormattedTime } from '../../../../helpers/format'
import {
    IS_ACTIVATED_SELECTOR,
    ACTIVATED_TIME_SELECTOR
} from '../../../../redux/activated/selectors'
import {
    IS_BANNER_HOVERING_SELECTOR,
    BANNER_HOVER_TIME_SELECTOR
} from '../../../../redux/banner/selectors'
import {
    IS_SELECTED_LOGUE_SELECTOR,
    SELECTED_TIME_SELECTOR
} from '../../../../redux/selected/selectors'
import './style'

const mapStateToProps = state => {
    const {
            sliderStore: {
                isSliderMoving,
                sliderTime
            }
        } = state,
        isActivated = IS_ACTIVATED_SELECTOR(state),
        activatedTime = ACTIVATED_TIME_SELECTOR(state),
        isBannerHovering = IS_BANNER_HOVERING_SELECTOR(state),
        bannerHoverTime = BANNER_HOVER_TIME_SELECTOR(state),
        isSelectedLogue = IS_SELECTED_LOGUE_SELECTOR(state),
        selectedTime = SELECTED_TIME_SELECTOR(state)

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
