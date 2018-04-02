// Component for a single line in a verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import TextBlock from '../text/text-block'
import { TITLE } from '../../constants/lyrics'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

class VerseLine extends Component {

    static defaultProps = {
        inVerseBar: false
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
                ...other } = this.props

        return (
            <div
                className={cx(
                    'line',
                    { [columnKey]: columnKey !== TITLE }
                )}
            >
                <TextBlock {...other}
                    isLyric={true}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(VerseLine)
