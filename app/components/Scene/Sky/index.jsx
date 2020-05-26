// The scene sky.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

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

class Sky extends PureComponent {

    static propTypes = {
        // Through Redux.
        sceneSkyTime: PropTypes.string.isRequired,
        sceneSkySeason: PropTypes.string.isRequired
    }

    render() {
        const {
            sceneSkyTime,
            sceneSkySeason
        } = this.props

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
}

export default connect(mapStateToProps)(Sky)

