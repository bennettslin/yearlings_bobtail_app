import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import StatsSection from '../app/components/stats/stats-section.jsx'

describe('StatsSection', () => {
    let statsSection

    beforeEach(() => {
        statsSection = shallow(<StatsSection />)
    })

    it('should exist', () => {
        expect(statsSection).to.exist
    })
})
