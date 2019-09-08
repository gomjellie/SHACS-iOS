import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import {
  NavigationPage,
  Theme,
} from 'teaset';
import MintTheme from '../MintTheme';

export default class Settings extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'About',
    showBackButton: true,
  };
  renderPage() {
    return (
      <ScrollView style={styles.topContainer}>
        <View style={styles.spaces}>
          <Text style={styles.dividerText}>uSaintMu</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>uSaintMu(이하 유상무)는 숭실대학교 시간표 어플입니다.</Text>
          <Text style={styles.contentText}>유상무의 목표는 숭실대학교의 불편한 웹 서비스들을 더 편하게 쓸 수 있는 ui/ux를 제공하는 것입니다.</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>앞으로 업데이트될 내용들</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>:시간표 시나리오(플랜B)기능 추가</Text>
          <Text style={styles.contentText}>:시간 검색기능 추가</Text>
          <Text style={styles.contentText}>:시간이 변경되었을때 알려주는 서비스</Text>
          <Text style={styles.contentText}>:졸업 사정표 추가</Text>
          <Text style={styles.contentText}>:실라버스 뷰 추가</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>만든 사람들</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>오인규, 최윤제, 최종현, 이승우</Text>
        </View>

        <View style={styles.spaces}>
          <Text style={styles.dividerText}>Contact Me</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>문의사항은 gomjellie@gmail.com 으로 연락주세요</Text>
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
});
