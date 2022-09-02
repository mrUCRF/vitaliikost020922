import React from "react";
import s from './Chart.module.css';



type Props = {
	baseData: { name: string; time: number }[],
    refreshData: () => void,
    indent: (index: number) => void
    form: number
};
export const Chart: React.FC<Props> = ({baseData, refreshData, form, indent}) => {



    return (
        <div className={s.container}>
            <h4 className={s.header}>SPENT TIME (SECONDS)</h4>
            <hr />
            <div className={s.chartContainer}>
            {baseData.map(({name, time}, index) => {
                return (
                    <div className={s.chartOneLine} key={index} data-testid="chart">
			<span className={s.lineName}>{name}</span>
			<div className={s.chartLine}>
				<div className={s.resultLine} style={{ width: `${(time / form) * 100}%`, marginLeft: `${indent(index)}%` }}>
					{time}s
				</div>
			</div>
		</div>
                )
            })}
            <button className={s.btn} onClick={refreshData}>Refresh</button>
            </div>
            
        </div>


    )
};