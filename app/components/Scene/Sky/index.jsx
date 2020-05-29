// The scene sky.
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import './style'

const mapStateToProps = state => {
    const {
        sceneStore: {
            sceneSkyTime,
            sceneSkySeason
        }
    } = state

    return {
        sceneSkyTime,
        sceneSkySeason
    }
}

const Sky = ({
    sceneSkyTime,
    sceneSkySeason
}) => {
    return (
        <div className={cx(
            'Sky',
            'abF'
        )}>
            <div
                className={cx(
                    'TimeOfDay',
                    `TimeOfDay__${sceneSkyTime}`,
                    'Sky__filter',
                    'abF'
                )}
            />
            <div
                className={cx(
                    'Season',
                    `Season__${sceneSkySeason}`,
                    'Sky__filter',
                    'abF'
                )}
            />
        </div>
    )
}

Sky.propTypes = {
    // Through Redux.
    sceneSkyTime: PropTypes.string.isRequired,
    sceneSkySeason: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Sky)

