// Button to toggle between left and right columns.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../../Button'

import { LYRIC_SCROLL_TOGGLE_KEY } from 'constants/access'
import { LYRIC_SCROLL_BUTTON_KEY } from 'constants/buttons'

class LyricToggleScroll extends PureComponent {

    static propTypes = {
        // From parent.
        handleScrollToSelectedVerse: PropTypes.func.isRequired
    }

    _handleScrollClick = () => {
        this.props.handleScrollToSelectedVerse(true)
    }

    render() {
        return (
            <div className={cx(
                'LyricToggleScroll',
                'LyricToggle',
                'LyricToggle__inLyric',
                'length__buttonLarge'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: LYRIC_SCROLL_BUTTON_KEY,
                        buttonIdentifier: 'auto',
                        accessKey: LYRIC_SCROLL_TOGGLE_KEY,
                        handleButtonClick: this._handleScrollClick
                    }}
                />
            </div>
        )
    }
}

export default LyricToggleScroll
