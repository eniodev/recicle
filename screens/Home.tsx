import { addDoc, collection, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Header } from '../Components'
import { FIREBASE_DB } from '../firebaseConfig';
import { List } from 'phosphor-react-native';
import { async } from '@firebase/util';
import { getDocs, QuerySnapshot} from 'firebase/firestore';

interface User {
  name: string;
  location: string;
}


const Home = () => {
  const usersCollectionRef = collection(FIREBASE_DB, "tb_user")

  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    const getUsers = async () => {
      const data: QuerySnapshot = await getDocs(usersCollectionRef);
      const newUsers = data.docs.map((doc) => {
        const { name, location } = doc.data();
        const id = doc.id;
        return { id, name, location };
      });
      setUsers(newUsers);
    };
    getUsers();
  }, []);

  return (
    <SafeAreaView>
      <Header/>
      <View>
        {users.map((user) => {
          return (
            <View>
              <Text>Name: {user.name}</Text>
              <Text>Location: {user.location}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
    
  )
}

export default Home

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})