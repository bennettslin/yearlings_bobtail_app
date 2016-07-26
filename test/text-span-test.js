import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TextSpan from '../app/components/text/text-span.jsx'

describe('TextSpan', () => {
    let textSpan

    beforeEach(() => {
        textSpan = shallow(<TextSpan />)
    })

    it('should exist', () => {
        expect(textSpan).to.exist
    })
})
