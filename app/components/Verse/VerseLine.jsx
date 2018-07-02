// Component for a single line in a verse.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import Texts from '../Text/Texts'
import { TITLE } from '../../constants/lyrics'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableSongIndex
}) => ({
    canLyricRender,
    renderableSongIndex
})

class VerseLine extends Component {

    static defaultProps = {
        inVerseBar: false,
        isTruncatable: false
    }

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

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

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                isTruncatable: true,
                inVerseBar: true,
                isTitle: true,
                isVerseBeginningSpan: true,
                isVerseEndingSpan: true,
                columnKey: true,
                text: true
            },
            checkIsShallowEqual: {
                verseIndex: true
            },
            onlyOnCondition: nextProps.inVerseBar
        })
    }

    /**
     * NOTE: There is still some lingering weirdness with calculating width,
     * but only in Chrome and Safari, it seems.
     */

    render() {
        const {
            // eslint-disable-next-line no-unused-vars
            verseIndex,

            columnKey,
            isTruncatable,
            ...other
        } = this.props

        /**
         * TODO: Can this truncatable functionality be done without having to
         * render fragments?
         */
        /**
         * If it's truncatable, we will only ever show either the complete or
         * the truncated text. Applies to Golden Cord and Uncanny Valley.
         */
        return (
            <Fragment>
                <div
                    className={cx(
                        'VerseLine',

                        // Lyric, left, centre, right.
                        { [`VerseLine__${columnKey}`]: columnKey !== TITLE,

                        'VerseLine__truncatable': isTruncatable }
                    )}
                >
                    <Texts {...other}
                        isVerseLyric
                    />
                </div>

                {/* Only render if this is a truncatable verse. */}
                {isTruncatable && (
                    <span
                        className="VerseLine__truncated"
                    >
                        {'\u2026'}
                    </span>
                )}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(VerseLine)
