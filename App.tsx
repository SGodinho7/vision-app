import {
  ViroARScene,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const InitialScene = () => {

  return (
    <ViroARScene>
      <ViroAmbientLight color={'#ffffff'}/>
      <Viro3DObject
        source={require('./res/coliseu2/10064_colosseum_v1_Iteration0.obj')}
        resources={[
          require('./res/coliseu2/10064_colosseum_v1_Iteration0.mtl'),
          require('./res/coliseu2/10064_colosseum_diffuse.jpg')
          //require('./res/coliseu/colo.mtl'),
          //require('./res/coliseu/COLIBRIT.jpg'),
          //require('./res/coliseu/COLIESTO.jpg'),
          //require('./res/coliseu/COLIESTT.jpg'),
          //require('./res/coliseu/COLIFLOT.jpg'),
          //require('./res/coliseu/COLIWALT.jpg'),
          //require('./res/coliseu/COLIWOOT.jpg'),
          //require('./res/coliseu/dddd_height.jpg'),
          //require('./res/coliseu/dddd_metallic.jpg'),
          //require('./res/coliseu/dddd_normal.jpg'),
        ]}
        position={[0,0,-5]}
        rotation={[-45,60,45]}
        scale={[0.0001,0.0002,0.0002]}
        type="OBJ"
      />
    </ViroARScene>
  );
};

export default () => {
  const [object, setObject] = useState('colo')

  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{
          scene: InitialScene
        }}
        viroAppProps={{"object":object}}
        style={{
          flex: 1
        }}
      />
      <View style={styles.controlsView}>
        <TouchableOpacity onPress={()=>setObject('colo')}>
          <Text style={styles.text}>Display Colo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setObject('nothing')}>
          <Text style={styles.text}>Display Nothing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  controlsView: {
    width: '100%',
    height: 100,
    backgroundColor: '#ffffff',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    margin: 20,
    backgroundColor: '#9d9d9d',
    padding: 10,
    fontWeight: 'bold',
  },
});
