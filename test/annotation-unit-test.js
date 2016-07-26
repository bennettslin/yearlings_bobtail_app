import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AnnotationUnit from '../app/components/annotation/annotation-unit.jsx'

describe('AnnotationUnit', () => {
    let annotationUnit

    beforeEach(() => {
        annotationUnit = shallow(<AnnotationUnit />)
    })

    it('should exist', () => {
        expect(annotationUnit).to.exist
    })
})
