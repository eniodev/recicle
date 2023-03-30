import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions,
    Touchable,
    TouchableOpacity
} from 'react-native'
import React from 'react'


interface PostProps {
    ownerName?: string, 
    ownerProfilePicture?: string, 
    description?: string, 
    image?: string, 
    tags?: string[], 
    price?: number
}




const tagsx = ['plastic', 'metal']

const deviceWidth = Dimensions.get('window').width;

const Post = ({
    ownerName, 
    ownerProfilePicture, 
    description, 
    image, 
    tags, 
    price}: PostProps) => {
  return (
   
    <View style={styles.container}>

    
      <View style={styles.ownerPostInfo}>
        <View style={styles.ownerTextInfo}>
            <View style={styles.profilePicArea}>  
            </View>
            <View style={{paddingLeft: 5}}>
                <Text style={styles.ownerName}>Énio Carlos</Text>
                <Text style={styles.postInfo}>3 days ago • Kilamba</Text>
            </View>
        </View>
        <Text style={{fontSize: 14, fontWeight: '700', letterSpacing: 1}}>...</Text>
      </View>

      <View style={styles.postImageArea}>
        
            <Text style={styles.description}>
                This has been living for a while in my backyard. 
                There’s a ton of it. Not really selling it.
                </Text>
        
        
        <Image
            style={styles.imagePost} 
            source={require('../assets/images/plastic.jpeg')}
            
        />
      </View>

      <View style={styles.buyingInfo}>
            <View style={styles.tagsContainer}>
            {tagsx.map((tag) => (
                <View style={styles.tags}>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#fff'}}>#{tag}</Text>
                </View>
                
            ))}
            </View>
            
        
        <View style={styles.action}>
                <Text style={styles.price}>$15</Text>
            
            <TouchableOpacity style={styles.reachOut}>
                <Text>👋🏿</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.2,
        borderColor: '#D9D9D9'

    },
    ownerPostInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: deviceWidth,
        padding: 5
    },
    ownerTextInfo: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    profilePicArea: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#242424'
    },
    description: {
        padding: 4,
        fontWeight: '400',
        fontSize: 13,
        color: '#222',
    },
    imagePost: {
        flex: 1,
        width: deviceWidth,
        height: deviceWidth * 0.5
    },
    postImageArea: {
        width: '100%'
    },
    ownerName: {
        fontWeight: '700'
    },
    postInfo: {
        fontSize: 12,
        color: '#242424'
    },
    buyingInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 55
    },
    tagsContainer: {
        flexDirection: 'row',
        width: '75%'
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: 5,
        paddingHorizontal: 12,
        backgroundColor: '#00638D',
        borderRadius: 50,

    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '22%'
    },
    price: {
        fontWeight: '900',
        color: '#4DA67F'
    },
    reachOut: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#FFC4CA',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Post