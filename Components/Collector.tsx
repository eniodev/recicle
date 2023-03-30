import { User } from 'phosphor-react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


interface CollectorProps {
    name: string,
    location: string,
    profilePicture?: string
}

const Collector = ({name, location, profilePicture}: CollectorProps) => {

    

    return (
        <View style={styles.container}>

            <View style={styles.collectorInfo}>
                <View style={styles.collectorPicture}>
                    <User color='#242424' size={24} />
                </View>

                <View style={styles.collectorTextInfo}>
                    <Text style={styles.collectorName}>{name}</Text>
                    <Text style={styles.collectorLocation}>{location}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.callCollecor}>
                <Text>👋🏿</Text>
            </TouchableOpacity>
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 17,
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    collectorInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    collectorPicture: {
        backgroundColor: '#D9D9D9',
        padding: 12,
        borderRadius: 510,
    }
    ,
    collectorTextInfo: {
        paddingLeft: 10,
    },
    collectorName: {
        fontSize: 14,
        fontWeight: '500'
    },
    collectorLocation: {
        fontSize: 12
    },
    callCollecor: {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(217,217,217, 0.3)',
       marginRight: -5,
        width: 50,
        height: 40,
        paddingRight: 0,
        borderRadius: 510,
    }
})

export default Collector