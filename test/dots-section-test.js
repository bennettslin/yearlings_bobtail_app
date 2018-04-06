import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Dots from '../app/components/Dots/dot-section.jsx'

describe('Dots', () => {
    let dotsSection

    beforeEach(() => {
        dotsSection = shallow(<Dots />)
    })

    it('should exist', () => {
        expect(dotsSection).to.exist
    })
})
