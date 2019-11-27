import React, { PureComponent } from 'react'
import cx from 'classnames'
import keys from 'lodash/keys'
import scrollIntoView from 'scroll-into-view'

import PreviewerSvg from '../Previewer/Svg'
import PreviewerDashboard from '../Previewer/Dashboard'

import { getKeyName } from 'managers/Key/helper'

import { capitaliseForClassName } from 'helpers/format'

import { removeLoadingIndicator } from 'utils/window'

import { accessPresence } from '../../utils/access'

import {
    getPresenceFromStorage,
    getPresenceFromQueryStrings,
    setPresenceInStorage,
    setPresenceInQueryStrings
} from '../../utils/storage'

import { getPreviewerSvgMapForThing } from '../../utils/svg'

import { BACKDROP } from 'constants/scene/things'

class Things extends PureComponent {
    constructor(props) {
        super(props)

        // Set presence from storage in query strings.
        const presenceFromStorage = getPresenceFromStorage()
        setPresenceInQueryStrings(presenceFromStorage)

        // Set presence from query strings in storage. Default is first index.
        setPresenceInStorage(getPresenceFromQueryStrings())

        this.state = presenceFromStorage
    }

    componentDidMount() {
        logMount('Things')
        removeLoadingIndicator()
        this.focusPreviewerElement()
    }

    focusPreviewerElement = () => {
        this.previewerElement.focus()
    }

    selectPresence = ({ type, key }) => {
        let presenceType = type,
            presenceKey = key
        if (type) {
            presenceKey = keys(getPreviewerSvgMapForThing(type))[0]
        } else if (key) {
            presenceType = this.state.presenceType
        }

        this.setState({
            presenceType,
            presenceKey
        })
        setPresenceInStorage({ presenceType, presenceKey })
        setPresenceInQueryStrings({ presenceType, presenceKey })

        this.scrollPresenceIntoView({
            presenceType,
            presenceKey
        })
    }

    handleKeyDownPress = (e) => {
        const { presenceType, presenceKey } = this.state

        accessPresence({
            keyName: getKeyName(e),
            presenceType,
            presenceKey,
            selectPresence: this.selectPresence
        })
    }

    scrollPresenceIntoView({
        presenceType,
        presenceKey
    }) {
        const element = document.querySelector(
            `.${capitaliseForClassName(presenceType)} .${presenceKey}`
        )

        scrollIntoView(element, { time: 100 })
    }

    getScrollVertical() {
        const { presenceType } = this.state
        return presenceType === BACKDROP
    }

    setPreviewerElement = node => this.previewerElement = node

    render() {
        const
            {
                presenceType,
                presenceKey
            } = this.state,

            svgMap = getPreviewerSvgMapForThing(presenceType)

        return (
            <div
                {...{
                    ref: this.setPreviewerElement,
                    className: cx(
                        'Things',
                        'Previewer',
                        'abF',
                        'PtSansNarrow'
                    ),
                    tabIndex: -1,
                    onKeyDown: this.handleKeyDownPress
                }}
            >
                <PreviewerDashboard
                    {...{
                        presenceType,
                        presenceKey,
                        selectPresence: this.selectPresence
                    }}
                />
                <div
                    {...{
                        className: cx(
                            'Previewer__main',
                            'Previewer__mainFullHeight',
                            this.getScrollVertical() ?
                                'Previewer__mainScrollVertical' :
                                'Previewer__mainScrollHorizontal'
                        )
                    }}
                >
                    {/* Render all presences for this thing. */}
                    {keys(svgMap).map(presenceKey => (
                        <PreviewerSvg
                            showKilobytes
                            {...{
                                key: presenceKey,
                                presenceType,
                                presenceKey
                            }}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Things
