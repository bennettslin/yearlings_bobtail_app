import React from 'react'

/*************
 * CONTAINER *
 *************/

const RadioButton = ({

    isDisabled,
    buttonIndex,
    onButtonClick,

...other }) => {

    const onClick = !isDisabled ?
            e => onButtonClick(e, buttonIndex) : null

    return (
        <RadioButtonView {...other}
            isDisabled={isDisabled}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const RadioButtonView = ({

    // From props.
    isDisabled,
    buttonKey,

    // From controller.
    onClick

}) => (
    <div className={`radio-button${isDisabled ? ' disabled' : ''} ${buttonKey}`}>
        <h2>
            <a className={isDisabled ? '' : 'enabled'} onClick={onClick}>
                {buttonKey}
            </a>
        </h2>
    </div>
)

export default RadioButton
