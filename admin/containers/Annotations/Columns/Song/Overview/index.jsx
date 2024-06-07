/* eslint-disable react/prop-types */
import React from 'react'
import cx from 'classnames'
import Texts from '../../../../../../src/components/Texts'
import {
    getOverviewForSong,
    getSongIsLogue,
} from '../../../../../../src/endpoint/album/songs'
import { getOverviewTodo } from '../../../../../endpoint/album/todos'
import { REDO, REVIEW, REVISE } from '../../../constants/todos'
import './style'

const TodoOverview = ({ songIndex }) => {
    const
        overviewTodo = getOverviewTodo(songIndex),
        overview = getOverviewForSong(songIndex),
        // Logue overviews are wrapped in additional array.
        texts = getSongIsLogue(songIndex) ? overview : [overview]

    return (
        <div
            {...{
                className: cx(
                    'TodoOverviewContainer',
                    'colour__todo',
                    overviewTodo === REDO && 'colour__redo',
                    overviewTodo === REVISE && 'colour__revise',
                    overviewTodo === REVIEW && 'colour__review',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        'PopupView',
                        'OverviewPopupView',
                    ),
                }}
            >
                <div
                    {...{
                        className: cx(
                            'PopupViewContent',
                            'OverviewPopupViewContent',
                            'PopupViewContent__narrowPadding',
                        ),
                    }}
                >
                    <div
                        {...{
                            className: cx(
                                'OverviewText',
                                'fontSize__verse',
                            ),
                        }}
                    >
                        {texts.map((text, index) => (
                            <p {...{ key: index }}>
                                <Texts {...{ text }} />
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoOverview
