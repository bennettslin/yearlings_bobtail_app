import React from 'react'

/*************
 * CONTAINER *
 *************/

const RadioButton = (props) => {

    const { isDisabled,
            buttonIndex,
            onButtonClick } = props,

        // Indices begin at 1.
        onClick = !isDisabled ?
            e => onButtonClick(e, buttonIndex + 1) : null

    return (
        <RadioButtonView {...props}
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

    <div className={`radio-button${isDisabled ? ' disabled' : ''}`}>
        <h2>
            <a className={isDisabled ? '' : 'enabled'} onClick={onClick}>
                {buttonKey}
            </a>
        </h2>
    </div>
)

export default RadioButton
