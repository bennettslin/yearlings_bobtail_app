// Component to show the played audio time.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getFormattedTime } from 'helpers/format'

const mapStateToProps = ({
    songStore: {
        isSelectedLogue,
        selectedTime
    }
}) => ({
    isSelectedLogue,
    selectedTime
})

class AudioTimer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTime: PropTypes.number.isRequired,

        // From parent.
        isTitleTimer: PropTypes.bool
    }

    render() {

        const {
                isTitleTimer,
                isSelectedLogue,
                selectedTime
            } = this.props,

            baseTime = getFormattedTime(selectedTime)

        return !isSelectedLogue && (

            <div className={cx(
                'AudioTimer',

                {
                    'AudioTimer__titleTimer': isTitleTimer,
                    'absoluteFullContainer': isTitleTimer
                },

                'flexCentreContainer'
            )}>
                <div className="AudioTimer__child">

                    <span className="AudioTimer__base">
                        {baseTime}
                    </span>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AudioTimer)
