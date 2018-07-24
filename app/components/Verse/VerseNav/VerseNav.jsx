/**
 * Button that navigates to interactivated verse.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../Button/Button'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

import { NAVIGATION_ENTER_KEY } from '../../../constants/access'
import { AUDIO_NEXT_BUTTON_KEY } from '../../../constants/buttons'

class VerseNav extends Component {

    static propTypes = {
        // From parent.
        verseIndex: PropTypes.number.isRequired,
        isInteractivated: PropTypes.bool.isRequired,
        handleLyricVerseSelect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleAudioButtonClick = this._handleAudioButtonClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleAudioButtonClick(e) {
        const {
            verseIndex,
            handleLyricVerseSelect
        } = this.props

        handleLyricVerseSelect(e, verseIndex)
    }

    render() {
        const {
                isInteractivated,

            } = this.props,

            /**
             * If interactivated, disable only if it's selected and song can't
             * play through.
             */
            isEnabled = isInteractivated

            // TODO: Remove this once this logic is in CSS.
            // isAfterCursor = true,

            // TODO: Make this a real icon, of course.
            // iconText = isAfterCursor ? `\u23E9` : `\u23EA`


        return (
            <div className={cx(
                'VerseNav',
                isInteractivated && 'VerseNav__interactivated',
                'padding__verseInLyric',
                'flexCentreContainer'
            )}>
                <Button
                    isSmallSize
                    buttonName={AUDIO_NEXT_BUTTON_KEY}
                    accessKey={NAVIGATION_ENTER_KEY}
                    showAccessIconIfAccessOn={isEnabled}
                    isDisabled={!isEnabled}
                    buttonIdentifier={false}
                    handleButtonClick={this._handleAudioButtonClick}
                />
            </div>
        )
    }
}

export default VerseNav
