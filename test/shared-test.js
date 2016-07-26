import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Shared from '../app/components/shared.jsx'

describe('Shared', () => {
    let shared

    beforeEach(() => {
        shared = shallow(<Shared />)
    })

    it('should exist', () => {
        expect(shared).to.exist
    })
})
