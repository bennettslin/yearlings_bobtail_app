// Button in nav section to select book.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NavButton from '../Button'

import { getBookForSongIndex } from 'album/api/songs'

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

class NavBookToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,

        // From parent.
        bookIndex: PropTypes.number.isRequired,
        handleButtonClick: PropTypes.func.isRequired
    }

    render() {

        const {
                selectedSongIndex,
                bookIndex,
                handleButtonClick
            } = this.props,

            hasSelectedSong =
                bookIndex === getBookForSongIndex(selectedSongIndex)

        return (
            <div className={cx(
                'NavBookToggle',
                'NavBook'
            )}>
                <NavButton
                    isToggle
                    {...{
                        isSelected: hasSelectedSong,
                        bookIndex,
                        handleButtonClick
                    }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(NavBookToggle)
