import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { CaretLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native'

const Settings = () => {
  return (
    <ScrollView style={settingStyles.scrollView}>
      <View style={settingStyles.headerSettings}>
        <TouchableOpacity>
          <CaretLeft color='#242424' size={24} />
        </TouchableOpacity>

        <Text style={settingStyles.settings}>Edit Settings</Text>

        <TouchableOpacity>
          <Text style={settingStyles.save}>save</Text>
        </TouchableOpacity>

        
      </View>
      <View style={settingStyles.photoSection}>
          <View style={settingStyles.profilePic}></View>
          <TouchableOpacity>
            <Text style={settingStyles.editPic}>Edit Photo</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}


const Profile = () => {
  return (
  <SafeAreaView>
      <Settings />
  </SafeAreaView>
    
    
    
    
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

const settingStyles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    paddingTop: 0,
    padding: 10

  },
  headerSettings: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settings: {
    fontSize: 14,
    fontWeight: '900'
  },
  save: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0567AD'
  },
  photoSection: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 190,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: '#6AB891'
  },
  editPic: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0567AD'
  }
})


export default Profile