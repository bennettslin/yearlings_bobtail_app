import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import StatRow from '../app/components/stats/stat-row.jsx'

describe('StatRow', () => {
    let statRow

    beforeEach(() => {
        statRow = shallow(<StatRow />)
    })

    it('should exist', () => {
        expect(statRow).to.exist
    })
})
