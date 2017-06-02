import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '../button/button'
import { getIsLogue, getSongTitle } from '../../helpers/data-helper'

/*************
 * CONTAINER *
 *************/

const NavButton = ({

    songIndex,
    toggleIconText,
    handleNavSongSelect,
    handleButtonClick,

...other }) => {

    const isLogue = getIsLogue(songIndex),
        songTitle = getSongTitle({
            songIndex,
            showIndex: false
        }),
        handleClick = handleButtonClick || (e => handleNavSongSelect(e, songIndex))

    let iconText

    if (!isNaN(toggleIconText)) {
        iconText = toggleIconText

    } else {
        iconText = isLogue ? null : songIndex
    }

    return (
        <NavButtonView {...other}
            iconText={iconText}
            songTitle={songTitle}
            handleClick={handleClick}
        />
    )
}

NavButton.propTypes = {
    songIndex: PropTypes.number,
    toggleIconText: PropTypes.number,
    isSelected: PropTypes.bool.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired,
    handleButtonClick: PropTypes.func
}

/****************
 * PRESENTATION *
 ****************/

const NavButtonView = ({

    // From props.
    isSelected,
    accessHighlighted,
    accessKey,

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
                accessKey={accessKey}
                iconText={iconText}
                isSelected={isSelected}
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
    isSelected: PropTypes.bool.isRequired,
    accessHighlighted: PropTypes.bool.isRequired,
    accessKey: PropTypes.string,
    iconText: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    songTitle: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default NavButton
