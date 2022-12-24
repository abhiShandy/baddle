import { Image } from "./components/Image";

export const App = () => {
  const photo1 =
    "https://images-assets.nasa.gov/image/NHQ202212160009/NHQ202212160009~orig.jpg";
  const photo2 =
    "https://images-assets.nasa.gov/image/NHQ202212140005/NHQ202212140005~orig.jpg";
  const photo3 =
    "https://images-assets.nasa.gov/image/0301627/0301627~orig.jpg";
  return (
    <div>
      <div className="text-3xl mt-4 px-1 sm:px-4">Baddle</div>
      <div className="flex flex-wrap gap-1 sm:gap-2 mt-4 px-1 sm:px-4">
        <Image src={photo1} />
        <Image src={photo2} />
        <Image src={photo3} />
      </div>
    </div>
  );
};
