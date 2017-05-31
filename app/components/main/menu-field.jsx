import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    isScoresTipsInMain,
    isTitleInAudio
}) => ({
    isScoresTipsInMain,
    isTitleInAudio
})

/*************
 * CONTAINER *
 *************/

const MenuField = (props) => (
    <MenuFieldView {...props} />
)

MenuField.propTypes = {
    isTitleInAudio: PropTypes.bool.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,
    audioSectionChild: PropTypes.element.isRequired,
    scoresTipsSectionChild: PropTypes.element.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const MenuFieldView = ({

    // From props.
    isTitleInAudio,
    isScoresTipsInMain,

    audioSectionChild,
    scoresTipsSectionChild,
    titleToggleChild

}) => (
    <div className="field menu-field">

        {!isTitleInAudio &&
            <div className="menu-subfield title-menu-subfield">
                {titleToggleChild}
            </div>
        }
        <div className="menu-subfield audio-subfield">
            {audioSectionChild}
        </div>
        {!isScoresTipsInMain &&
            <div className="menu-subfield scores-tips-menu-subfield">
                {scoresTipsSectionChild}
            </div>
        }
    </div>
)

export default connect(passReduxStateToProps)(MenuField)
