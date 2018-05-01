// Static field that shows the song scenes in the slider. Probably admin only.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getCursorStatusClassName } from '../../../helpers/formatHelper'
import { getComponentShouldUpdate } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

class SliderVerse extends Component {

    static propTypes = {
        // From Redux.
        renderReadySongIndex: PropTypes.number.isRequired,

        // From VerseController.
        isOnCursor: PropTypes.bool.isRequired,
        isAfterCursor: PropTypes.bool.isRequired,
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
                    // TODO: Possible to update without selected song index?
                    'renderReadySongIndex',

                    'isOnCursor',
                    'isAfterCursor',
                    'isInteractivated',

                    'totalTime',
                    'verseIndex',
                    'verseTime'
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const { isOnCursor,
                isAfterCursor,
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

            cursorStatusClassName =
                getCursorStatusClassName({
                    isOnCursor,
                    isAfterCursor
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

                    /**
                     * Unlike Verse, SliderVerse is always interactable, so we
                     * will manually add this class.
                     */
                    'verse__interactable',

                    // onCursor, beforeCursor, or afterCursor.
                    `verse__${cursorStatusClassName}`,

                    { 'verse__interactivated': isInteractivated }
                )}
                style={verseStyle}
            />
        )
    }
}

export default connect(mapStateToProps)(SliderVerse)
