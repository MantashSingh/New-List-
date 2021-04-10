import React from 'react'
import { StyleSheet } from 'react-native'
import { ProgressCircle } from 'react-native-svg-charts'
 
export default function ProgressCircleGraph(){
 
        return <ProgressCircle style={{ height: 200 }} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
    
}
const styles = StyleSheet.create({
        
})
