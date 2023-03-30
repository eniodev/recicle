import { View, Text } from 'react-native'
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

const Post = ({
    ownerName, 
    ownerProfilePicture, 
    description, 
    image, 
    tags, 
    price}: PostProps) => {
  return (
    <View>

      <View>
        <View>
            <View>
                <Text>Profile Picture</Text>
            </View>
            <View>
                <Text>name</Text>
                <Text>post info</Text>
            </View>
        </View>
      </View>

      <View>
        <Text>Image</Text>
      </View>

      <View>
        <View>
            {tagsx.map((tag) => (
                <Text>{tag}</Text>
            ))}
        </View>
        <View>
            <View>
                <Text>$1/kg</Text>
            </View>
            <View>
                <Text>Call</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Post