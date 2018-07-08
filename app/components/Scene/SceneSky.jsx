/**
 * The stage sky. Renders with Theatre, not Scene, because it has no overhead,
 * and the stage lookes weird without it.
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import {
    SKY_ANYTIME,
    SKY_INDOOR
} from '../../assets/scene/sky'

const mapStateToProps = ({
    canTheatreRender
}) => ({
    canTheatreRender
})

class SceneSky extends Component {

    static defaultProps = {
        timeKey: SKY_ANYTIME,
        seasonKey: SKY_INDOOR
    }

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,

        // From parent.
        timeKey: PropTypes.string.isRequired,
        seasonKey: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canTheatreRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canTheatreRender && !prevProps.canTheatreRender) {
            console.warn('Sky rendered.')
        }
    }

    render() {
        const {
            timeKey,
            seasonKey
        } = this.props

        return (
            <Fragment>
                <div
                    className={cx(
                        'Sky',
                        'Sky__season',
                        `Sky__season__${seasonKey}`,
                        'absoluteFullContainer'
                    )}
                />
                <div
                    className={cx(
                        'Sky',
                        'Sky__time',
                        `Sky__time__${timeKey}`,
                        'absoluteFullContainer'
                    )}
                />
                {/* TODO: Make filter for weather, like clouds and rain. */}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(SceneSky)

