import React from 'react'
import { shallow } from 'enzyme'

import AccessLetter from './'

import { ENTER } from '../../../constants/access'

const setup = (customProps) => {
    return shallow(
        <AccessLetter
            {...{
                accessKey: ENTER
            }}
            {...customProps}
        />
    )
}

describe('AccessLetter', () => {
    it('renders.', () => {
        const module = setup()

        expect(module.exists('.AccessLetter')).toBeTruthy()
    })
})
