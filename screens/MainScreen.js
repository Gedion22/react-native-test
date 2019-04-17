import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Picker, Icon } from 'native-base';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            value: '',
            piker: ''
        };
    
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePicker = this.changePicker.bind(this);
    }

    changePicker(value) {
        this.setState({
            piker: value
        })
        
    }

    handleSubmit(event) {
        alert(this.state.piker);
        //alert('A name was submitted: ' + this.state.value);
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
            //  alert(result);
            },
            (error) => {
              // this.setState({
              //   isLoaded: true,
              //   error
              // });
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
              <Input placeholder="Search" />
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

                {/* <Picker.Item label="explicit" value="explicit" />
                <Picker.Item label="dev" value="dev" />
                <Picker.Item label="movie" value="movie" />
                <Picker.Item label="food" value="food" />
                <Picker.Item label="celebrity" value="celebrity" />
                <Picker.Item label="science" value="science" />
                <Picker.Item label="sport" value="sport" />
                <Picker.Item label="political" value="political" />
                <Picker.Item label="religion" value="religion" />
                <Picker.Item label="Net" value="key4" />
                <Picker.Item label="Net" value="key4" />
                <Picker.Item label="Net" value="key4" />
                <Picker.Item label="Net" value="key4" />
                <Picker.Item label="Net" value="key4" />
                <Picker.Item label="Net" value="key4" /> */}
              </Picker>
            </Item>
          </Form> 
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    button: {
      height: '100%'
    },
  });