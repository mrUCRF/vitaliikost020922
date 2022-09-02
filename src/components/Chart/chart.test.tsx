import { fireEvent, render, screen } from '@testing-library/react'
import { Chart } from './Chart'

const testData = [
	{ name: 'Landing Page', time: 7.4 },
	{ name: 'Configurator', time: 0.2 },
	{ name: 'Check-out', time: 7.0 },
	{ name: 'Deal', time: 3.8 },
];

test('chartTest', () => {
    const refreshData = jest.fn()
	render(<Chart baseData={testData} refreshData={refreshData} indent={() => 40.21} form={14.4} />)
	const lineData = screen.getAllByTestId('chart')
	expect(lineData.length).toBe(4)

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(refreshData).toHaveBeenCalledTimes(1)
})



