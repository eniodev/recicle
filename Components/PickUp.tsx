import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Broadcast } from 'phosphor-react-native'
import React from 'react'

const PickUp = () => {
  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
      <View style={styles.banner}>

      </View>

      <View style={styles.nearby}>
        <Text style={styles.nearbyText}>Nearby collectors</Text>
        <View style={styles.nearbyValue}>
            <Text style={styles.nearbyTextValue}>30 km</Text>
            <Broadcast color='#157DC8' size={16} />
        </View>
      </View>

      <View>

      </View>
    </View>
    </ScrollView>
    
  )
}


const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        width: '94%',
        height: 250,
        borderRadius: 8,
        backgroundColor: '#6AB891',
    },
    nearby: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 17,
    },
    nearbyValue: {
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nearbyText: {
        fontSize: 16,
        fontWeight: '800'
    },
    nearbyTextValue: {
        color: '#157DC8',
        fontSize: 12
    }
})

export default PickUp