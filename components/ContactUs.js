import React, { Component } from 'react'
import { Card } from 'react-native-elements';
import { Text,View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export class ContactUs extends Component {

   static navigationOptions = {
      title : 'Contact Us'
   };
   render() {
      return (
         <View style={{marginTop: 10}}>
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
               <Card title="Contact Information">
                  <Text style={{lineHeight:30}}>
                     121, Clear Water Bay Road{"\n"}
                     Clear Water Bay, Kowloon{"\n"}
                     HONG KONG{"\n"}
                     Tel: +852 1234 5678{"\n"}
                     Fax: +852 8765 4321{"\n"}
                     Email:confusion@food.net
                  </Text>
               </Card>
            </Animatable.View>
         </View>
      )
   }
}



