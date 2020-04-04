// Component for a single line in a verse.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import Texts from '../../../Texts'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class VerseLine extends PureComponent {

    static defaultProps = {
        inVerseBar: false,
        isTruncatable: false
    }

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired,

        // From parent.
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object
        ]).isRequired,

        // This is passed for verse bar to know when to update.
        verseIndex: PropTypes.number,

        isTruncatable: PropTypes.bool.isRequired,
        inVerseBar: PropTypes.bool.isRequired,
        columnKey: PropTypes.string.isRequired
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                lyricSongIndex,
                verseIndex,
                dispatch,
                /* eslint-enable no-unused-vars */

                columnKey,
                isTruncatable,
                ...other
            } = this.props,

            { inVerseBar } = other

        /**
         * TODO: Can this truncatable functionality be done without having to
         * render fragments?
         */
        /**
         * If it's truncatable, we will only ever show either the complete or
         * the truncated text. Applies to Golden Cord and Uncanny Valley.
         */
        return (
            <>
                <div
                    className={cx(
                        'VerseLine',

                        /**
                         * Allow anchor in a verse line to know it's in a
                         * cursor verse.
                         */
                        !inVerseBar && 'sibling__verseCursor',

                        // Stanzas, left, centre, right.
                        `VerseLine__${columnKey}`,

                        { 'VerseLine__truncatable': isTruncatable }
                    )}
                >
                    <Texts {...other}
                        isVerseLyric
                    />
                </div>

                {/* Only render if this is a truncatable verse. */}
                {isTruncatable && (
                    <div
                        className="VerseLine__truncated"
                    >
                        {'\u2026'}
                    </div>
                )}
            </>
        )
    }
}

export default connect(mapStateToProps)(VerseLine)
