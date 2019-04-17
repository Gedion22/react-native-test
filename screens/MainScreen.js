import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Picker, Icon } from 'native-base';

export default class MainScreen extends React.Component {
  render() {
    return (
     <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Search" />
              <Button primary style={styles.button}><Text> Search </Text></Button>
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