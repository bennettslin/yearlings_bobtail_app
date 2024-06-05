import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../../src/components/Button'
import {
    getAnnotationsCount,
    getAnnotationReviewsCount,
    getAnnotationRevisionsCount,
    getAnnotationTodosCount,
    getOverviewReviewsCount,
    getOverviewRevisionsCount,
    getOverviewTodosCount,
} from '../../../endpoint/album/todos'
import { getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'

const TodoCounter = ({ toggleShowTodos }) => {
    const
        totalCount = getAnnotationsCount() + getSongsAndLoguesCount(),
        todosCount =
            getAnnotationTodosCount() +
            getOverviewTodosCount(),
        reviewsCount =
            getAnnotationReviewsCount() +
            getOverviewReviewsCount(),
        revisionsCount =
            getAnnotationRevisionsCount() +
            getOverviewRevisionsCount(),
        percentage = parseInt(
            todosCount / totalCount * 100,
        )

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
            <span>
                {revisionsCount} / {reviewsCount} / {totalCount} ({percentage}%)
            </span>
            <Button
                {...{
                    // This gives it the wormhole colour styling.
                    className: 'TodoCounter__button',
                    buttonName: 'TodoCounter__button',
                    handleButtonClick: toggleShowTodos,
                }}
            />
        </div>
    )
}

TodoCounter.propTypes = {
    toggleShowTodos: PropTypes.func.isRequired,
}

export default TodoCounter
