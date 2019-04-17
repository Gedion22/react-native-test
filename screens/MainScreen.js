import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Picker, Icon } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './SearchScreen'

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            search: '',
            piker: '',
            joke:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePicker = this.changePicker.bind(this);
    }

    changePicker(value) {
        this.setState({
            piker: value
        })
        fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                joke: result.value
              }); 
            //alert(result.value) 
            },
            (error) => {
                alert(error);
            }
          )
        
    }

    handleChange(value){
        this.setState({
            search: value
        });
    }

    handleSubmit(event) {
        //alert(this.state.piker);
        // fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.search}`)
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //         alert(result.result[0].value); 
        //     },
        //     (error) => {
        //         alert(error);
        //     }
        //   )
        this.props.navigation.navigate('Search', { query: 'Brent' })
        event.preventDefault();
    }




    componentDidMount() {
        fetch("https://api.chucknorris.io/jokes/categories")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                categories: result
              });  
            },
            (error) => {
                alert(error);
            }
          )
      }


  render() {
    return (
     <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input onChangeText={this.handleChange} placeholder="Search" />
              <Button primary style={styles.button} onPress={this.handleSubmit}><Text> Search </Text></Button>
            </Item>
          </Form>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select category"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.piker}
                onValueChange={this.changePicker}
              >
                {this.state.categories.map((value) =>
                    <Picker.Item key={value} label={value[0].toUpperCase() + value.slice(1)} value={value} />
                )}
              </Picker>
            </Item>
          </Form> 
          <View>
                <Text style={styles.joke}>
                    {this.state.joke}
                </Text>
           </View>
        </Content>
      </Container>
    );
  }
}

const RootStack = createStackNavigator(
    {
        Main: MainScreen,
        Search: SearchScreen,
    },
    {
      initialRouteName: 'Main',
    }
  );
const AppContainer = createAppContainer(RootStack);

export default class MainContainer extends React.Component {
  render() {
    return <AppContainer />;
  }
}





const styles = StyleSheet.create({
    button: {
      height: '100%'
    },
    joke:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    }
  });