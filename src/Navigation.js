
import { createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator  } from'react-navigation';
import BlockTV from './PostsList';
import Politics from './Politics';
import Entertainment from './Entertainment';
import Sports from './Sports';


const DashboardTabNavigator = createBottomTabNavigator(
    {
        BlockTV,
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
        },)
    

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