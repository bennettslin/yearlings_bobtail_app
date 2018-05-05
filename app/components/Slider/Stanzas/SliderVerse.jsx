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

        verseIndex: PropTypes.number.isRequired,
        relativeStartTime: PropTypes.number.isRequired,
        relativeTotalTime: PropTypes.number.isRequired,

        children: PropTypes.any
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

                    'verseIndex',
                    'relativeStartTime',
                    'relativeTotalTime'
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const { isOnCursor,
                isAfterCursor,
                isInteractivated,
                verseIndex,
                relativeStartTime,
                relativeTotalTime,
                children } = this.props

        const verseWidth =
                (relativeTotalTime - relativeStartTime) / relativeTotalTime * 100,

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
                    'SliderVerse',
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
            >
                {children}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderVerse)
