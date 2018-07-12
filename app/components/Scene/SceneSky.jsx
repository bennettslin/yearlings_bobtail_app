/**
 * The stage sky. Renders with Theatre, not Scene, because it has no overhead,
 * and the stage lookes weird without it.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from '../../assets/scene/sky'

const mapStateToProps = ({
    canTheatreRender
}) => ({
    canTheatreRender
})

class SceneSky extends Component {

    static defaultProps = {
        timeKey: TIME_ANYTIME,
        seasonKey: SEASON_INDOOR
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
            <div className={cx(
                'Sky',
                'absoluteFullContainer'
            )}>
                <div
                    className={cx(
                        'Season',
                        `Season__${seasonKey}`,
                        'Sky__filter',
                        'absoluteFullContainer'
                    )}
                />
                <div
                    className={cx(
                        'TimeOfDay',
                        `TimeOfDay__${timeKey}`,
                        'Sky__filter',
                        'absoluteFullContainer'
                    )}
                />
                {/* Not going to do this work for now. */}
                {/* <div
                    className={cx(
                        'Sun',
                        `Sun__${timeKey}`,
                        `Sun__${seasonKey}`,
                        'Sky__celestial'
                    )}
                />
                <div
                    className={cx(
                        'Moon',
                        `Moon__${timeKey}`,
                        `Moon__${seasonKey}`,
                        'Sky__celestial'
                    )}
                /> */}
                {/* TODO: Make filter for weather, like clouds and rain. */}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SceneSky)

