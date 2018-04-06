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
        interactivatedVerseIndex: PropTypes.number.isRequired,

        bookIndex: PropTypes.number,
        songIndex: PropTypes.number,
        accessHighlighted: PropTypes.bool,
        isSelected: PropTypes.bool.isRequired,
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
                    'isSelected',
                    'accessHighlighted',
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
        /* eslint-disable no-unused-vars */
        const { handleButtonClick,
        /* eslint-enable no-unused-vars */

            interactivatedVerseIndex,
            selectedAnnotationIndex,

            ...other } = this.props,

            { bookIndex, songIndex } = other,

            isLogue = getSongIsLogue(songIndex),

            isLeftmost = bookIndex === 0 || songIndex === 0,
            isRightmost = bookIndex === 1 || songIndex === 19,

            showEnterAccessKey =
                interactivatedVerseIndex < 0 &&
                !selectedAnnotationIndex

        let iconText

        if (isNaN(bookIndex)) {

            if (isLogue) {
                iconText = songIndex === 0 ? 'p' : 'e'

            } else {
                iconText = `${songIndex}`
            }

        } else {
            iconText = bookIndex === 0 ? 'I' : 'II'
        }

        return (
            <NavButtonView {...other}
                isLeftmost={isLeftmost}
                isRightmost={isRightmost}
                showEnterAccessKey={showEnterAccessKey}
                iconText={iconText}
                handleClick={this._handleButtonClick}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const navButtonViewPropTypes = {

    // From parent.
    isSelected: PropTypes.bool.isRequired,
    accessHighlighted: PropTypes.bool,
    iconText: PropTypes.string.isRequired,
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number,
    isLeftmost: PropTypes.bool.isRequired,
    isRightmost: PropTypes.bool.isRequired,
    showEnterAccessKey: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
},

NavButtonView = ({

    // From props.
    bookIndex,
    songIndex,
    accessHighlighted,

    // From controller.
    isLeftmost,
    isRightmost,
    showEnterAccessKey,

...other }) => {

    let accessKey

    if (accessHighlighted) {
        accessKey = NAVIGATION_ENTER_KEY
    }

    return (
        <div
            className={cx(
                'NavButton-block',
                { 'access-highlighted': accessHighlighted,
                  'access-keys-shown': showEnterAccessKey }
            )}
        >
            <div className="NavButton-wrapper">
                <Button {...other}
                    buttonName="nav"
                    accessKey={accessKey}
                    extraChild={
                        <NavPanel
                            isLeftmost={isLeftmost}
                            isRightmost={isRightmost}
                            bookIndex={bookIndex}
                            songIndex={songIndex}
                        />
                    }
                />
            </div>
        </div>
    )
}

NavButtonView.propTypes = navButtonViewPropTypes

export default connect(mapStateToProps)(NavButton)
