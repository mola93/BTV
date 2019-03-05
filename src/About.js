import React, {Component} from 'react';


import {View, StyleSheet, Text} from  'react-native';
import { Header, Left, Right , Body, Title, Icon} from 'native-base';


export class About extends Component {
 

    render(){
        return(
           
            <View>
         
                  <View style={styles.list}>
                  <Header style={{ backgroundColor: '#a50000' , marginTop:20}}>
                 <Left>
                    <Icon name="menu" onPress={()=> this.props.navigation.openDrawer()} />
                 </Left>
                 <Body>
            <Title style={{ alignItems: 'center' , marginRight: 100, color:'white'}}>Block TV</Title>
          </Body>
              </Header >
              <View style={{ alignItems: 'center'}}>
             <Text >About Block TV</Text></View>
          </View>
            </View>
      
         );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee',
        width: '100%',
        height:'100%'
 
    },
});
 


 
