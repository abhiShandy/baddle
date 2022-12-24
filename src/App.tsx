// import { Image } from "./components/Image";

export const App = () => {
  return (
    <div className="pl-4">
      <div className="text-3xl mt-4">Baddle</div>
      <div className="flex gap-1 mt-4">{/* <Image src={photo} /> */}</div>
      <div className="text-lg mt-4">
        <a
          href="https://github.com/abhiShandy/baddle"
          target="_blank"
          className="text-blue-800"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
