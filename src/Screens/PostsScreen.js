import PersonIcon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/AntDesign';
import ToolBarIcon from 'react-native-vector-icons/Feather';
import ExitIcon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import { postsStyles } from '../styles/posts';

export const PostsScreen = () =>{
    return (
       <View style={postsStyles.container}>
        <View style={postsStyles.header}>
           <Text style={postsStyles.sectionName}>Posts</Text>
           <TouchableOpacity  activeOpacity={0.8} style={postsStyles.exitIcon}>
                <ExitIcon name="exit-outline" size={24} color="#BDBDBD" />
            </TouchableOpacity>
        </View>
        <View><Text>No post yet</Text></View>
         <View style={postsStyles.menu}>
            <TouchableOpacity activeOpacity={0.8}>
                <ToolBarIcon name='grid' size={24}/>
            </TouchableOpacity>

            <TouchableOpacity style={postsStyles.button} activeOpacity={0.8}>
                <Icon name="plus" size={13} color="#fff" />
            </TouchableOpacity>
            
            <TouchableOpacity  activeOpacity={0.8}>
                <PersonIcon name="person" size={24} color="#000" />
            </TouchableOpacity>

        </View>
       </View>
    )
}

