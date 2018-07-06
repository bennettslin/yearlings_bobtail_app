/**
 * The stage sky. Renders with Theatre, not Scene, because it has no overhead,
 * and the stage lookes weird without it.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import { SKY_ANYTIME,
        SKY_INDOOR } from '../../constants/scene'

const mapStateToProps = ({
    canTheatreRender
}) => ({
    canTheatreRender
})

class SceneSky extends Component {

    static defaultProps = {
        sky: {
            time: SKY_ANYTIME,
            season: SKY_INDOOR
        }
    }

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,

        // From parent.
        sky: PropTypes.shape({
            time: PropTypes.string.isRequired,
            season: PropTypes.string.isRequired
        }).isRequired
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
                sky
            } = this.props,
            {
                time,
                season
            } = sky

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
                        `StageSkyFilter__season__${season}`,
                        'absoluteFullContainer'
                    )}
                />
                <rect
                    className={cx(
                        'StageSkyFilter',
                        'StageSkyFilter__time',
                        `StageSkyFilter__time__${time}`,
                        'absoluteFullContainer'
                    )}
                />
                {/* TODO: Make filter for weather, like clouds and rain. */}
            </DynamicSvg>
        )
    }
}

export default connect(mapStateToProps)(SceneSky)

