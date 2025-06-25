import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getTotalCount,
    getTotalReviewsCount,
    getTotalRevisionsCount,
    getTotalRedosCount,
    getTotalTodosCount,
    getTotalRestsCount,
} from '../../../endpoint/album/todos'

const TodoCounter = ({ areDoneTodosHidden }) => {
    const
        totalCount = getTotalCount(),
        totalTodosCount = getTotalTodosCount(),
        restsCount = getTotalRestsCount(),
        reviewsCount = getTotalReviewsCount(),
        revisionsCount = getTotalRevisionsCount(),
        redosCount = getTotalRedosCount()

    return (
        <div
            {...{
                className: cx(
                    'TodoCounter',
                    'textShadow__light',
                    'font__heading',
                    'fCC',
                ),
            }}
        >
            {
                areDoneTodosHidden ?
                    `rest: ${restsCount} / redo: ${redosCount} / revise: ${revisionsCount} / review: ${reviewsCount} / total: ${totalTodosCount}` :
                    `total: ${totalCount}`
            }
        </div>
    )
}

TodoCounter.propTypes = {
    areDoneTodosHidden: PropTypes.bool.isRequired,
}

export default TodoCounter
