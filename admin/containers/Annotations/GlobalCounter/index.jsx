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

const GlobalCounter = ({ toggleShowTodos }) => {
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
                    'TempGlobalCounter',
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
                    className: 'TempGlobalCounter__button',
                    buttonName: 'TempGlobalCounter__button',
                    handleButtonClick: toggleShowTodos,
                }}
            />
        </div>
    )
}

GlobalCounter.propTypes = {
    toggleShowTodos: PropTypes.func.isRequired,
}

export default GlobalCounter
