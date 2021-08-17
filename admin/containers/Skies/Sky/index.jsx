import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { TIME_STAGE } from '../../../../src/constants/scene/sky'

const AdminSky = ({
    sceneSkyTime = TIME_STAGE,
    sceneSeason,

}) => (
    <div {...{ className: 'AdminSky' }}>
        <div
            {...{
                className: cx(
                    'TimeOfDay',
                    'TimeOfDay__space',
                    'Sky__filter',
                    'abF',
                    sceneSkyTime,
                ),
            }}
        />
        <div
            {...{
                className: cx(
                    'TimeOfDay',
                    'TimeOfDay__horizon',
                    'Sky__filter',
                    'abF',
                    sceneSkyTime,
                ),
            }}
        />
        <div
            {...{
                className: cx(
                    'Season',
                    'Season__space',
                    'Sky__filter',
                    'abF',
                    sceneSeason,
                ),
            }}
        />
        <div
            {...{
                className: cx(
                    'Season',
                    'Season__horizon',
                    'Sky__filter',
                    'abF',
                    sceneSeason,
                ),
            }}
        />
        <div
            {...{
                className: cx(
                    'AdminSky__text',
                    'font__text',
                    'textShadow__light',
                ),
            }}
        >
            <div>{`${sceneSkyTime} | ${sceneSeason}`}</div>
        </div>
    </div>
)

AdminSky.propTypes = {
    sceneSkyTime: PropTypes.string,
    sceneSeason: PropTypes.string.isRequired,
}

export default AdminSky

