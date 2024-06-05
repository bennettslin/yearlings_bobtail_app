import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../../src/components/Button'
import {
    getGlobalAnnotationCount,
    getGlobalAnnotationTodosCount,
    getTodosCountForAlbumOverviews,
} from '../../../endpoint/album/todos'
import { getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'

const GlobalCounter = ({ toggleShowTodos }) => {
    const
        totalCount = getGlobalAnnotationCount() + getSongsAndLoguesCount(),
        todoCount =
            getGlobalAnnotationTodosCount() +
            getTodosCountForAlbumOverviews(),
        percentage = parseInt(
            todoCount / totalCount * 100,
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
                {todoCount} / {totalCount} ({percentage}%)
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
