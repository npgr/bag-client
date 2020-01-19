import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Home } from './'
import { existOneDataTestId } from 'test/utils'

describe('Home Page', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<Home />)
  })
})
