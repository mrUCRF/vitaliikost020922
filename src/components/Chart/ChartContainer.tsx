import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Chart } from './Chart';



const ChartContainer = () => {
    const initialState = [
        { name: 'Landing Page', time: 7.4 },
        { name: 'Configurator', time: 0.2 },
        { name: 'Check-out', time: 7.0 },
        { name: 'Deal', time: 3.8 },
    ]
    const [baseData, setData] = useState(initialState)

    const updateData = () => {
		setData((p) => p.map((item) => ({ ...item, time: +(Math.random() * 20).toFixed(2) })));
	}
    const updateOnTimer = useCallback(() => {
		setTimeout(() => {
            updateData()
			updateOnTimer()
		}, 53000)
	}, [])

	useEffect(() => {
		updateOnTimer()
	}, [updateOnTimer])

    const form = useMemo(() => baseData.reduce((prev, { time }) => (prev += time), 0), [baseData]);

    const indent = (index: number) => {
		let result = 0;
		for (let i = 0; i < index; i++) {
			result += (baseData[i].time / form) * 100;
		}
		return result;
	};
	
	return (
		
		<Chart
            baseData={baseData}
            refreshData={updateData}
            form={form}
            indent={indent}
						/>
		
	);
};

export default ChartContainer;
