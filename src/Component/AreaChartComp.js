import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { StyleSheet } from 'react-native'
 
 export default function AreaChartComp(props) {
     
       const{areaChart} = props
 
        return (
            <AreaChart
                style={styles.hei}
                data={areaChart}
                contentInset={styles.contentInset}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>
        )
    }
    
    const styles = StyleSheet.create({
        hei:{ 
            height: 200
         },
         contentInset:{ top: 30, bottom: 30 }
    })
    
