import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import cx from 'classnames'

import Style from 'components/Style/Style'
import DynamicStyling from 'components/Style/DynamicStyling'

import { getVerseDurationForVerseIndex } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getSelectedChildSelector } from './verseTrackerHelper'

const mapStateToProps = ({
    renderableStore: {
        renderableSongIndex
    }
}) => ({
    renderableSongIndex
})

class VerseTrackerStyle extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        inUnit: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        inSlider: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
            renderableSongIndex,
            verseIndex,
            inUnit,
            inVerseBar,
            inSlider
        } = this.props,

        verseDuration = getVerseDurationForVerseIndex(
            renderableSongIndex,
            verseIndex
        ),

        selectedChildSelector = getSelectedChildSelector({
            verseIndex,
            inUnit,
            inVerseBar,
            inSlider
        }),

        transitionedStyle =
            inSlider ?
                'left' :
                'top'

        if (verseIndex === 0) {
            console.error(renderableSongIndex, verseIndex, verseDuration)
        }

        return (
            <Style
                className={cx(
                    'VerseTrackerStyle',
                    `verseDuration__${verseDuration}`
                )}
            >
                <DynamicStyling
                    {...{
                        parentPrefixes: [
                            'RM__isPlaying',
                            'RM__canMainRender'
                        ],
                        childPrefixes: [
                            selectedChildSelector
                        ],
                        style: {
                            transition:
                                `${transitionedStyle} ${verseDuration}s linear`
                        }
                    }}
                />
            </Style>
        )
    }
}

export default connect(mapStateToProps)(VerseTrackerStyle)
