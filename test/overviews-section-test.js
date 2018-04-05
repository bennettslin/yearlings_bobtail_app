import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import OverviewSection from '../app/components/Overview/overview-section.jsx'

describe('OverviewSection', () => {
    let overviewSection

    beforeEach(() => {
        overviewSection = shallow(<OverviewSection />)
    })

    it('should exist', () => {
        expect(overviewSection).to.exist
    })
})
