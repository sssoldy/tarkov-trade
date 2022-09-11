import {render, screen} from '@testing-library/react'
import {createRef} from 'react'
import {Button} from './Button'

describe('<Button />', () => {
  it('should render button', () => {
    render(<Button>Button</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should rednder a child', () => {
    render(<Button>Button</Button>)
    expect(screen.getByRole('button')).toHaveTextContent(/button/i)
  })

  describe('prop: ref', () => {
    it('should be able to access the native button', () => {
      const buttonRef = createRef<HTMLButtonElement>()
      render(<Button ref={buttonRef} />)
      expect(screen.getByRole('button')).toEqual(buttonRef.current)
    })
  })

  describe('prop: variant', () => {
    it('should render an primary button', () => {
      render(<Button variant="primary" />)
      expect(screen.getByRole('button')).toHaveClass(
        'bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-300',
      )
    })

    it('should render an secondary button', () => {
      render(<Button variant="secondary" />)
      expect(screen.getByRole('button')).toHaveClass(
        'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 disabled:bg-indigo-50 disabled:text-indigo-400',
      )
    })
  })

  describe('prop: size', () => {
    it('should render an small button', () => {
      render(<Button size="small" />)
      expect(screen.getByRole('button')).toHaveClass('px-2.5 py-1.5')
    })

    it('should render an medium button', () => {
      render(<Button size="medium" />)
      expect(screen.getByRole('button')).toHaveClass('px-3 py-2')
    })

    it('should render an huge button', () => {
      render(<Button size="huge" />)
      expect(screen.getByRole('button')).toHaveClass('px-4 py-2.5')
    })
  })
})
