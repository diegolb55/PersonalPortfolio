
import {Suspense, useRef} from "react";
import { Canvas, useFrame,
    useThree, extend,
    useLoader, } from "@react-three/fiber"
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";





// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { PerspectiveCamera } from '@react-three/drei'

export default function Magic(){
    return (
        <Canvas>
            <CameraControls/>

            <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />

            <Figures />
            <Lighting />
        </Canvas>
    )
}

const Lighting = () => {
    return (
        <>
            <pointLight  position={[5, 5, 2]} color="yellow" intensity={1}/>
            <pointLight  position={[-5, -5, 2]} color="blue" intensity={.5}/>

            {/* <pointLight  position={[-4, 4, 0]} color="lightblue" intensity={1}/>
            <pointLight  position={[-4, -4, 0]} color="blue" intensity={.5}/> */}


            <ambientLight intensity={.8} color="lightblue"/>
        </>
    )
}
const Figures = (props) => {


    const positions = useRef([
        [[2, 2, 0], [0, 0, 0]],
        [[-2, 2, -2], [0, 0, 0]],
        [[-3, -2, -3], [0, 0, 0]],
        [[1, -4, -6], [0, 0, 0]],
        [[3, -1, -4], [0, 0, 0]],

        [[0, 4, -15], [0, 0, 0]],
        [[-3, 0, -12], [0, 0, 0]],
        [[0, -3, -28], [0, 0, 0]],
        [[4, 3, -32], [0, 0, 0]],
        [[1, 2, -36], [0, 0, 0]],
    ])


    const group = useRef()
    let objects = new Array();

    const generateobjects = () => {
        
        positions?.current.map(
            ( elem ) => 
                objects.push(
                    <mesh key={Math.random()} position={elem[0]}>
                        <octahedronGeometry attach="geometry" />
                        <meshStandardMaterial attach="material" color="grey" transparent />
                    </mesh>
                )
        );
        return objects.map((elem) => elem);
    }
        

    useFrame(({clock}) => {

        const speed1 = Math.sin(clock.getElapsedTime() / 8) * 16;
        const speed2 = Math.sin(clock.getElapsedTime() / 4) * 4;

        

        // group.current.rotation.z = speed1 / 4;
        for (let i=0; i < 10; i++){

            if (i % 2 === 0){
                group.current.children[i].rotation.y = speed2;
            } else {
                group.current.children[i].rotation.y = speed1;

            }

          


        }
    })

  
    return (
        <group ref={group}>
            { generateobjects() }
        </group>
    )
  }

extend({ OrbitControls });
const CameraControls = () => {
   
    const {
      camera,
      gl: { domElement },
    } = useThree();
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={false} enablePan={false} enableRotate={false} />;
};
