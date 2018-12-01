/**
 * Button that navigates to interactivated verse.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../../../Button'

import { ENTER } from 'constants/access'
import { AUDIO_NEXT_BUTTON_KEY } from 'constants/buttons'

class VerseNav extends PureComponent {

    static propTypes = {
        // From parent.
        verseIndex: PropTypes.number.isRequired,
        isInteractivated: PropTypes.bool.isRequired,
        handleVerseSelect: PropTypes.func.isRequired
    }

    _handleButtonClick = (e) => {
        const {
            verseIndex,
            handleVerseSelect
        } = this.props

        handleVerseSelect(e, verseIndex)
    }

    render() {
        const {
                isInteractivated

            } = this.props,

            /**
             * If interactivated, disable only if it's selected and song can't
             * play through.
             */
            isEnabled = isInteractivated

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
                    accessKey={ENTER}
                    showAccessIconIfAccessOn={isEnabled}
                    isDisabled={!isEnabled}
                    buttonIdentifier={false}
                    handleButtonClick={this._handleButtonClick}
                />
            </div>
        )
    }
}

export default VerseNav
