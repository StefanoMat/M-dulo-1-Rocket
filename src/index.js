import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';

import Post from 'components/Post';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

export default class App extends Component {
 state = {
    strings: [
      { id: 0, titulo: 'Aprendendo React Native', autor: 'Stéfano Kaefer de Oliveira',  descript: 'Lorem ipsum dolor sit amet, consectetur'+
      ' adipiscing elit. Phasellus a mollis urna. Nulla nec sodales lectus. Praesent vulputate condimentum sagittis. Integer rutrum odio sed' +
       'pellentesque malesuada. Vivamus eu lectus interdum, pellentesque nulla ut, rhoncus ex. Phasellus eu enim tortor '},
      { id: 1, titulo: 'Aprendendo React Native', autor: 'Stéfano Kaefer de Oliveira', descript: 'Lorem ipsum dolor sit amet, consectetur'+
      ' adipiscing elit. Phasellus a mollis urna. Nulla nec sodales lectus. Praesent vulputate condimentum sagittis. Integer rutrum odio sed' +
       'pellentesque malesuada. Vivamus eu lectus interdum, pellentesque nulla ut, rhoncus ex. Phasellus eu enim tortor'},
      {id: 3 ,titulo: 'Aprendendo React Native', autor: 'Stéfano Kaefer de Oliveira', descript: 'Lorem ipsum dolor sit amet, consectetur'+
      ' adipiscing elit. Phasellus a mollis urna. Nulla nec sodales lectus. Praesent vulputate condimentum sagittis. Integer rutrum odio sed' +
       'pellentesque malesuada. Vivamus eu lectus interdum, pellentesque nulla ut, rhoncus ex. Phasellus eu enim tortor'},
    ],
  };


  render() {
    return (

        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.headerText}>GoNative App</Text>

          </View>
          <ScrollView>

                {this.state.strings.map( strings => (
                <Post key={strings.id} titulo={strings.titulo} autor={strings.autor} descript={strings.descript}/>))}

          </ScrollView>
        </View>





    );
  }
}

const styles = StyleSheet.create({

  main:{
    flex:1,
    backgroundColor: '#EE7777',
  },
  header:{
    height:65,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText:{
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
