import {
  ViroARScene,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroImage,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";

const InitialScene = () => {
  return (
    <ViroARScene>
      <ViroARImageMarker target="reactImage" onAnchorFound={()=>{console.log("Anchor found!")}}>
        <ViroAmbientLight color={'#ffffff'}/>
        <Viro3DObject
          source={require('./res/coliseu2/10064_colosseum_v1_Iteration0.obj')}
          resources={[
            require('./res/coliseu2/10065_colosseum_v1_Iteration0.mtl'),
            require('./res/coliseu2/10064_colosseum_diffuse.jpg')
          ]}
          position={[0,0,0]}
          rotation={[-160,15,-60]}
          scale={[0.000008,0.000008,0.000008]}
          type="OBJ"
        />
        <ViroImage
          source={require('./res/info-coliseu.png')}
          position={[0.2,0,0]}
          rotation={[-90,0,20]}
          scale={[0.2,0.2,0.2]}
        />
        <ViroImage
          source={require('./res/curi-coliseu.png')}
          position={[-0.2,0,0]}
          rotation={[-90,0,-20]}
          scale={[0.2,0.2,0.2]}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

ViroARTrackingTargets.createTargets({
  reactImage:{
    source: require('./res/codigo_qr.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  }
});

export default () => {
  let handleClick = () => {
    Linking.openURL("https://www.rome-museum.com/br/coliseu-roma.php");
  };

  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{
          scene: InitialScene
        }}
        style={{
          flex: 1
        }}
      />
      <View style={styles.controlsView}>
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.text}>Go to article</Text>
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
    justifyContent: 'space-around'
  },
  text: {
    margin: 20,
    backgroundColor: '#9d9d9d',
    padding: 10,
    fontWeight: 'bold',
  },
});
