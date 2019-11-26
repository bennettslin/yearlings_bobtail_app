import React, { PureComponent } from 'react'
import cx from 'classnames'
import keys from 'lodash/keys'
import scrollIntoView from 'scroll-into-view'

import PreviewerSvg from '../Previewer/Svg'
import PreviewerDashboard from '../Previewer/Dashboard'

import { getViewBoxSize } from 'modules/PresenceSvg/helper/size'

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

import { getSvgMapForWholeActor } from '../../utils/svg'

class Actors extends PureComponent {
    constructor(props) {
        super(props)

        // Set presence from storage in query strings.
        const presenceFromStorage = getPresenceFromStorage(true)
        setPresenceInQueryStrings(presenceFromStorage)

        // Set presence from query strings in storage. Default is first index.
        setPresenceInStorage({
            isActor: true,
            ...getPresenceFromQueryStrings(true)
        })

        this.state = {
            ...presenceFromStorage,
            viewBoxWidth: 0,
            viewBoxHeight: 0,
            kilobytes: 0
        }
    }

    componentDidMount() {
        logMount('Actors')
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
            presenceKey = keys(getSvgMapForWholeActor(type))[0]
        } else if (key) {
            presenceType = this.state.presenceType
        }

        this.setState({
            presenceType,
            presenceKey
        })
        setPresenceInStorage({
            isActor: true,
            presenceType,
            presenceKey
        })
        setPresenceInQueryStrings({ presenceType, presenceKey })

        this.scrollPresenceIntoView({
            presenceType,
            presenceKey
        })
    }

    handleProcessSvg = (svgString) => {
        const {
            viewBoxWidth,
            viewBoxHeight
        } = getViewBoxSize(svgString)

        this.setState({
            viewBoxWidth,
            viewBoxHeight,
            kilobytes: svgString.length / 1024
        })
    }

    handleKeyDownPress = (e) => {
        const { presenceType, presenceKey } = this.state

        accessPresence({
            isActor: true,
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

    setPreviewerElement = node => this.previewerElement = node

    render() {
        const
            {
                presenceType,
                presenceKey,
                kilobytes
            } = this.state,

            svgMap = getSvgMapForWholeActor(presenceType)

        return (
            <div
                {...{
                    ref: this.setPreviewerElement,
                    className: cx(
                        'Actors',
                        'Previewer__actors',
                        'Previewer__heightAspectRatio',
                        'abF',
                        'PtSansNarrow'
                    ),
                    tabIndex: -1,
                    onKeyDown: this.handleKeyDownPress
                }}
            >
                <PreviewerDashboard
                    isActor
                    {...{
                        presenceType,
                        presenceKey,
                        kilobytes,
                        selectPresence: this.selectPresence
                    }}
                />
                <div {...{ className: 'Previewer__scroll' }}>
                    {/* Render all instances for this actor. */}
                    {keys(svgMap).map(instanceKey => (
                        <PreviewerSvg
                            isActor
                            {...{
                                key: instanceKey,
                                presenceType,
                                presenceKey: instanceKey,
                                handleProcessSvg: this.handleProcessSvg
                            }}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Actors
