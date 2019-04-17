import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Picker, Icon } from 'native-base';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: props.navigation,
            query: props.navigation.state.params.query
        };

      }
    
    render() {
      return (
        <View>
            <Text>
                {this.state.query}
            </Text>
        </View>
      );
    }
  }