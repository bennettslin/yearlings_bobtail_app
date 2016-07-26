import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import NavRow from '../app/components/nav-row/nav.jsx'

describe('NavRow', () => {
    let navRow

    beforeEach(() => {
        navRow = shallow(<NavRow />)
    })

    it('should exist', () => {
        expect(navRow).to.exist
    })
})
