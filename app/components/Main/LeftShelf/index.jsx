// Section for dots and overview toggle buttons.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoresTips from '../../ScoresTips'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'

const mapStateToProps = ({
    viewportStore: { isPhoneWidth }
}) => ({
    isPhoneWidth
})

class LeftShelf extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhoneWidth: PropTypes.bool.isRequired,

        // From parent.
        className: PropTypes.any
    }

    render() {
        const {
            className,
            isPhoneWidth
        } = this.props

        return (
            <div className={cx(
                'LeftShelf',
                'width__leftShelf',
                isPhoneWidth && 'abF',
                className
            )}>
                <OverviewToggle inLeftShelf />
                <DotsSlideToggle />
                <ScoresTips />
            </div>
        )
    }
}

export default connect(mapStateToProps)(LeftShelf)
