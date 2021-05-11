// Button to select book or song in nav section.
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../../Button'
import ButtonCharacter from '../../../../Button/Character'
import { getSongIsLogue } from '../../../../../api/album/songs'
import { mapIsNavShowable } from '../../../../../redux/carousel/selector'
import { getButtonTitle, getIndexCharacter } from './helper'
import { mapSelectedAnnotationIndex } from '../../../../../redux/selected/selector'
import { ENTER } from '../../../../../constants/access'
import {
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
} from '../../../../../constants/buttons'
import './style'

const NavButton = ({
    isAccessed,
    isSelected,
    navStatus,
    isInShownColumn,
    isToggle,
    bookIndex,
    songIndex,
    handleButtonClick,

}) => {
    const
        isNavShowable = useSelector(mapIsNavShowable),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),

        isBook = Number.isFinite(bookIndex),

        buttonIdentifier = isBook ? bookIndex : songIndex,

        // Hard-coding indices because I'm lazy.
        isLeftmost = bookIndex === 0 || songIndex === 0,
        isRightmost = bookIndex === 1 || songIndex === 19,

        isEnabled =
            isNavShowable &&
            (
                isInShownColumn ||
                isLeftmost ||
                isRightmost
            ),

        isNavigable =
            !isToggle
            && isNavShowable
            && !selectedAnnotationIndex

    const _handleButtonClick = () => {
        if (isNavShowable) {
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
            {...{
                className: cx(
                    'NavButton',
                    navStatus === 0 && 'present__shared',
                    navStatus === -1 && !isSelected && 'past__shared',
                    navStatus === 1 && !isSelected && 'future__shared',
                ),
            }}
        >
            <Button
                {...{
                    buttonName: isBook ?
                        NAV_BOOK_BUTTON_KEY :
                        NAV_SONG_BUTTON_KEY,
                    buttonIdentifier,
                    isDisabled: !isEnabled,
                    isSelectedDisabled: isSelected,
                    accessKey: isToggle ? '' : ENTER,
                    isAccessed:
                        isAccessed &&
                        isNavigable,
                    handleButtonClick: _handleButtonClick,
                    buttonTitle: getButtonTitle(bookIndex, songIndex),
                }}
            >
                <ButtonCharacter
                    {...{
                        isSelected,
                        character: getIndexCharacter({
                            bookIndex,
                            songIndex,
                        }),
                        hasTextShadowLight: getSongIsLogue(songIndex),
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
    navStatus: PropTypes.number,
    isInShownColumn: PropTypes.bool,

    bookIndex: PropTypes.number,
    songIndex: PropTypes.number,
    handleButtonClick: PropTypes.func.isRequired,
}

export default memo(NavButton)
