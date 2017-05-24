import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

const NavButton = ({

    song,
    songIndex,
    buttonText,
    isSelected,
    handleNavSongSelect,
    handleButtonClick,

...other }) => {

    const isLogue = song ? song.logue : null,
        iconText = buttonText || (isLogue ? null : songIndex),
        songTitle = song ? song.title : null,
        handleClick = song ? e => handleNavSongSelect(e, songIndex) : handleButtonClick

    return (
        <NavButtonView {...other}
            iconText={iconText}
            isSelected={isSelected}
            songTitle={songTitle}
            handleClick={handleClick}
        />
    )
}

NavButton.propTypes = {
    song: PropTypes.object,
    songIndex: PropTypes.number,
    buttonText: PropTypes.string,
    isSelected: PropTypes.bool.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired,
    handleButtonClick: PropTypes.func
}

/****************
 * PRESENTATION *
 ****************/

const NavButtonView = ({

    // From props.
    isNavToggle,
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
            isNavToggle ? 'nav-toggle-button-block' : 'nav-button-block',
            { 'access-highlighted': accessHighlighted }
        )}
    >
        <div className="nav-button-wrapper">
            <Button
                buttonName="nav"
                accessKey={accessKey}
                iconText={iconText}
                isLarge={isNavToggle}
                isSelected={isSelected}
                handleClick={handleClick}
                extraChild={!isNavToggle &&
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
    isNavToggle: PropTypes.bool,
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
