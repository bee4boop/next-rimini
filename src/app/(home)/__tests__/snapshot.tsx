import { render } from '@testing-library/react'
import Page from '@/app/(home)/page'

it('renders homepage unchanged', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})