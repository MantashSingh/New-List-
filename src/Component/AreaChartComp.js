import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
 
 export default function AreaChartComp(props) {
     
       const{areaChart} = props
 
        return (
            <AreaChart
                style={{ height: 200 }}
                data={areaChart}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>
        )
    }
