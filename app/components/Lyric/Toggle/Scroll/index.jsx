// Button to toggle between left and right columns.

import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import ScrollVerseDispatcher from '../../../../dispatchers/ScrollVerseDispatcher'
import Button from '../../../Button'

import { populateRefs } from 'helpers/ref'

import { LYRIC_SCROLL_TOGGLE_KEY } from 'constants/access'
import { LYRIC_SCROLL_BUTTON_KEY } from 'constants/buttons'

class LyricToggleScroll extends PureComponent {

    _handleScrollClick = () => {
        this.dispatchScrollVerse(true)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
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
                <ScrollVerseDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default LyricToggleScroll
