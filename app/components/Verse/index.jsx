// Container for lyric audio button and all lines of a single verse.
// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ActivatedVerseDispatcher from '../../dispatchers/Activated/Verse'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import VerseLines from './Lines'
import { VERSE_SCROLL } from '../../constants/scroll'
import './style'

const Verse = forwardRef(({
    logicSelectors,
    verseClassName,
    children,
    ...other

}, ref) => {
    const
        activateVerse = useRef(),
        stopPropagation = useRef(),
        {
            inVerseBar,
            verseIndex,
            verseObject
        } = other,
        {
            lyric,
            lyricCentre
        } = verseObject,
        isInteractable = Number.isFinite(verseIndex) && !inVerseBar

    const onClick = e => {
        logEvent({ e, componentName: `Verse ${verseIndex}` })

        // Allow clicks on interactable verses.
        if (isInteractable) {
            activateVerse.current.activateVerseIndex(verseIndex)
            stopPropagation.current(e)
        }
    }

    const setRef = node => {
        /**
         * Verses without indices do not get refs passed. It's not possible to
         * only call this function in indexed verses, for some reason.
         */
        if (ref) {
            ref.current = ref.current || {}
            ref.current[verseIndex] = node
        }
    }

    return (
        <>
            <div
                {...{
                    key: verseIndex,
                    ref: setRef,
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
                    onClick
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
            <ActivatedVerseDispatcher {...{ ref: activateVerse }} />
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </>
    )
})

Verse.propTypes = {
    logicSelectors: PropTypes.string,
    verseClassName: PropTypes.string,
    verseObject: PropTypes.object.isRequired,
    verseIndex: PropTypes.number,
    inVerseBar: PropTypes.bool,
    children: PropTypes.node
}

export default memo(Verse)
