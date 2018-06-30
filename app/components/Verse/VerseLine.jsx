// Component for a single line in a verse.

import React, { Component } from 'react'
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

        isTruncatable: PropTypes.bool.isRequired,
        inVerseBar: PropTypes.bool.isRequired,
        columnKey: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate() {
        console.warn('VerseLine rendered.')
    }

    /**
     * NOTE: There is still some lingering weirdness with calculating width,
     * but only in Chrome and Safari, it seems.
     */
    // shouldComponentUpdate(nextProps) {
    //     const { props } = this,
    //         componentShouldUpdate = getComponentShouldUpdate({
    //             props,
    //             nextProps,
    //             updatingPropsArray: [
    //                 'renderableSongIndex',
    //                 {
    //                     staticProp: 'inVerseBar',
    //                     subUpdatingKey: 'text'
    //                 }
    //             ]
    //         })

    //     return componentShouldUpdate
    // }

    render() {
        const { columnKey,
                isTruncatable,
                ...other } = this.props

        /**
         * TODO: Can this truncatable functionality be done without having to
         * render an array?
         */
        /**
         * If it's truncatable, we will only ever show either the complete or
         * the truncated text. Applies to Golden Cord and Uncanny Valley.
         */
        return [(
            <div
                key="truncatable"
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

        ), (
            // Only render if this is a truncatable verse.
            isTruncatable ? (
                <span
                    key="truncated"
                    className="VerseLine__truncated"
                >
                    {'\u2026'}
                </span>
            ) : null
        )]
    }
}

export default connect(mapStateToProps)(VerseLine)
