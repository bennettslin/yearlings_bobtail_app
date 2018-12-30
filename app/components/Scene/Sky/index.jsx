// The scene sky.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

const mapStateToProps = ({
    sceneStore: {
        sceneTime,
        sceneSeason
    }
}) => ({
    sceneTime,
    sceneSeason
})

class Sky extends PureComponent {

    static propTypes = {
        // Through Redux.
        sceneTime: PropTypes.string.isRequired,
        sceneSeason: PropTypes.string.isRequired
    }

    render() {
        const {
            sceneTime,
            sceneSeason
        } = this.props

        return (
            <div className={cx(
                'Sky',
                'abF'
            )}>
                <div
                    className={cx(
                        'Season',
                        `Season__${sceneSeason}`,
                        'Sky__filter',
                        'abF'
                    )}
                />
                <div
                    className={cx(
                        'TimeOfDay',
                        `TimeOfDay__${sceneTime}`,
                        'Sky__filter',
                        'abF'
                    )}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Sky)

