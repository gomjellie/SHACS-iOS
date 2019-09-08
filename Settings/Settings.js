import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Alert} from 'react-native';

import {
  NavigationPage,
  ListRow,
  Label,
  Theme,
  ModalIndicator,
} from 'teaset';
import About from './About';
import License from './License';

export default class Settings extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '설정',
    showBackButton: false,
  };

  constructor(props) {
    super(props);
  }

  renderPage() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <ScrollView style={{flex: 1}}>
        <View style={styles.spaces}>
          <Text style={{color: Theme.primaryColor}}>About</Text>
        </View>
        <MyListRow title="Open Source License" bottomSeparator="full" onPress={() => {
          this.navigator.push({view: <License/>});
        }}/>
        <MyListRow title="About" bottomSeparator="full" onPress={() => {
          this.navigator.push({view: <About/>});
        }}/>
      </ScrollView>
    );
  }
}

class MyListRow extends Component {
  render() {
    return (
      <ListRow {...this.props} title={<Label style={{color: Theme.secondaryColor}} text={this.props.title}/>}>{this.props.children}</ListRow>
    );
  }
}


const styles = StyleSheet.create({
  spaces: {
    height: 30,justifyContent: 'center', paddingLeft: 10,
  },
});
