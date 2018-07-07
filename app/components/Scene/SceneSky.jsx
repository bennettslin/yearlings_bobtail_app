/**
 * The stage sky. Renders with Theatre, not Scene, because it has no overhead,
 * and the stage lookes weird without it.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import {
    SKY_ANYTIME,
    SKY_INDOOR
} from '../../constants/scene'

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
            <DynamicSvg
                className={cx(
                    'SceneSky',
                    'absoluteFullContainer'
                )}
            >
                <rect
                    className={cx(
                        'StageSkyFilter',
                        'StageSkyFilter__season',
                        `StageSkyFilter__season__${seasonKey}`,
                        'absoluteFullContainer'
                    )}
                />
                <rect
                    className={cx(
                        'StageSkyFilter',
                        'StageSkyFilter__time',
                        `StageSkyFilter__time__${timeKey}`,
                        'absoluteFullContainer'
                    )}
                />
                {/* TODO: Make filter for weather, like clouds and rain. */}
            </DynamicSvg>
        )
    }
}

export default connect(mapStateToProps)(SceneSky)

