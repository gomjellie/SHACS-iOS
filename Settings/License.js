import React from 'react';
import {View, ScrollView, Text, StyleSheet, Linking} from 'react-native';

import {
  NavigationPage,
} from 'teaset';
import MintTheme from '../MintTheme';

export default class License extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'License',
    showBackButton: true,
  };
  renderPage() {
    return (
      <ScrollView style={styles.topContainer}>
        <View style={styles.spaces}>
          <Text style={styles.dividerText}>react-native</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/facebook/react-native')}>github.com/facebook/react-native</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: facebook</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>react</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/facebook/react')}>github.com/facebook/react</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: facebook</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>teaset</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/rilyu/teaset')}>github.com/rilyu/teaset</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: rilyu</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>react-native-week-view</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/hoangnm/react-native-week-view')}>github.com/hoangnm/react-native-week-view</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: hoangnm</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>react-native-vector-icons</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/oblador/react-native-vector-icons')}>github.com/oblador/react-native-vector-icons</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: oblador</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>moment</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/moment/moment')}>github.com/moment/moment</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: moment</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>async-storage</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/react-native-community/async-storage')}>github.com/react-native-community/async-storage</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: react-native-community</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>prop-types</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/facebook/prop-types')}>github.com/facebook/prop-types</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: facebook</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>react-native-popup-dialog</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/jacklam718/react-native-popup-dialog')}>github.com/jacklam718/react-native-popup-dialog</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: jacklam718</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>react-native-webview</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/react-native-community/react-native-webview')}>github.com/react-native-community/react-native-webview</Text>
          <Text style={styles.contentText}>MIT License</Text>
          <Text style={styles.contentText}>Author: react-native-community</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  spaces: {
    height: 30, justifyContent: 'center', paddingLeft: 10,
  },
  dividerText: {
    color: MintTheme.primaryColor,
    // fontSize: 17,
  },
  contentContainer: {
    flexDirection: 'column',
  },
  contentText: {
    fontSize: 15,
    paddingLeft: 15,
    paddingBottom: 4,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    color: MintTheme.secondaryColor,
  },
  linkText: {
    fontSize: 15,
    paddingLeft: 15,
    paddingBottom: 4,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    color: 'rgba(247,141,167,1)',
  },
});
