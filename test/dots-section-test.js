import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import DotsSection from '../app/components/dots/dot-section.jsx'

describe('DotsSection', () => {
    let dotsSection

    beforeEach(() => {
        dotsSection = shallow(<DotsSection />)
    })

    it('should exist', () => {
        expect(dotsSection).to.exist
    })
})
