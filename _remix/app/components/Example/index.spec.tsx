// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Foo } from '.'

test('Foo checkbox', async () => {
  // ARRANGE
  render(<Foo />)

  // ACT
  await userEvent.click(screen.getByRole('checkbox', { name: 'Foo' }))

  // ASSERT
  expect(screen.getByText('True')).toBeInTheDocument()
})
