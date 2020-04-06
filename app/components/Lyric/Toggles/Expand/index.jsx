// Button to collapse and expand lyric column in mobile widths.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import CSSTransition from 'react-transition-group/CSSTransition'
import LyricDispatcher from '../../../../handlers/Lyric/Dispatcher'
import Button from '../../../Button'
import TipsHand from '../../../Tips/Hand'

import { populateRefs } from '../../../../helpers/ref'

import { LYRIC_SECTION_EXPAND_KEY } from '../../../../constants/access'
import { LYRIC_EXPAND_BUTTON_KEY } from '../../../../constants/buttons'
import { LYRIC_EXPAND } from '../../../../constants/tips'

const mapStateToProps = ({
    viewportStore: { deviceWidthIndex },
    responsiveStore: {
        isHeightlessLyric,
        isLyricExpandable
    },
    toggleStore: { isLyricExpanded }
}) => ({
    deviceWidthIndex,
    isHeightlessLyric,
    isLyricExpandable,
    isLyricExpanded
})

class LyricToggleExpand extends PureComponent {

    static propTypes = {
    // Through Redux.
        deviceWidthIndex: PropTypes.number.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,

        // From parent.
        inMain: PropTypes.bool
    }

    handleLyricClick = () => {
        this.dispatchLyricExpand()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
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
                    <LyricDispatcher {...{ getRefs: this._getRefs }} />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleExpand)
