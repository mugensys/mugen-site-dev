import React from 'react'
import { render, screen } from '@testing-library/react'
import { ScrollSpyProvider, useScrollSpy } from '../components/ScrollSpyProvider'

function Probe() {
  const { activeId } = useScrollSpy()
  return <div data-testid="active">{activeId}</div>
}

describe('ScrollSpyProvider', () => {
  it('sets initial active id', () => {
    render(
      <ScrollSpyProvider sectionIds={['home','services']}>
        <div id="home"></div>
        <div id="services"></div>
        <Probe />
      </ScrollSpyProvider>
    )
    expect(screen.getByTestId('active')).toHaveTextContent('home')
  })
})
