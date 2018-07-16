/**
 * Button shown only when verse is interactivated. If verse is already selected,
 * it toggles play. Otherwise, it navigates to that verse.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../../Button/Button'

import { getSongsNotLoguesCount } from '../../../helpers/dataHelper'
import { getValueInBitNumber } from '../../../helpers/bitHelper'
import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'
import { getVerseAudioIconText } from './verseAudioHelper'

import { NAVIGATION_ENTER_KEY } from '../../../constants/access'

const mapStateToProps = ({
    isPlaying,
    canLyricRender,
    renderableStore,
    canPlayThroughs
}) => ({
    isPlaying,
    canLyricRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    canPlayThroughs
})

class VerseAudioButton extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        isInteractivated: PropTypes.bool.isRequired,
        isOnCursor: PropTypes.bool.isRequired,
        isAfterCursor: PropTypes.bool.isRequired,
        handleLyricPlay: PropTypes.func.isRequired,
        handleLyricVerseSelect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleAudioButtonClick = this._handleAudioButtonClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                renderableSongIndex: true
            },
            checkIsShallowEqual: {
                isPlaying: true,
                canPlayThroughs: true
            },
            onlyOnCondition: nextProps.isOnCursor
        })
    }

    _handleAudioButtonClick(e) {

        if (this.props.isInteractivated) {

            const { isOnCursor,
                    verseIndex,
                    handleLyricPlay,
                    handleLyricVerseSelect } = this.props

            // If verse is selected, audio button will toggle play.
            if (isOnCursor) {
                handleLyricPlay(e)

            // Otherwise, audio button will select verse.
            } else {
                handleLyricVerseSelect(e, verseIndex)
            }
        }
    }

    render() {
        const { isInteractivated,
                isOnCursor,
                renderableSongIndex,
                canPlayThroughs } = this.props,

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: renderableSongIndex
            }),

            /**
             * If interactivated, disable only if it's selected and song can't
             * play through.
             */
            isEnabled = isInteractivated && (songCanPlayThrough || !isOnCursor),

            // TODO: Make this a real icon, of course.
            iconText = !songCanPlayThrough && isOnCursor ?
                'x' : getVerseAudioIconText(this.props)

        return (
            <div className={cx(
                'VerseAudioButton',
                isInteractivated && 'VerseAudioButton__interactivated',
                'padding__verseInLyric',
                'flexCentreContainer'
            )}>
                <Button
                    isSmallSize
                    buttonName={isOnCursor ? 'audioPlay' : 'audioSelect'}
                    accessKey={NAVIGATION_ENTER_KEY}
                    showAccessIconIfAccessOn={isEnabled}
                    isDisabled={!isEnabled}
                    temporaryText={iconText}
                    handleButtonClick={this._handleAudioButtonClick}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(VerseAudioButton)
