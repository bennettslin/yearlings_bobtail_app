// Button to select book or song in nav section.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../Button/Button'
import NavPanel from './NavPanel'
import { NAVIGATION_ENTER_KEY } from '../../constants/access'
import { getSongIsLogue } from '../../helpers/dataHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    interactivatedVerseIndex,
    selectedAnnotationIndex
}) => ({
    interactivatedVerseIndex,
    selectedAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class NavButton extends Component {

    static propTypes = {
        isToggle: PropTypes.bool,
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool.isRequired,

        bookIndex: PropTypes.number,
        songIndex: PropTypes.number,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        handleButtonClick: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleButtonClick = this._handleButtonClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isAccessed',
                    'isSelected',
                    'interactivatedVerseIndex',
                    'selectedAnnotationIndex'
                ]
            })

        return componentShouldUpdate
    }

    _handleButtonClick(e) {
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
                isToggle,
                interactivatedVerseIndex,
                selectedAnnotationIndex,
                bookIndex,
                songIndex
            } = this.props,

            isLogue = getSongIsLogue(songIndex),

            isLeftmost = bookIndex === 0 || songIndex === 0,
            isRightmost = bookIndex === 1 || songIndex === 19,

            isNavigable =
                !isToggle
                && interactivatedVerseIndex < 0
                && !selectedAnnotationIndex

        let temporaryText

        if (isNaN(bookIndex)) {

            if (isLogue) {
                temporaryText = songIndex === 0 ? 'p' : 'e'

            } else {
                temporaryText = `${songIndex}`
            }

        } else {
            temporaryText = bookIndex === 0 ? 'I' : 'II'
        }

        return (
            <div
                className={cx(
                    'NavButton'
                )}
            >
                <Button
                    buttonName="nav"
                    isIndexSelected={isSelected}
                    showAccessIconIfAccessOn={isAccessed && isNavigable}
                    accessKey={isToggle ? '' : NAVIGATION_ENTER_KEY}
                    temporaryText={temporaryText}
                    handleButtonClick={this._handleButtonClick}
                >
                    <NavPanel
                        isAccessed={isAccessed && isNavigable}
                        isLeftmost={isLeftmost}
                        isRightmost={isRightmost}
                        bookIndex={bookIndex}
                        songIndex={songIndex}
                    />
                </Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(NavButton)
