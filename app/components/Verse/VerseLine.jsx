// Component for a single line in a verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import TextBlock from '../Text/TextBlock'
import { TITLE } from '../../constants/lyrics'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

class VerseLine extends Component {

    static defaultProps = {
        inVerseBar: false,
        isTruncatable: false
    }

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,

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

    /**
     * NOTE: There is still some lingering weirdness with calculating width,
     * but only in Chrome and Safari, it seems.
     */
    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'renderReadySongIndex',
                    {
                        staticProp: 'inVerseBar',
                        subUpdatingKey: 'text'
                    }
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { columnKey,
                isTruncatable,
                ...other } = this.props

        /**
         * If it's truncatable, we will only ever show either the complete or
         * the truncated text. Applies to Golden Cord and Uncanny Valley.
         */
        return [(
            <div
                key="truncatable"
                className={cx(
                    'VerseLine',
                    { [columnKey]: columnKey !== TITLE,
                      'VerseLine__truncatable': isTruncatable }
                )}
            >
                <TextBlock {...other}
                    isLyric
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
