import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';
import AboutScreen from '../screens/AboutScreen';
import  SearchScreen  from '../screens/SearchScreen';
import { Foundation as FoundationIcons } from 'react-native-vector-icons';
import { Tab } from '@rneui/themed';
const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        <Tabs.Navigator>
                 <Tabs.Screen
                name="HomeScreen"

                component={HomeScreen}
                options={
                    {

                        tabBarlabel: "Home",
                        
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Home",
                        headerShown: false,
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="home" color={color} size={size} />)
                    }
                }
            />
 <Tabs.Screen
                name="SearchScreen"

                component={SearchScreen}
                options={
                    {

                        tabBarlabel: "Search",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Search",
                        headerShown: false,
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="magnifying-glass" color={color} size={size} />)
                    }
                }
            />

<Tabs.Screen
                name="CreateScreen"

                component={PhotoScreen}
                options={
                    {

                        tabBarlabel: "Create",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Create",
                        headerShown: false,
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="plus" color={color} size={size} />)
                    }
                }
            />

 <Tabs.Screen
                name="PhotoScreen"

                component={PhotoScreen}
                options={
                    {

                        tabBarlabel: "Inbox",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Inbox",
                        headerShown: false,
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="comments" color={color} size={size} />)
                    }
                }
            />

 <Tabs.Screen
                name="AboutScreen"

                component={AboutScreen}
                options={
                    {

                        tabBarlabel: "Saved",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Saved",
                        headerShown: false,
                        tabBarIcon:({color, size}) => (
                            <FoundationIcons name="torso" color={color} size={size} />)
                    }
                }
            />

        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({})

export default NavigationTabs;
