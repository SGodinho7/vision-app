import {
  ViroARScene,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroImage,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from "@reactvision/react-viro";
import React, { Component } from "react";

export default class ARMarkerScene extends Component {
    render() {
        return (
            <ViroARScene>
                <ViroARImageMarker target="reactImage">
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
    }
}