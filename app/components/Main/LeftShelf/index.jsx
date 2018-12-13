// Section for dots and overview toggle buttons.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoresTips from '../../ScoresTips'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'

const mapStateToProps = ({
    deviceStore: { isPhone }
}) => ({
    isPhone
})

class LeftShelf extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhone: PropTypes.bool.isRequired,

        // From parent.
        className: PropTypes.any
    }

    render() {
        const {
            className,
            isPhone
        } = this.props

        return (
            <div className={cx(
                'LeftShelf',
                'width__leftShelf',
                isPhone && 'absoluteFullContainer',
                className
            )}>
                <OverviewToggle inLeftShelf />
                <DotsSlideToggle />
                <ScoresTips inLeftShelf />
            </div>
        )
    }
}

export default connect(mapStateToProps)(LeftShelf)
