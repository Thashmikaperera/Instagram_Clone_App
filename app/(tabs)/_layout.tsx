import { Tabs } from "expo-router"
import { FontAwesome } from '@expo/vector-icons';

export default function Tabslayout(){
    return(
    <Tabs screenOptions={{tabBarActiveTintColor:'black', tabBarShowLabel:false}}>
        <Tabs.Screen name='index' options={{headerTitle: 'For You',
             tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />}}/>
        <Tabs.Screen name='new' options={{headerTitle: 'Create Post',
             tabBarIcon: ({color}) => <FontAwesome name="plus-square-o" size={24} color={color} />}}/>
        <Tabs.Screen name='profile' options={{headerTitle: 'Profile',
             tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} />}}/>
        
    </Tabs>
    );
}