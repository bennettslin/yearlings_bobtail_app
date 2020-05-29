// Button to toggle between left and right columns.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import EarColumnDispatcher from '../../../../dispatchers/EarColumn'
import Button from '../../../Button'
import TipsHand from '../../../Tips/Hand'
import { LYRIC_COLUMN_TOGGLE_KEY } from '../../../../constants/access'
import { LYRIC_EAR_BUTTON_KEY } from '../../../../constants/buttons'
import { EAR_COLUMN_KEYS } from '../../../../constants/lyrics'
import { DOUBLESPEAKER } from '../../../../constants/tips'
import { IS_EAR_SHOWN_SELECTOR } from '../../../../redux/transient/selectors'
import { EAR_COLUMN_INDEX_SELECTOR } from '../../../../redux/selected/selectors'
import './style'

const mapStateToProps = state => {
    const {
            viewportStore: { isDesktopWidth }
        } = state,
        isEarShown = IS_EAR_SHOWN_SELECTOR(state),
        earColumnIndex = EAR_COLUMN_INDEX_SELECTOR(state)

    return {
        isEarShown,
        earColumnIndex,
        isDesktopWidth
    }
}

class LyricToggleEar extends PureComponent {

    static propTypes = {
    // Through Redux.
        isEarShown: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired
    }

    handleDoublespeakerClick = () => {
        this.dispatchEarColumn()
    }

    getDispatchEarColumn = dispatch => {
        this.dispatchEarColumn = dispatch
    }

    render() {
        const {
                isEarShown,
                earColumnIndex,
                isDesktopWidth
            } = this.props,

            buttonIdentifier = EAR_COLUMN_KEYS[earColumnIndex]

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
                            buttonIdentifier,
                            accessKey: LYRIC_COLUMN_TOGGLE_KEY,
                            handleButtonClick: this.handleDoublespeakerClick
                        }}
                    />
                    <TipsHand
                        {...{
                            tipType: DOUBLESPEAKER,
                            reverse: isDesktopWidth
                        }}
                    />
                    <EarColumnDispatcher {...{ ref: this.getDispatchEarColumn }} />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleEar)
