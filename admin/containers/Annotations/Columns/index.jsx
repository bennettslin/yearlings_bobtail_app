import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TodoSongColumn from './Song'
import { getArrayOfLength } from '../../../../src/helpers/general'
import { getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'
import { getSongsWithTodosCount } from '../../../endpoint/album/todos'
import { getJsFromSass } from '../../../../src/helpers/format'
import { WIDTH_TODO_ANNOTATION_COLUMN } from '../style.module'

const TodoColumns = ({ showAll }) => (
    <div
        {...{
            className: cx(
                'TodoColumns',
                'TodoAnnotations__row',
                'abF',
            ),
            style: {
                width: `${
                    getJsFromSass(WIDTH_TODO_ANNOTATION_COLUMN) *
                    getSongsWithTodosCount(showAll)
                }px`,
            },
        }}
    >
        {getArrayOfLength(getSongsAndLoguesCount()).map(index => (
            <TodoSongColumn
                {...{
                    key: index,
                    songIndex: index,
                    showAll,
                }}
            />
        ))}
    </div>
)

TodoColumns.propTypes = {
    showAll: PropTypes.bool.isRequired,
}

export default TodoColumns
