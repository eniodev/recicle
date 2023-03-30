import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Broadcast, Coins } from 'phosphor-react-native'
import TrashCan from '../assets/images/trash.svg'
import Collector from './Collector'



const PickUp = () => {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.bannerTop}>
            <View style={styles.bannerText}>
                <Text style={styles.bannerHeadline}>Earn <Text style={styles.moneyText}>Money</Text> For Discarted Trash</Text>
                <Text style={styles.bannerStep}>1. Pick a trash station</Text>
                <Text style={styles.bannerStep}>2. Drop off your trash</Text>
                <Text style={styles.bannerStep}>3. Get paid for it</Text>
            </View>
            <TrashCan style={styles.trashCan}/>
        </View>

        <View style={styles.bannerBottom}>
            <View style={styles.bannerBottomText}>
                <Text style={styles.bannerBottomHeadline}>Waste Delivery</Text>
                <Text style={styles.bannerBottomCTA}>Find a pick up station and sell</Text>
            </View>
            <Coins color='#242424' size={46} />
        </View>

      </View>

      <View style={styles.nearby}>
        <Text style={styles.nearbyText}>Nearby collectors</Text>
        <View style={styles.nearbyValue}>
            <Text style={styles.nearbyTextValue}>30 km</Text>
            <Broadcast color='#157DC8' size={16} />
        </View>
      </View>

      <View style={styles.collectors}>
        <Collector name={'Énio Carlos'} location={'Kilamba'} collecting={'plastic'}/>
        <Collector name={'Alfredo Martins'} location={'Budapeste'} collecting={'metal'}/>
        <Collector name={'Lawrence Carter'} location={'Zango'} collecting={'plastic'}/>
        <Collector name={'Bill Serf'} location={'Martires'} collecting={'everything'}/>
      </View>
    </View>
    </ScrollView>
    
  )
}


const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 10,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    banner: {
        width: '94%',
        height: 265,
        borderRadius: 8,
        backgroundColor: '#4DA67F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerTop: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        paddingTop: 5,
    },
    trashCan: {
        transform: [{rotate : '2deg'}]
    },
    bannerText: {
        width: 200,
        height: 140,
        justifyContent: 'space-between'
    },
    bannerHeadline: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff'  
    },
    moneyText: {
        color: '#FFE96B'
    },
    bannerStep: {
        color: '#fff',
        fontWeight: '500'
    },
    bannerBottom: {
        width: '95%',
        padding: 24,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8
        
    },
    bannerBottomText: {
        height: 40,
        justifyContent: 'space-between'
    },
    bannerBottomHeadline: {
        fontSize: 14,
        fontWeight: '800',
        color: '#4DA67F'
    },
    bannerBottomCTA: {
        fontSize: 12,
        color: '#6F6F6F'
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
    },
    collectors: {
        width: '100%',
    }
})

export default PickUp