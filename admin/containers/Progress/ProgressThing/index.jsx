/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'

import { getSumOfTasks } from '../AdminNav/helper'
import { getRemainingTimeStringFromHours } from '../ProgressFooter/helper'
import { getIllustratorRemainingTasks, getAllIllustratorRemainingTasks } from './helper'

import './style.scss'

const ProgressThing = () => {

    const illustratorTasks = getIllustratorRemainingTasks(),

        allIllustratorRemainingTasks = getAllIllustratorRemainingTasks(),
        sumAllIllustratorTasks = getSumOfTasks(allIllustratorRemainingTasks),
        { neededHours: neededIllustratorHours } = sumAllIllustratorTasks,
        neededIllustratorTime = getRemainingTimeStringFromHours(neededIllustratorHours)

    return (
        <div
            {...{
                className: cx(
                    'ProgressThing'
                )
            }}
        >
            {keys(illustratorTasks).map(thing => {
                const thingTasks = illustratorTasks[thing],
                    sumTask = getSumOfTasks(thingTasks),
                    { neededHours } = sumTask,
                    neededTime = getRemainingTimeStringFromHours(neededHours)
                return (
                    <div
                        {...{
                            key: thing,
                            className: cx(
                                'text-cell-wrapper'
                            )
                        }}
                    >
                        <div
                            {...{
                                className: cx(
                                    'text-cell',
                                    'footer',
                                    !neededHours && 'done'
                                )
                            }}
                        >
                            {`${thing}: ${neededHours}h (${neededTime})`}
                        </div>
                    </div>
                )
            })}
            <div
                {...{
                    className: cx(
                        'text-cell-wrapper'
                    )
                }}
            >
                {neededIllustratorHours &&
                    <div className="text-cell footer">
                        {`total: ${neededIllustratorHours}h (${neededIllustratorTime})`}
                    </div>
                }
            </div>
        </div>
    )
}

export default ProgressThing
