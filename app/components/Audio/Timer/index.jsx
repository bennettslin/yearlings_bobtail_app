// Component to show the played audio time.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSongIsLogue } from 'helpers/dataHelper'
import { getFormattedTime } from 'helpers/formatHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    songStore: {
        selectedSongIndex,
        selectedTime
    }
}) => ({
    selectedSongIndex,
    selectedTime
})

class AudioTimer extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,

        // From parent.
        isTitleTimer: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {

        const {
                isTitleTimer,
                selectedSongIndex,
                selectedTime
            } = this.props,

            isLogue = getSongIsLogue(selectedSongIndex),

            {
                base,
                jiffy
            } = getFormattedTime(selectedTime, true)

        return !isLogue && (

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
                        {base}
                    </span>
                    <span className="AudioTimer__jiffy">
                        {jiffy}
                    </span>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AudioTimer)
