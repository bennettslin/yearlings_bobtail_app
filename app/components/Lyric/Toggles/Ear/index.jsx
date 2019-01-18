// Button to toggle between left and right columns.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import CSSTransition from 'react-transition-group/CSSTransition'
import EarColumnDispatcher from '../../../../dispatchers/EarColumnDispatcher'
import Button from '../../../Button'

import { populateRefs } from 'helpers/ref'

import { LYRIC_COLUMN_TOGGLE_KEY } from 'constants/access'
import { LYRIC_EAR_BUTTON_KEY } from 'constants/buttons'
import { EAR_COLUMN_KEYS } from 'constants/lyrics'

const mapStateToProps = ({
    transientStore: { isEarShown },
    selectedStore: { earColumnIndex }
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

        return (
            <CSSTransition
                appear
                mountOnEnter
                unmountOnExit
                {...{
                    in: isEarShown,
                    timeout: 200,
                    classNames: {
                        enterActive: 'LyricToggle__shown',
                        enterDone: 'LyricToggle__shown'
                    }
                }}
            >
                <div className={cx(
                    'LyricToggleEar',
                    'LyricToggle',
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
            </CSSTransition>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleEar)
