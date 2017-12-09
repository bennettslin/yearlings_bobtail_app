// Button to select book or song in nav section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '../button/button'
import NavPanel from './nav-panel'
import { getSongIsLogue } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class NavButton extends Component {

    static propTypes = {
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
                    'accessHighlighted'
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

            ...other } = this.props,

            { bookIndex, songIndex } = other,

            isLogue = getSongIsLogue(songIndex),

            isLeftmost = bookIndex === 0 || songIndex === 0,
            isRightmost = bookIndex === 1 || songIndex === 19

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

...other }) => (

    <div
        className={classnames(
            'nav-button-block',
            { 'leftmost': isLeftmost,
              'rightmost': isRightmost,
              'access-highlighted': accessHighlighted }
        )}
    >
        <div className="nav-button-wrapper">
            <Button {...other}
                buttonName="nav"
                extraChild={
                    <NavPanel
                        bookIndex={bookIndex}
                        songIndex={songIndex}
                    />
                }
            />
        </div>
    </div>
)

NavButtonView.propTypes = navButtonViewPropTypes

export default NavButton
