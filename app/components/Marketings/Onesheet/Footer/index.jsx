import React from 'react'
import cx from 'classnames'
import Button from '../../../Button'
import ButtonTitle from '../../../Button/Title'

const OnesheetFooter = () => {
    return (
        <Button
            isCustomSize
            hoverOnParent
            {...{
                className: cx(
                    'dramaMasks',
                    'RootButton',
                ),
                buttonName: 'blah',
                handleButtonClick: () => {},
                inanimateChild: (
                    <ButtonTitle {...{ title: 'back to promo page' }} />
                ),
            }}
        />
    )
}

export default OnesheetFooter
