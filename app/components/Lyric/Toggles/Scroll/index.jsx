// Button to toggle between left and right columns.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import CSSTransition from 'react-transition-group/CSSTransition'
import ScrollVerseDispatcher from '../../../../dispatchers/ScrollVerse'
import Button from '../../../Button'
import TipsHand from '../../../Tips/Hand'
import { LYRIC_SCROLL_TOGGLE_KEY } from '../../../../constants/access'
import { LYRIC_SCROLL_BUTTON_KEY } from '../../../../constants/buttons'
import { AUTOSCROLL } from '../../../../constants/tips'
import { IS_AUTO_SCROLL_SELECTOR } from '../../../../redux/toggle/selectors'

const mapStateToProps = state => {
    const isAutoScroll = IS_AUTO_SCROLL_SELECTOR(state)

    return {
        isAutoScroll
    }
}

class LyricToggleScroll extends PureComponent {

    static propTypes = {
    // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired
    }

    _handleScrollClick = () => {
        this.dispatchScrollVerse(true)
    }

    getDispatchScrollVerse = dispatch => {
        this.dispatchScrollVerse = dispatch
    }

    render() {
        const { isAutoScroll } = this.props
        return (
            <CSSTransition
                appear
                mountOnEnter
                unmountOnExit
                {...{
                    in: !isAutoScroll,
                    timeout: 200,
                    classNames: {
                        enterActive: 'LyricToggle__shown',
                        enterDone: 'LyricToggle__shown'
                    }
                }}
            >
                <div className={cx(
                    'LyricToggleScroll',
                    'LyricToggle',
                    'length__buttonLarge'
                )}>
                    <Button
                        isLargeSize
                        {...{
                            buttonName: LYRIC_SCROLL_BUTTON_KEY,
                            accessKey: LYRIC_SCROLL_TOGGLE_KEY,
                            handleButtonClick: this._handleScrollClick
                        }}
                    />
                    <TipsHand reverse {...{ tipType: AUTOSCROLL }} />
                    <ScrollVerseDispatcher {...{ ref: this.getDispatchScrollVerse }} />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleScroll)
