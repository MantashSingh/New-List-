import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import AreaChartComp from '../../Component/AreaChartComp'
import Header from '../../Component/Header'
import StackedAreaGraphComp from '../../Component/StackedAreaGraphComp'
import strings from '../../constants/lang'
import ProgressCircleGraph from '../../Component/ProgressCircleGraph'



export default class Graph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            areaChart : [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
        
        }
    }
    
    _openDrawer=()=>{
        const{navigation} = this.props
        navigation.openDrawer()
      }

    render() {
        const{areaChart , progress} =this.state
        return (
            <ScrollView>
                 <Header textData={strings.CHART} showDrawer={true}  _openDrawer={this._openDrawer}/>
                <View style={{marginHorizontal:5}}>
                    <Text style={styles.chartHeading}>AreaChart</Text>
                <AreaChartComp  areaChart={areaChart}/>
                <Text style={styles.chartHeading}>StackedArea</Text>
                <StackedAreaGraphComp/>
                <Text style={styles.chartHeading}>ProgressCircle</Text>
                <ProgressCircleGraph />





                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    chartHeading:{
        fontFamily:"OpenSans-Bold",
        fontSize:18,
        textAlign:'center'
    }
})
