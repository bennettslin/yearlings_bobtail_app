// Button to select book or song in nav section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '../button/button'
import { getIsLogue, getSongTitle } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class NavButton extends Component {

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
        const { songIndex,
                ...other } = this.props,

            isLogue = getIsLogue(songIndex),
            songTitle = getSongTitle({
                songIndex,
                showIndex: false
            }),
            iconText = !isLogue ? songIndex : undefined

        return (
            <NavButtonView {...other}
                iconText={iconText}
                songTitle={songTitle}
                handleClick={this._handleButtonClick}
            />
        )
    }
}

NavButton.propTypes = {
    songIndex: PropTypes.number,
    accessHighlighted: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    handleButtonClick: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const NavButtonView = ({

    // From props.
    isSelected,
    accessHighlighted,

    // From controller.
    iconText,
    songTitle,
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
                    <div className="nav-title-block">
                        <div className="nav-title">
                            {songTitle}
                        </div>
                    </div>
                }
            />
        </div>
    </div>
)

NavButtonView.propTypes = {
    // From parent.
    isSelected: PropTypes.bool.isRequired,
    accessHighlighted: PropTypes.bool,
    iconText: PropTypes.number,
    songTitle: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default NavButton
