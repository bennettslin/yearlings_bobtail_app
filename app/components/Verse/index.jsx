// Container for lyric audio button and all lines of a single verse.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import ActivatedVerseDispatcher from '../../dispatchers/Activated/Verse'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import VerseLines from './Lines'
import { VERSE_SCROLL } from '../../constants/scroll'
import { mapLyricSongIndex } from '../../redux/lyric/selectors'
import './style'

const mapStateToProps = state => {
    const lyricSongIndex = mapLyricSongIndex(state)

    return {
        lyricSongIndex
    }
}

class Verse extends PureComponent {

    static defaultProps = {
        inVerseBar: false
    }

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired,

        // From parent.
        logicSelectors: PropTypes.string,
        verseClassName: PropTypes.string,
        verseObject: PropTypes.object.isRequired,
        verseIndex: PropTypes.number,
        inVerseBar: PropTypes.bool.isRequired,
        setVerseChild: PropTypes.func,
        children: PropTypes.node
    }

    _handleInteractivatableClick = e => {
        const { verseIndex } = this.props

        logEvent({ e, componentName: `Verse ${verseIndex}` })

        // Allow clicks on interactable verses.
        if (this.getIsInteractable()) {
            this.stopPropagation(e)
            this.activateVerseIndex(verseIndex)
        }
    }

    getIsInteractable() {
        const {
            inVerseBar,
            verseIndex
        } = this.props

        return Number.isFinite(verseIndex) && !inVerseBar
    }

    setVerseElement = node => {
        if (this.getIsInteractable()) {
            this.props.setVerseChild({
                node,
                index: this.props.verseIndex
            })
        }
    }

    getActivateVerse = dispatch => {
        if (dispatch) {
            this.activateVerseIndex = dispatch.activateVerseIndex
        }
    }

    getStopPropagation = dispatch => {
        this.stopPropagation = dispatch
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                logicSelectors,
                verseClassName,
                lyricSongIndex,
                setVerseChild,
                dispatch,
                children,
                /* eslint-enable no-unused-vars */

                ...other
            } = this.props,

            {
                inVerseBar,
                verseIndex,
                verseObject
            } = other,

            {
                lyric,
                lyricCentre
            } = verseObject,

            isInteractable = this.getIsInteractable()

        return (
            <>
                <div
                    {...{
                        key: isInteractable ? verseIndex : undefined,
                        ref: this.setVerseElement,
                        className: cx(
                            'Verse',

                            inVerseBar ? 'Verse__inBar' : 'Verse__inLyric',

                            Number.isFinite(verseIndex) &&
                                `${VERSE_SCROLL}__${verseIndex}`,

                            // title, even, odd, inSide.
                            verseClassName && `verse__${verseClassName}`,
                            isInteractable && 'Verse__interactable',

                            // 'verseColour__hoverParent',

                            logicSelectors
                        ),
                        onClick: this._handleInteractivatableClick
                    }}
                >
                    <VerseLines
                        {...{
                            isDoublespeakerLine: !lyric && !lyricCentre,
                            ...other
                        }}
                    />
                    {children}
                </div>
                <ActivatedVerseDispatcher {...{ ref: this.getActivateVerse }} />
                <StopPropagationDispatcher {...{ ref: this.getStopPropagation }} />
            </>
        )
    }
}

export default connect(mapStateToProps)(Verse)
