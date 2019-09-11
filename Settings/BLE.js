import { BleManager } from 'react-native-ble-plx';
import React, {Component} from 'react';
import { Buffer } from 'buffer';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import {
  NavigationPage,
  ListRow,
  Label,
  Theme,
} from 'teaset';
import About from './About';
import License from './License';

export default class Settings extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'BLE',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    this.manager = new BleManager();
    this.stack = [];
  }

  componentWillMount() {
    const subscription = this.manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
  }

  getCharUUID = (charNum) => {
    const prefix = '0000fff';
    const suffix = '-0000-1000-8000-00805f9b34fb';
    return `${prefix}${charNum}${suffix}`;
  };

  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
        // Handle error (scanning will be stopped automatically)
        return;
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === 'SW1' || device.localName === 'SW1') {
        console.log(device);
        // Stop scanning as it's not necessary if you are scanning for one device.

        device.connect()
          .then((dev) => {
            this.manager.stopDeviceScan();
            return dev.discoverAllServicesAndCharacteristics();
          })
          .then((connectedDevice) => {
            console.log(connectedDevice);
            this.connectedDevice = connectedDevice;
            // Do work on device with services and characteristics
          })
          .catch((error) => {
            // Handle errors
          });
      }
    });
  }


  renderPage() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <ScrollView style={{flex: 1}}>
        <View style={styles.spaces}>
          <Text style={{color: Theme.primaryColor}}>BLE</Text>
        </View>
        <MyListRow title="Turn On" bottomSeparator="full" onPress={() => {
          const buff = Buffer.alloc(1);
          buff[0] = 1;
          this.connectedDevice.writeCharacteristicWithResponseForService(this.getCharUUID(0), this.getCharUUID(3), buff.toString('base64')) //AQ==
            .then(console.log)
            .catch(console.log);
        }}/>
        <MyListRow title="Turn Off" bottomSeparator="full" onPress={() => {
          const buff = Buffer.alloc(1);
          buff[0] = 0;
          this.connectedDevice.writeCharacteristicWithResponseForService(this.getCharUUID(0), this.getCharUUID(3), buff.toString('base64')) //AQ==
            .then(console.log)
            .catch(console.log);
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
