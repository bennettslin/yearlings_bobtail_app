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
    }
}) => ({
    isSelectedLogue,
    selectedTime
})

class PlayTimer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTime: PropTypes.number.isRequired
    }

    render() {
        const {
            isSelectedLogue,
            selectedTime
        } = this.props

        return !isSelectedLogue && (
            <div className={cx(
                'PlayTimer'
            )}>
                {getFormattedTime(selectedTime)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(PlayTimer)
