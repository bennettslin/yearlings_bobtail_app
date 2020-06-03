import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { TIME_STAGE } from '../../../../app/constants/scene/sky'

class AdminSky extends PureComponent {

    static propTypes = {
        // From parent.
        sceneSkyTime: PropTypes.string,
        sceneSkySeason: PropTypes.string.isRequired
    }

    render() {
        const {
            sceneSkyTime = TIME_STAGE,
            sceneSkySeason
        } = this.props

        return (
            <div className={cx(
                'AdminSky'
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
                <div
                    {...{
                        className: cx(
                            'AdminSky__text',
                            'PtSansNarrow',
                            'textShadow__light'
                        )
                    }}
                >
                    <div>{`${sceneSkyTime} | ${sceneSkySeason}`}</div>
                </div>
            </div>
        )
    }
}

export default AdminSky

