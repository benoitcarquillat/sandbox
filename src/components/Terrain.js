import { DoubleSide } from 'three';

const Terrain = () => {
  return (
    // The mesh is at the origin
    // Since it is inside a group, it is at the origin
    // of that group
    // It's rotated by 90 degrees along the X-axis
    // This is because, by default, planes are rendered
    // in the X-Y plane, where Y is the up direction
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
      {/*
          The thing that gives the mesh its shape
          In this case the shape is a flat plane
        */}
      <planeBufferGeometry />
      {/*
          The material gives a mesh its texture or look.
          In this case, it is just a uniform green
        */}
      <meshBasicMaterial color="green" side={DoubleSide} />
    </mesh>
  );
};

export default Terrain;