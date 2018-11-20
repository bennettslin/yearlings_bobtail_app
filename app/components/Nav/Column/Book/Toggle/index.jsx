// Button in nav section to select book.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NavButton from '../Button'

import { getBookColumnIndex } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    songStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

class NavBookToggle extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,

        // From parent.
        bookIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                selectedSongIndex,
                bookIndex,

            ...other } = this.props,

            hasSelectedSong =
                bookIndex === getBookColumnIndex(selectedSongIndex)

        return (
            <div className={cx(
                'NavBookToggle',
                'NavBook'
            )}>
                <NavButton {...other}
                    isToggle
                    isSelected={hasSelectedSong}
                    bookIndex={bookIndex}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(NavBookToggle)
