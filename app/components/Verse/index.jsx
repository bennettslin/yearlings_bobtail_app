import React, { forwardRef, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../DidMountHoc'
import ActivatedVerseDispatcher from '../../dispatchers/Activated/Verse'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import getVerseHoc from '../VerseHoc'
import VerseLines from './Lines'
import { VERSE_SCROLL } from '../../constants/scroll'
import './style'

const Verse = forwardRef(({
    didMount,
    className,
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
            verseObject,
        } = other,
        {
            lyric,
            lyricCentre,
        } = verseObject,
        isInteractable = Number.isFinite(verseIndex) && !inVerseBar

    const onClick = e => {
        logEvent('Verse')

        // Allow clicks on interactable verses.
        if (isInteractable) {
            activateVerse.current.index(verseIndex)
            stopPropagation.current(e)
        }
    }

    const setRef = node => {
        /**
         * Verses without indices do not get refs passed. It's not possible to
         * only call this function in indexed verses, for some reason.
         */
        if (ref) {
            ref.current = ref.current || { anchor: {}, verse: {} }
            ref.current.verse[verseIndex] = node
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

                        didMount && [
                            inVerseBar ? 'Verse__inBar' : 'Verse__inLyric',

                            Number.isFinite(verseIndex) &&
                                `${VERSE_SCROLL}__${verseIndex}`,

                            // title, even, odd, inSide.
                            verseClassName && `verse__${verseClassName}`,
                            isInteractable && 'Verse__interactable',

                            className,
                        ],
                    ),
                    onClick,
                }}
            >
                <VerseLines
                    {...{
                        ref,
                        isDoublespeakerLine: !lyric && !lyricCentre,
                        ...other,
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
    didMount: PropTypes.bool.isRequired,
    className: PropTypes.string,
    verseClassName: PropTypes.string,
    verseObject: PropTypes.object.isRequired,
    verseIndex: PropTypes.number,
    inVerseBar: PropTypes.bool,
    children: PropTypes.node,
}

export default memo(getDidMountHoc(getVerseHoc(Verse)))
