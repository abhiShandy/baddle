import { Image } from "./components/Image";
import { UploadImage } from "./components/UploadImage";

export const App = () => {
  const photo1 =
    "https://images-assets.nasa.gov/image/NHQ202212160009/NHQ202212160009~orig.jpg";
  const photo2 =
    "https://images-assets.nasa.gov/image/NHQ202212140005/NHQ202212140005~orig.jpg";
  const photo3 =
    "https://images-assets.nasa.gov/image/0301627/0301627~orig.jpg";

  return (
    <div>
      <div className="mt-4 px-1 sm:px-4 flex justify-between items-center">
        <h1 className="text-3xl ">Baddle</h1>
        <UploadImage />
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2 mt-4 px-1 sm:px-4">
        <Image src={photo1} />
        <Image src={photo2} />
        <Image src={photo3} />
      </div>
    </div>
  );
};
