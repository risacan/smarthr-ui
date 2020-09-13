import React, { FC, useCallback, useContext, useRef } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import { getIsInclude } from '../../libs/map'
import { AccordionPanelItemContext } from './AccordionPanelItem'
import { AccordionPanelContext } from './AccordionPanel'

type Props = {
  className?: string
}

const duration = 200

export const AccordionPanelContent: FC<Props> = ({ children, className = '' }) => {
  const { name } = useContext(AccordionPanelItemContext)
  const { expandedItems } = useContext(AccordionPanelContext)
  const isInclude = getIsInclude(expandedItems, name)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const recalculateHeight = useCallback(
    (node: HTMLElement) => {
      const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0
      node.style.height = `${wrapperHeight}px`
    },
    [wrapperRef],
  )

  const handleEntered = (node: HTMLElement) => {
    node.style.height = 'auto'
    node.style.visibility = 'visible'
  }

  const handleExited = (node: HTMLElement) => {
    node.style.height = '0px'
    node.style.visibility = 'hidden'
  }

  return (
    <Transition
      in={isInclude}
      onEntering={recalculateHeight}
      onEntered={handleEntered}
      onExit={recalculateHeight}
      onExiting={recalculateHeight}
      onExited={handleExited}
      timeout={duration}
    >
      {(status) => (
        <CollapseContainer
          id={`${name}-content`}
          className={`${status} ${className}`}
          aria-labelledby={`${name}-trigger`}
          aria-hidden={!isInclude}
        >
          <div ref={wrapperRef}>{children}</div>
        </CollapseContainer>
      )}
    </Transition>
  )
}

const CollapseContainer = styled.section`
  height: 0;
  overflow: hidden;
  transition: height ${duration}ms ease;
  visibility: hidden;

  &.entered {
    height: auto;
    visibility: visible;
  }
`
