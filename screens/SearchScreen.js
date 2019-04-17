import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Container, Item, Content} from 'native-base';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: props.navigation,
            jokes: props.navigation.state.params.jokes
        };

      }


    render() {
      return (
        <View>
                {this.state.jokes.map((value)=>
                    <Text style={styles.joke} key={value.id}>{value.value}</Text>
                )}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({

    joke:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10
    }
  });