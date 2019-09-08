import React, {Component} from 'react';

import {Theme, NavigationPage, BasePage, TabView, TeaNavigator} from 'teaset';
import {YellowBox, Image} from 'react-native';

import ConfigIcon from './icons/settings.png';
import Settings from './Settings';
import MintTheme from './MintTheme';

YellowBox.ignoreWarnings([
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

class App extends BasePage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'TabViewPage',
    showBackButton: false,
  };

  renderPage() {
    Theme.set(MintTheme);
    const colors = {
      button: {
        non_active: Theme.menuShadowColor,
        active: Theme.primaryColor,
      },
    };

    const myIcons = {
      settings: (
        <Image
          style={{width: 22, height: 22, tintColor:colors.button.non_active}}
          source={ConfigIcon}
        />
      ),
      settings_active: (
        <Image
          style={{width: 22, height: 22, tintColor:colors.button.active}}
          source={ConfigIcon}
        />
      ),
    };

    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <TabView style={{flex: 1}} type="projector">
        <TabView.Sheet
          title="설정"
          icon={myIcons.settings}
          activeIcon={myIcons.settings_active}>
          <Settings />
        </TabView.Sheet>
        <TabView.Sheet
          title="설정"
          icon={myIcons.settings}
          activeIcon={myIcons.settings_active}>
          <Settings />
        </TabView.Sheet>
      </TabView>
    );
  }
}

export default class AppWrapper extends Component {
  render() {
    return <TeaNavigator rootView={<App />} />;
  }
}
