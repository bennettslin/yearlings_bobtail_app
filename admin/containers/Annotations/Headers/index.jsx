import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TodoSongHeader from './Song'
import { getArrayOfLength } from '../../../../src/helpers/general'
import { getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'

const TodoHeaders = ({ areDoneTodosHidden }) => (
    <div
        {...{
            className: cx(
                'TodoHeaders',
                'TodoAnnotations__row',
                'abF',
            ),
        }}
    >
        {getArrayOfLength(getSongsAndLoguesCount()).map(index => (
            <TodoSongHeader
                {...{
                    key: index,
                    songIndex: index,
                    areDoneTodosHidden,
                }}
            />
        ))}
    </div>
)

TodoHeaders.propTypes = {
    areDoneTodosHidden: PropTypes.bool.isRequired,
}

export default TodoHeaders
