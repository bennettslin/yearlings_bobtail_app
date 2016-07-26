import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../app/components/app.jsx'

describe('App', () => {
    let app

    beforeEach(() => {
        app = shallow(<App />)
    })

    it('should exist', () => {
        expect(app).to.exist
    })
})
