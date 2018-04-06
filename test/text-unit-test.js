import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TextUnit from '../app/components/Text/TextUnit.jsx'

describe('TextUnit', () => {
    let textUnit

    beforeEach(() => {
        textUnit = shallow(<TextUnit />)
    })

    it('should exist', () => {
        expect(textUnit).to.exist
    })
})
