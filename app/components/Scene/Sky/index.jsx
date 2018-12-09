// The scene sky.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getPropsAreShallowEqual } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { canSceneRender },
    sceneStore: {
        sceneTime,
        sceneSeason
    }
}) => ({
    canSceneRender,
    sceneTime,
    sceneSeason
})

class Sky extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        sceneTime: PropTypes.string.isRequired,
        sceneSeason: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
            sceneTime,
            sceneSeason
        } = this.props

        return (
            <div className={cx(
                'Sky',
                'absoluteFullContainer'
            )}>
                <div
                    className={cx(
                        'Season',
                        `Season__${sceneSeason}`,
                        'Sky__filter',
                        'absoluteFullContainer'
                    )}
                />
                <div
                    className={cx(
                        'TimeOfDay',
                        `TimeOfDay__${sceneTime}`,
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

export default connect(mapStateToProps)(Sky)

