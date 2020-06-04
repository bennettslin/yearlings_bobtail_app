import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { TIME_STAGE } from '../../../../app/constants/scene/sky'

const AdminSky = ({
    sceneSkyTime = TIME_STAGE,
    sceneSkySeason
}) => (
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

AdminSky.propTypes = {
    sceneSkyTime: PropTypes.string,
    sceneSkySeason: PropTypes.string.isRequired
}

export default AdminSky

