// Button to select book or song in nav section.
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
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
import { IS_CAROUSEL_NAV_SHOWABLE_SELECTOR } from '../../../../../redux/transient/selectors'
import { SELECTED_ANNOTATION_INDEX_SELECTOR } from '../../../../../redux/selected/selectors'
import './style'

const mapStateToProps = state => {
    const
        isCarouselNavShowable = IS_CAROUSEL_NAV_SHOWABLE_SELECTOR(state),
        selectedAnnotationIndex = SELECTED_ANNOTATION_INDEX_SELECTOR(state)

    return {
        isCarouselNavShowable,
        selectedAnnotationIndex
    }
}

/*************
 * CONTAINER *
 *************/

class NavButton extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselNavShowable: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        // From parents.
        isToggle: PropTypes.bool,
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool,
        isInShownColumn: PropTypes.bool,

        bookIndex: PropTypes.number,
        songIndex: PropTypes.number,
        handleButtonClick: PropTypes.func.isRequired
    }

    _handleButtonClick = () => {
        const {
            isCarouselNavShowable,
            songIndex,
            handleButtonClick
        } = this.props

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

    render() {
        const {
                isAccessed,
                isSelected,
                isInShownColumn,
                isToggle,
                isCarouselNavShowable,
                selectedAnnotationIndex,
                bookIndex,
                songIndex
            } = this.props,

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
                        handleButtonClick: this._handleButtonClick,
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
}

export default connect(mapStateToProps)(NavButton)
