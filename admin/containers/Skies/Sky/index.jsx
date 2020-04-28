import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { TIME_STAGE } from '../../../../app/scene/sky/keys'

class AdminSky extends PureComponent {

    static propTypes = {
        // From parent.
        sceneTime: PropTypes.string,
        sceneSeason: PropTypes.string.isRequired
    }

    render() {
        const {
            sceneTime = TIME_STAGE,
            sceneSeason
        } = this.props

        return (
            <div className={cx(
                'AdminSky'
            )}>
                <div
                    className={cx(
                        'TimeOfDay',
                        `TimeOfDay__${sceneTime}`,
                        'Sky__filter',
                        'abF'
                    )}
                />
                <div
                    className={cx(
                        'Season',
                        `Season__${sceneSeason}`,
                        'Sky__filter',
                        'abF'
                    )}
                />
                <div
                    {...{
                        className: cx(
                            'AdminSky__text',
                            'PtSansNarrow',
                            'textShadow__light'
                        )
                    }}
                >
                    <div>{`${sceneTime} | ${sceneSeason}`}</div>
                </div>
            </div>
        )
    }
}

export default AdminSky

