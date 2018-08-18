// Button to select book or song in nav section.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from 'components/Button/Button'
import NavPanel from './Panel/NavPanel'
import { ENTER } from 'constants/access'
import {
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY
} from 'constants/buttons'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    interactivatedVerseIndex,
    songStore: { selectedAnnotationIndex }
}) => ({
    interactivatedVerseIndex,
    selectedAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class NavButton extends Component {

    static propTypes = {
        // Through Redux.
        interactivatedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        // From parents.
        isToggle: PropTypes.bool,
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool.isRequired,
        isInShownColumn: PropTypes.bool,

        bookIndex: PropTypes.number,
        songIndex: PropTypes.number,
        handleButtonClick: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleButtonClick = (e) => {
        const { handleButtonClick,
                songIndex } = this.props

        // Select song or logue.
        if (!isNaN(songIndex)) {
            handleButtonClick(e, songIndex)

        // Select book column.
        } else {
            handleButtonClick(e)
        }
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                handleButtonClick,
                dispatch,
                /* eslint-enable no-unused-vars */

                isAccessed,
                isSelected,
                isInShownColumn,
                isToggle,
                interactivatedVerseIndex,
                selectedAnnotationIndex,
                bookIndex,
                songIndex
            } = this.props,

            isBook = !isNaN(bookIndex),

            buttonIdentifier = isBook ? bookIndex : songIndex,

            // Hard-coding indices because I'm lazy.
            isLeftmost = bookIndex === 0 || songIndex === 0,
            isRightmost = bookIndex === 1 || songIndex === 19,

            isEnabled = isInShownColumn || isLeftmost || isRightmost,

            isNavigable =
                !isToggle
                && interactivatedVerseIndex < 0
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
                        buttonIdentifier
                    }}
                    isDisabled={!isEnabled}
                    isIndexSelected={isSelected}
                    showAccessIconIfAccessOn={isAccessed && isNavigable}
                    accessKey={isToggle ? '' : ENTER}
                    handleButtonClick={this._handleButtonClick}
                >
                    {!isBook && (
                        <NavPanel
                            isAccessed={isAccessed && isNavigable}
                            isLeftmost={isLeftmost}
                            isRightmost={isRightmost}
                            songIndex={songIndex}
                        />
                    )}
                </Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(NavButton)
