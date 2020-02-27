import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButton from '../components/ClipButton';

function ArticleScreen(props) {
  const isClipped = () => {
    const article = props.route.params.article;
    return props.user.clips.some(clip => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      props.deleteClip({ clip: props.route.params.article });
    } else {
      props.addClip({ clip: props.route.params.article });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView source={{ uri: props.route.params.article.url }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = { addClip, deleteClip };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);
