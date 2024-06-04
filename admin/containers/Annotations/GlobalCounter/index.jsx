import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../../src/components/Button'
import {
    getGlobalAnnotationCount,
    getGlobalAnnotationDoneCount,
} from '../../../endpoint/album/globalAnnotation'
import { getSongsAndLoguesCount, getTodosCountForAlbumOverviews } from '../../../../src/endpoint/album/songs'

const GlobalCounter = ({ toggleShowTodos }) => {
    const
        totalCount = getGlobalAnnotationCount() + getSongsAndLoguesCount(),
        todoCount =
            totalCount -
            getGlobalAnnotationDoneCount() +
            getTodosCountForAlbumOverviews(),
        percentage = parseInt(
            todoCount / totalCount * 100,
        )

    console.log('hi', getTodosCountForAlbumOverviews())

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
