// Button to toggle between left and right columns.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import EarColumnDispatcher from '../../../../dispatchers/EarColumnDispatcher'
import Button from '../../../Button'

import { populateRefs } from 'helpers/ref'

import { LYRIC_COLUMN_TOGGLE_KEY } from 'constants/access'
import { LYRIC_EAR_BUTTON_KEY } from 'constants/buttons'
import { EAR_COLUMN_KEYS } from 'constants/lyrics'

const mapStateToProps = ({
    transientStore: { isEarShown },
    songStore: { earColumnIndex }
}) => ({
    isEarShown,
    earColumnIndex
})

class LyricToggleEar extends PureComponent {

    static propTypes = {
    // Through Redux.
        isEarShown: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired
    }

    handleDoublespeakerClick = () => {
        this.dispatchEarColumn()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            isEarShown,
            earColumnIndex
        } = this.props

        return isEarShown && (
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
                        EAR_COLUMN_KEYS[earColumnIndex],
                        accessKey: LYRIC_COLUMN_TOGGLE_KEY,
                        handleButtonClick: this.handleDoublespeakerClick
                    }}
                />
                <EarColumnDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleEar)
