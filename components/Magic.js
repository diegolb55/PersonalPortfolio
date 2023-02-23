
import {Suspense, useRef, useState} from "react";
import { Canvas, useFrame,
    useThree, extend,
    useLoader, } from "@react-three/fiber"
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { motion } from "framer-motion";
import { useSpring, animated, config } from '@react-spring/three'



// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { PerspectiveCamera } from '@react-three/drei'

export default function Magic(){
    return (
        <Canvas>
            {/* <CameraControls/> */}

            <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5.5]} />

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

    /**
     * New matrix method:
     * 
     *      matrix values: (-2, 0, 2)
     *      2d matrix: [ [], [], []...[] ]
     * 
     *      conditions:
     *      - first element follows sequence: -2, 0, 2, -2, 0, 2, -2....
     *      - last row always 0,
     *      - 1st levels, for:
     *          - the 1st 3 elements: [x, 2, x]
     *          - the next 3 elements: [x, 0, x]
     *          - the next 3 elements: [x, -2, x]
     */


    const positions = useRef([
        [-2, 2, 0],
        [0, 2, 0],
        [2, 2, 0],

        [-2, 0, 0],
        [0, 0, 0],
        [2, 0, 0],

        [-2, -2, 0],
        [0, -2, 0],
        [2, -2, 0],
    ]);

    const [front, setFront] = useState(true);
    const handleClick = (index) => {
        setFront(true);
        setTimeout(()=>{
            setFront(false)
        }, 2000)
    }
    const springs = useSpring({
        scale: front ? [1.3, 1.3, 1.3] : [.9, .9, .9],
        rotation: front ? [0, 0, 0] : [.5, 0, .3],
        position: front ? [0, 0, -10] : [0, 0, 0],


        config: config.wobbly,
    })
 


    const group = useRef()
    let objects = new Array();

    const generateobjects = () => {
        
        positions?.current.map(
            ( elem, index ) => 
                objects.push(
                    <animated.mesh key={Math.random()} position={elem} onClick={() => handleClick(index)}>
                        <octahedronGeometry attach="geometry" />
                        <meshStandardMaterial attach="material" color="grey" transparent />
                    </animated.mesh>
                )
        );
        return objects.map((elem) => elem);
    }

        

    useFrame(({clock}) => {

        const speed1 = Math.sin(clock.getElapsedTime() / 20) * 8;
        const normal = Math.sin(clock.getElapsedTime() / 1) * 1;
        const quick = Math.sin(clock.getElapsedTime() / .2) * 4;

        
        // whole group rotation
        // group.current.rotation.z = speed1;

        // individual mesh rotation
        for (let i=0; i < 9; i++){

            // if (i % 2 === 0){
            //     group.current.children[i].rotation.y = normal;
            // } 
            if (front && i == 4){
                group.current.children[i].rotation.y = quick;
            }
         
            // group.current.children[i].rotation.z = speed1 / -1;

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
