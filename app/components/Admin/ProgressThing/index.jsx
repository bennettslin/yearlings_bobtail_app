/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash.keys'

import { getSumOfTasks } from '../AdminNav/helper'
import { getRemainingTimeStringFromHours } from '../ProgressFooter/helper'
import { getIllustratorTasks } from './helper'

const ProgressThing = () => {

    const illustratorTasks = getIllustratorTasks()

    return (
        <div>
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
                                'ProgressThing',
                                'text-cell-wrapper'
                            )
                        }}
                    >
                        {neededHours &&
                            <div className="text-cell footer">
                                {`${thing}: ${neededHours}h (${neededTime})`}
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default ProgressThing
