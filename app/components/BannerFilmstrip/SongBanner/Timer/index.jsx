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
    }
}) => ({
    isSelectedLogue,
    selectedTime,
    isSliderMoving,
    sliderTime
})

class PlayTimer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTime: PropTypes.number.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        sliderTime: PropTypes.number.isRequired
    }

    render() {
        const {
            isSelectedLogue,
            selectedTime,
            isSliderMoving,
            sliderTime
        } = this.props

        let displayedTime = selectedTime

        if (isSliderMoving) {
            displayedTime = sliderTime
        }

        return !isSelectedLogue && (
            <div className={cx(
                'PlayTimer',
                'flexCentreContainer',
                'abF'
            )}>
                {getFormattedTime(displayedTime)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(PlayTimer)
