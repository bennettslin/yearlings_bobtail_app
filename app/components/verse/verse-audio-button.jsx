/**
 * Button shown only when verse is interactivated. If verse is already selected,
 * it toggles play. Otherwise, it navigates to that verse.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { getSongsNotLoguesCount } from '../../helpers/data-helper'
import { getVerseAudioIconText } from '../../helpers/format-helper'
import { getValueInBitNumber } from '../../helpers/bit-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const mapStateToProps = ({
    isPlaying,
    renderReadySongIndex,
    canPlayThroughs
}) => ({
    isPlaying,
    renderReadySongIndex,
    canPlayThroughs
})

class VerseAudioButton extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        isInteractivated: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isAfterSelected: PropTypes.bool.isRequired,
        handleLyricPlay: PropTypes.func.isRequired,
        handleLyricVerseSelect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleAudioButtonClick = this._handleAudioButtonClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'verseIndex',
                    'isInteractivated',
                    'isSelected',
                    'isAfterSelected',
                    /**
                     * Don't need to update on renderReadySongIndex, as it's only
                     * needed to calculate whether song can play through when
                     * canPlayThroughs is changed.
                     */
                    {
                        staticProp: 'isSelected',
                        subUpdatingKey: 'isPlaying'
                    },
                    {
                        staticProp: 'isSelected',
                        subUpdatingKey: 'canPlayThroughs'
                    }
                ]
            })

        return componentShouldUpdate
    }

    _handleAudioButtonClick(e) {

        if (this.props.isInteractivated) {

            const { isSelected,
                    verseIndex,
                    handleLyricPlay,
                    handleLyricVerseSelect } = this.props

            // If verse is selected, audio button will toggle play.
            if (isSelected) {
                handleLyricPlay(e)

            // Otherwise, audio button will select verse.
            } else {
                handleLyricVerseSelect(e, verseIndex)
            }
        }
    }

    render() {
        const { isInteractivated,
                isSelected,
                renderReadySongIndex,
                canPlayThroughs } = this.props,

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: renderReadySongIndex
            }),

            /**
             * If interactivated, disable only if it's selected and song can't
             * play through.
             */
            isEnabled = isInteractivated && (songCanPlayThrough || !isSelected),

            // TODO: Make this a real icon, of course.
            iconText = !songCanPlayThrough && isSelected ?
                'x' : getVerseAudioIconText(this.props)

        return (
            <div className="verse-audio-button-block">
                <div className="verse-audio-button-child">
                    <Button
                        buttonName="verse-audio"
                        isCustomSize={true}
                        isOverflowShown={true}
                        isEnabled={isEnabled}
                        iconClass={isSelected ? 'audio-play-toggle' : 'audio-nav'}
                        iconText={iconText}
                        handleClick={this._handleAudioButtonClick}
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(VerseAudioButton)
