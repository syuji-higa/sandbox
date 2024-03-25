// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Foo } from '.'
import { renderInNewContainer } from '../../test/util'

test('Foo checkbox', async () => {
  // ARRANGE
  const container = renderInNewContainer(<Foo />)

  // ACT
  await userEvent.click(container.getByRole('checkbox', { name: 'Foo' }))

  // ASSERT
  expect(container.getByText('True')).toBeInTheDocument()
})
