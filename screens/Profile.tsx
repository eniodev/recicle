import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  TextInput, 
  SafeAreaView 
} from 'react-native'
import { CaretLeft } from 'phosphor-react-native'
import { RadioButton } from '../Components'
import Slider from '@react-native-community/slider'
import { useState } from 'react'

const Settings = () => {

  const [selectedOption, setSelectedOption] = useState('Male');

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <View style={settingStyles.headerSettings}>
        <TouchableOpacity>
          <CaretLeft color='#242424' size={24} weight='bold'/>
        </TouchableOpacity>

        <Text style={settingStyles.settings}>Edit Settings</Text>

        <TouchableOpacity>
          <Text style={settingStyles.save}>save</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={settingStyles.scrollView}>
  
      <View style={settingStyles.photoSection}>
          <View style={settingStyles.profilePic}></View>
          <TouchableOpacity>
            <Text style={settingStyles.editPic}>Edit Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={settingStyles.settingsInfo}>
          <View style={settingStyles.inputArea}>
            <TextInput 
              editable 
              autoFocus
              placeholder='Username'
              style={settingStyles.textInput}/>

            <TextInput 
              editable
              placeholder='Location'
              style={settingStyles.textInput}/>

            <TextInput 
              editable 
              autoFocus
              placeholder='Age in Years'
              style={settingStyles.textInput}/>
            </View>

            <View style={settingStyles.pickGender}>
              <Text style={settingStyles.label}>Gender</Text>

              <View style={settingStyles.radios}>
                <RadioButton
                  options={['Male', 'Female', 'Prefer not to say']}
                  selectedOption={selectedOption}
                  onSelect={handleSelect}
                />
            
              </View>
            </View>

            <View style={settingStyles.pickGender}>
              <Text style={settingStyles.label}>Gender</Text>

              <View style={settingStyles.radios}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#0567AD"
                maximumTrackTintColor="#D9D9D9"
              />
            
              </View>
            </View>

          </View>
          
    </ScrollView>
    </>
  )
}


const Profile = () => {
  return (
  <SafeAreaView style={{flex: 1}}>
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
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0,
    padding: 10

  },
  headerSettings: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },
  settings: {
    fontSize: 14,
    fontWeight: '900'
  },
  save: {
    fontSize: 14,
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
  },
  settingsInfo: {
    width: '100%',
    alignItems: 'center',

  },
  inputArea: {
    width: '100%',
    height: 190,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInput: {
    width: '97%',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 4,
    padding: 12
  },
  pickGender: {
    width: '95%',
    justifyContent: 'space-between',
    height: 50,
  },
  radios: {
    width: '97%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontWeight: '600'
  }
  
})


export default Profile