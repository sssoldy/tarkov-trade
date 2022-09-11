import {SearchIcon} from '@heroicons/react/outline'
import {render, screen} from '@testing-library/react'
import {createRef} from 'react'
import {Input} from './Input'

describe('<Input />', () => {
  it('should render an <input /> inside the div', () => {
    render(
      <Input
        id="test-id"
        aria-label="input"
        value="test value"
        onChange={() => {}}
      />,
    )

    const input = screen.getByLabelText('input')
    expect(input).toHaveAttribute('id', 'test-id')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveValue('test value')
  })

  describe('prop: ref', () => {
    it('should be able to access the native input', () => {
      const inputRef = createRef<HTMLInputElement>()
      render(<Input ref={inputRef} id="test-id" aria-label="input" />)

      const input = screen.getByLabelText('input')
      expect(inputRef.current).toEqual(input)
    })
  })

  describe('prop: label', () => {
    it('should render an <label /> inside the div', () => {
      render(<Input id="test-id" aria-label="input" label="label text" />)

      const label = screen.getByText(/label text/i)
      expect(label).toHaveAttribute('for', 'test-id')
      expect(label).toHaveClass('mb-1 block text-sm font-medium text-gray-700')
    })
  })

  describe('prop: icon', () => {
    it('should render an svg-icon', () => {
      render(
        <Input
          id="test-id"
          aria-label="input"
          icon={
            <SearchIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
              data-testid="icon"
            />
          }
        />,
      )

      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('prop: loading', () => {
    it('should render an spiner', () => {
      const {container} = render(
        <Input id="test-id" aria-label="input" loading={true} />,
      )

      // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
      const spiner = container.querySelector(
        '[class="w-5 h-5 text-gray-400 animate-spin fill-gray-900"]',
      )
      expect(spiner).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
