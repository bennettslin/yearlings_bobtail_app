// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getFormattedTime } from 'helpers/format'

const mapStateToProps = ({
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
    }
}) => ({
    isSelectedLogue,
    selectedTime,
    isSliderMoving,
    sliderTime,
    isActivated,
    activatedTime
})

class PlayTimer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTime: PropTypes.number.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        sliderTime: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
        activatedTime: PropTypes.number.isRequired
    }

    render() {
        const {
            isSelectedLogue,
            selectedTime,
            isSliderMoving,
            sliderTime,
            isActivated,
            activatedTime
        } = this.props

        let time = selectedTime

        if (isSliderMoving) {
            time = sliderTime
        }

        if (isActivated) {
            time = activatedTime
        }

        return !isSelectedLogue && (
            <div className={cx(
                'PlayTimer',
                'flexCentreContainer',
                'abF'
            )}>
                {getFormattedTime(time)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(PlayTimer)
