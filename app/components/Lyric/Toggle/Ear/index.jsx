// Button to toggle between left and right columns.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import LyricEarDispatcher from '../../../../dispatchers/LyricEarDispatcher'
import Button from '../../../Button'

import { LYRIC_COLUMN_TOGGLE_KEY } from 'constants/access'
import { LYRIC_EAR_BUTTON_KEY } from 'constants/buttons'
import { LYRIC_COLUMN_KEYS } from 'constants/lyrics'

const mapStateToProps = ({
    transientStore: { isDoublespeakerShown },
    sessionStore: { earIndex }
}) => ({
    isDoublespeakerShown,
    earIndex
})

class LyricToggleEar extends PureComponent {

    static propTypes = {
    // Through Redux.
        isDoublespeakerShown: PropTypes.bool.isRequired,
        earIndex: PropTypes.number.isRequired
    }

    handleDoublespeakerClick = () => {
        this.dispatchEar()
    }

    render() {
        const {
            isDoublespeakerShown,
            earIndex
        } = this.props

        return isDoublespeakerShown && (
            <div className={cx(
                'LyricToggleEar',
                'LyricToggle',
                'LyricToggle__inLyric',
                'length__buttonLarge'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: LYRIC_EAR_BUTTON_KEY,
                        buttonIdentifier:
                        LYRIC_COLUMN_KEYS[earIndex],
                        accessKey: LYRIC_COLUMN_TOGGLE_KEY,
                        handleButtonClick: this.handleDoublespeakerClick
                    }}
                />
                <LyricEarDispatcher {...{ getDispatch: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleEar)
