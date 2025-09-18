import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="absolute left-0 top-0 h-full w-full flex-center">
        <div className="h-[10vw] w-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
