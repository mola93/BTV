
import { createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator  } from'react-navigation';
import BlockTV from './PostsList';
import Politics from './Politics';
import Entertainment from './Entertainment';
import Sports from './Sports';
import PostDetail from './PostDetail';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


const FeedStack = createStackNavigator(
  {
    Home: {
      screen: BlockTV,
      
        navigationOptions: ({ navigation }) => {
          return {
            
            headerLeft: (
              <Icon style={{ paddingLeft: 20 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
            )
            
          };
        
      }
    
    
    },
    PostDetail: {
      screen: PostDetail
    }
  },
  
);


const DashboardTabNavigator = createBottomTabNavigator(
    {
        FeedStack,
        Politics,
        Entertainment,
        Sports
    },
    { navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          
          headerTitle: routeName
        };
      }


    }
    )
    const DashboardStackNavigator = createStackNavigator(
        {
          DashboardTabNavigator: DashboardTabNavigator
        },
        {
          defaultNavigationOptions: ({ navigation }) => {
            return {
              headerLeft: (
                <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
              )
            };
          }
        }
      
        
        )
    

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: DashboardStackNavigator
    }
  });
 
  const AppSwitchNavigator = createSwitchNavigator({
    
    Home: { screen: AppDrawerNavigator }
  });
  


  

 const AppContainer = createAppContainer(AppSwitchNavigator);


 export default AppContainer;