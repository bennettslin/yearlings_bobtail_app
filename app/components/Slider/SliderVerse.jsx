// Static field that shows the song scenes in the slider. Probably admin only.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSliderStatusClassName } from '../../helpers/formatHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    isSliderTouched,
    renderReadySongIndex
}) => ({
    isSliderTouched,
    renderReadySongIndex
})

class SliderVerse extends Component {

    static propTypes = {

        // From VerseController.
        isSelected: PropTypes.bool.isRequired,
        isAfterSelected: PropTypes.bool.isRequired,
        isSliderSelected: PropTypes.bool.isRequired,
        isAfterSliderSelected: PropTypes.bool.isRequired,
        isInteractivated: PropTypes.bool.isRequired,

        totalTime: PropTypes.number.isRequired,
        verseIndex: PropTypes.number.isRequired,
        verseTime: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isSliderTouched',

                    // TODO: Possible to update without selected song index?
                    'renderReadySongIndex',

                    'isSelected',
                    'isAfterSelected',
                    'isSliderSelected',
                    'isAfterSliderSelected',
                    'isInteractivated',
                    'totalTime',
                    'verseIndex',
                    'verseTime'
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const { isSliderTouched,
                isSelected,
                isSliderSelected,
                isAfterSliderSelected,
                isInteractivated,
                totalTime,
                verseIndex,
                verseTime } = this.props

        // Don't show title verse.
        if (verseTime < 0) {
            return null
        }

        const verseWidth =
                (totalTime - verseTime) / totalTime * 100,

            verseStyle = {
                width: `${verseWidth}%`
            },

            isOdd = verseIndex % 2,

            sliderStatusClassName =
                getSliderStatusClassName({
                    isSliderTouched,
                    isSliderSelected,
                    isAfterSliderSelected
                })

        return (
            <div
                key={verseIndex}
                className={cx(
                    'SliderVerseBar',
                    'Slider__dynamicBar',

                    isOdd ?
                        'verse__odd' :
                        'verse__even',

                    // Unlike Verse, SliderVerse is always interactable.
                    'verse__interactable',

                    { 'verse__selected': isSelected,
                      'verse__interactivated': isInteractivated },

                    // onSlider, beforeSlider, or afterSlider.
                    sliderStatusClassName &&
                        `verse__${sliderStatusClassName}`

                    // Bogus class name for now.
                    // `SliderVerseBar__stanza__${stanzaType}`
                )}
                style={verseStyle}
            />
        )
    }
}

export default connect(mapStateToProps)(SliderVerse)
