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

            { songIndex } = other,

            isLogue = getSongIsLogue(songIndex),
            iconText = !isLogue ? songIndex : undefined

        return (
            <NavButtonView {...other}
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
    iconText: PropTypes.number,
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number,
    handleClick: PropTypes.func.isRequired
},

NavButtonView = ({

    // From props.
    bookIndex,
    songIndex,
    isSelected,
    accessHighlighted,

    // From controller.
    iconText,
    handleClick

}) => (
    <div
        className={classnames(
            'nav-button-block',
            { 'access-highlighted': accessHighlighted }
        )}
    >
        <div className="nav-button-wrapper">
            <Button
                buttonName="nav"
                isSelected={isSelected}
                iconText={iconText}
                handleClick={handleClick}
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
