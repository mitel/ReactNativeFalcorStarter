/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native');
var falcor = require('falcor');
var HttpDataSource = require ('falcor-http-datasource');

var {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;

var model = new falcor.Model({
  cache: {
    values: [
      {
        name: 'falcor works!',
      },
      {
        name: 'other stuff..',
      },
    ],
  },
});

var ReactNativeFalcorStarter = React.createClass({
  getInitialState: function() {
    return {
      parm: 'start',
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text>Press me</Text>
        </TouchableHighlight> 
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.welcome}>
          state: { this.state.parm }
        </Text>
        <Text style={styles.instructions}>
          Press the button to load information from the local Falcor cache
        </Text>
      </View>
    );
  },

  _onPressButton: function(event) {
    // save the context of the upper level function (render)
    let context = this;
    model.getValue('values[0].name').then( (value) => {
      context.setState({...context.state, parm: value});
    }); 
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 10,
      borderRadius: 5,
      backgroundColor: 'yellow',
  },
});

AppRegistry.registerComponent('ReactNativeFalcorStarter', () => ReactNativeFalcorStarter);
