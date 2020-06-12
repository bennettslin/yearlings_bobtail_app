// Button to select book or song in nav section.
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../../Button'
import NavCharacter from './Character'
import NavButtonTitle from './Title'
import { ENTER } from '../../../../../constants/access'
import {
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY
} from '../../../../../constants/buttons'
import { mapIsCarouselNavShowable } from '../../../../../redux/carousel/selectors'
import { mapSelectedAnnotationIndex } from '../../../../../redux/selected/selectors'
import './style'

const NavButton = ({
    isAccessed,
    isSelected,
    isInShownColumn,
    isToggle,
    bookIndex,
    songIndex,
    handleButtonClick

}) => {
    const
        isCarouselNavShowable = useSelector(mapIsCarouselNavShowable),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),

        isBook = Number.isFinite(bookIndex),

        buttonIdentifier = isBook ? bookIndex : songIndex,

        // Hard-coding indices because I'm lazy.
        isLeftmost = bookIndex === 0 || songIndex === 0,
        isRightmost = bookIndex === 1 || songIndex === 19,

        isEnabled =
            isCarouselNavShowable &&
            (
                isInShownColumn ||
                isLeftmost ||
                isRightmost
            ),

        isNavigable =
            !isToggle
            && isCarouselNavShowable
            && !selectedAnnotationIndex

    const _handleButtonClick = () => {
        if (isCarouselNavShowable) {
            // Select song or logue.
            if (Number.isFinite(songIndex)) {
                handleButtonClick(songIndex)

            // Select book column.
            } else {
                handleButtonClick()
            }
        }
    }

    return (
        <div
            className={cx(
                'NavButton'
            )}
        >
            <Button
                {...{
                    buttonName: isBook ?
                        NAV_BOOK_BUTTON_KEY :
                        NAV_SONG_BUTTON_KEY,
                    buttonIdentifier,
                    isDisabled: !isEnabled,
                    isClickDisabled: isSelected,
                    accessKey: isToggle ? '' : ENTER,
                    isAccessed:
                        isAccessed &&
                        isNavigable,
                    handleButtonClick: _handleButtonClick,
                    inanimateChild: (
                        <NavButtonTitle {...{
                            bookIndex,
                            songIndex,
                            isSelected
                        }} />
                    )
                }}
            >
                <NavCharacter
                    {...{
                        bookIndex,
                        songIndex,
                        isSelected
                    }}
                />
            </Button>
        </div>
    )
}

NavButton.propTypes = {
    isToggle: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isInShownColumn: PropTypes.bool,

    bookIndex: PropTypes.number,
    songIndex: PropTypes.number,
    handleButtonClick: PropTypes.func.isRequired
}

export default memo(NavButton)
