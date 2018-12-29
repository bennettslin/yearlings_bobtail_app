// Container for lyric audio button and all lines of a single verse.
import React, {
    memo, PureComponent, Fragment as ___
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import InteractivatedVerseDispatcher from '../../dispatchers/InteractivatedVerse'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'

import VerseLines from './Lines'

import { populateRefs } from 'helpers/ref'

import { VERSE_SCROLL } from 'constants/scroll'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex }
}) => ({
    renderedSongIndex
})

/*************
 * CONTAINER *
 *************/

class Verse extends PureComponent {

    static defaultProps = {
        inVerseBar: false
    }

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        verseObject: PropTypes.object.isRequired,
        verseIndex: PropTypes.number,

        inVerseBar: PropTypes.bool.isRequired,

        setVerseRef: PropTypes.func
    }

    _handleInteractivatableClick = (e) => {
        // Allow clicks on interactable verses.
        if (this.getIsInteractable()) {
            this.dispatchStopPropagation(e)
            this.dispatchInteractivatedVerseIndex(this.props.verseIndex)
        }
    }

    getIsInteractable() {
        const {
            inVerseBar,
            verseIndex
        } = this.props

        return !isNaN(verseIndex) && !inVerseBar
    }

    setVerseRef = (node) => {
        if (this.getIsInteractable()) {
            this.props.setVerseRef({
                node,
                index: this.props.verseIndex
            })
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                renderedSongIndex,
                setVerseRef,
                dispatch,
                /* eslint-enable no-unused-vars */

                ...other
            } = this.props,

            { verseObject } = other,

            {
                lyric,
                isCentre
            } = verseObject,

            isInteractable = this.getIsInteractable()

        return (
            <___>
                <VerseView {...other}
                    {...{
                        setRef: this.setVerseRef,
                        isInteractable,
                        isDoublespeakerLine: !lyric && !isCentre,
                        handleInteractivatableClick: this._handleInteractivatableClick
                    }}
                />
                <InteractivatedVerseDispatcher {...{ getRefs: this._getRefs }} />
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const verseViewPropTypes = {
    // From parent.
        logicSelectors: PropTypes.string,
        verseIndex: PropTypes.number,

        inVerseBar: PropTypes.bool.isRequired,
        isInteractable: PropTypes.bool.isRequired,

        handleInteractivatableClick: PropTypes.func,
        setRef: PropTypes.func,

        children: PropTypes.any
    },

    VerseView = memo(({

        // From controller.
        logicSelectors,
        verseClassName,
        isInteractable,

        handleInteractivatableClick,
        setRef,
        children,

        ...other
    }) => {

        const {
            inVerseBar,
            verseIndex
        } = other

        return (
            <div
                key={isInteractable ? verseIndex : undefined}
                {...{
                    ref: setRef,
                    className: cx(
                        'Verse',

                        inVerseBar ? 'Verse__inBar' : 'Verse__inLyric',

                        !isNaN(verseIndex) &&
                            `${VERSE_SCROLL}__${verseIndex}`,

                        // title, even, odd, inSide.
                        verseClassName && `verse__${verseClassName}`,
                        isInteractable && 'Verse__interactable',

                        'verseColour__hoverParent',

                        logicSelectors
                    ),
                    onClick: handleInteractivatableClick,
                    onTouchStart: handleInteractivatableClick
                }}
            >
                {children}
                <VerseLines {...other} />
            </div>
        )
    })

VerseView.propTypes = verseViewPropTypes

export default connect(mapStateToProps)(Verse)
