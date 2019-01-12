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
    viewportStore: { isDesktopWidth },
    lyricStore: { lyricSongIndex }
}) => ({
    isDesktopWidth,
    lyricSongIndex
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
        isDesktopWidth: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,

        // From parent.
        verseObject: PropTypes.object.isRequired,
        verseIndex: PropTypes.number,

        inVerseBar: PropTypes.bool.isRequired,

        setVerseRef: PropTypes.func
    }

    _handleInteractivatableClick = (e) => {
        logEvent('Verse', e)

        /**
         * TODO: Now that we're preventing verse from being interactive in
         * mobile, this is kind of messy. Ideally, we should have a single
         * parent element handle all verse interaction and own all needed
         * children, including nav button and dispatcher.
         */
        const { isDesktopWidth } = this.props

        // Allow clicks on interactable verses.
        if (isDesktopWidth && this.getIsInteractable()) {
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
                lyricSongIndex,
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
                    onClick: handleInteractivatableClick
                }}
            >
                {children}
                <VerseLines {...other} />
            </div>
        )
    })

VerseView.propTypes = verseViewPropTypes

export default connect(mapStateToProps)(Verse)
