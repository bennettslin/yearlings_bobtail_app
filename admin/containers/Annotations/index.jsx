import React, { PureComponent } from 'react'
import cx from 'classnames'

import AnnotationCards from './AnnotationCards'

import { getAnnotation } from 'album/api/annotations'
import { getGlobalAnnotation } from 'album/api/admin'

import { removeLoadingIndicator } from 'utils/window'

import './style.scss'

const TempGlobalAnnotationsCounter = ({
    counter,
    handleButtonClick
}) => {

    return (
        <div className="TempGlobalAnnotationsCounter">
            <div className="TempGlobalAnnotation__header">
                <span>
                    {`Annotations edited today: ${counter}`}
                </span>
                <button
                    {...{
                        className: 'reset',
                        onClick: handleButtonClick
                    }}
                />
            </div>
        </div>
    )
}

const TempGlobalAnnotation = ({
    globalAnnotationIndex,
    handleButtonClick
}) => {
    const
        {
            songIndex,
            annotationIndex
        } = getGlobalAnnotation(
            globalAnnotationIndex
        ),
        annotationObject = getAnnotation(
            songIndex,
            annotationIndex
        ),
        {
            title,
            cards
        } = annotationObject

    return (
        <div className="TempGlobalAnnotation">
            {false && JSON.stringify(annotationObject, null, 3)}

            <div className="TempGlobalAnnotation__header">
                <span>
                    {globalAnnotationIndex}. {title}
                </span>
                <button
                    {...{
                        className: 'increment',
                        onClick: handleButtonClick
                    }}
                />
            </div>

            <AnnotationCards {...{ cards }} />
        </div>
    )
}

class TempGlobalAnnotations extends PureComponent {

    state = {
        first: null,
        second: null,
        third: null
    }

    componentDidMount() {
        logMount('Annotations')

        if (!global.localStorage.globalAnnotationsCounter) {
            global.localStorage.globalAnnotationsCounter = 0
        }

        // Force my phone to start with these indices.
        if (!global.localStorage.globalAnnotationIndexFirst) {
            global.localStorage.globalAnnotationIndexFirst = 68
        }
        if (!global.localStorage.globalAnnotationIndexSecond) {
            global.localStorage.globalAnnotationIndexSecond = 147
        }
        if (!global.localStorage.globalAnnotationIndexThird) {
            global.localStorage.globalAnnotationIndexThird = 278
        }

        this.setState({
            first: parseInt(global.localStorage.globalAnnotationIndexFirst),
            second: parseInt(global.localStorage.globalAnnotationIndexSecond),
            third: parseInt(global.localStorage.globalAnnotationIndexThird),
            counter: parseInt(global.localStorage.globalAnnotationsCounter)
        })

        removeLoadingIndicator()
    }

    incrementFirst = () => {
        const first = this.state.first + 1,
            counter = this.state.counter + 1

        global.localStorage.globalAnnotationIndexFirst = first
        global.localStorage.globalAnnotationsCounter = counter

        this.setState({
            first,
            counter
        })
    }

    incrementSecond = () => {
        const second = this.state.second + 1,
            counter = this.state.counter + 1

        global.localStorage.globalAnnotationIndexSecond = second
        global.localStorage.globalAnnotationsCounter = counter

        this.setState({
            second,
            counter
        })
    }

    incrementThird = () => {
        const third = this.state.third + 1,
            counter = this.state.counter + 1

        global.localStorage.globalAnnotationIndexThird = third
        global.localStorage.globalAnnotationsCounter = counter

        this.setState({
            third,
            counter
        })
    }

    resetCounter = () => {
        global.localStorage.globalAnnotationsCounter = 0

        this.setState({
            counter: 0
        })
    }

    render() {

        const {
            first,
            second,
            third,
            counter
        } = this.state

        return first !== null && (
            <div
                {...{
                    className: cx(
                        'TempGlobalAnnotations',
                        'PtSansNarrow'
                    )
                }}
            >
                <TempGlobalAnnotationsCounter
                    {...{
                        counter,
                        handleButtonClick: this.resetCounter
                    }}
                />
                <TempGlobalAnnotation
                    {...{
                        globalAnnotationIndex: first,
                        handleButtonClick: this.incrementFirst
                    }}
                />
                <TempGlobalAnnotation
                    {...{
                        globalAnnotationIndex: second,
                        handleButtonClick: this.incrementSecond
                    }}
                />
                <TempGlobalAnnotation
                    {...{
                        globalAnnotationIndex: third,
                        handleButtonClick: this.incrementThird
                    }}
                />
            </div>
        )
    }
}

export default TempGlobalAnnotations
