// Button to collapse and expand lyric column in mobile widths.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import LyricDispatcher from '../../../../handlers/Lyric/Dispatcher'
import {
    IS_HEIGHTLESS_LYRIC_SELECTOR,
    IS_LYRIC_EXPANDABLE_SELECTOR
} from '../../../../redux/responsive/selectors'
import Button from '../../../Button'
import TipsHand from '../../../Tips/Hand'
import { LYRIC_SECTION_EXPAND_KEY } from '../../../../constants/access'
import { LYRIC_EXPAND_BUTTON_KEY } from '../../../../constants/buttons'
import { LYRIC_EXPAND } from '../../../../constants/tips'
import { IS_LYRIC_EXPANDED_SELECTOR } from '../../../../redux/toggle/selectors'
import './style'

const mapStateToProps = state => {
    const
        isLyricExpandable = IS_LYRIC_EXPANDABLE_SELECTOR(state),
        isHeightlessLyric = IS_HEIGHTLESS_LYRIC_SELECTOR(state),
        isLyricExpanded = IS_LYRIC_EXPANDED_SELECTOR(state)

    return {
        isHeightlessLyric,
        isLyricExpandable,
        isLyricExpanded
    }
}

class LyricToggleExpand extends PureComponent {

    static propTypes = {
    // Through Redux.
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,

        // From parent.
        inMain: PropTypes.bool
    }

    handleLyricClick = () => {
        this.dispatchLyricExpand()
    }

    getDispatchLyricExpand = dispatch => {
        this.dispatchLyricExpand = dispatch
    }

    render() {
        const {
                isHeightlessLyric,
                isLyricExpanded,
                isLyricExpandable,
                inMain
            } = this.props,

            // Render button in main if lyric column is heightless.
            shouldRender =
                Boolean(inMain) === (isHeightlessLyric && !isLyricExpanded)

        return (
            <CSSTransition
                appear
                mountOnEnter
                unmountOnExit
                {...{
                    in: isLyricExpandable && shouldRender,
                    timeout: 200,
                    classNames: {
                        enterActive: 'LyricToggle__shown',
                        enterDone: 'LyricToggle__shown'
                    }
                }}
            >
                <div className={cx(
                    'LyricToggleExpand',
                    'LyricToggle',
                    inMain ?
                        'LyricToggleExpand__inMain' :
                        'LyricToggleExpand__inLyric',
                    'length__buttonLarge'
                )}>
                    <Button
                        isLargeSize
                        {...{
                            buttonName: LYRIC_EXPAND_BUTTON_KEY,
                            buttonIdentifier: isLyricExpanded,
                            accessKey: LYRIC_SECTION_EXPAND_KEY,
                            handleButtonClick: this.handleLyricClick
                        }}
                    />
                    <TipsHand {...{ tipType: LYRIC_EXPAND }} />
                    <LyricDispatcher {...{ ref: this.getDispatchLyricExpand }} />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleExpand)
