import { fileSizeFormatter } from "../utils/fileSizeFormatter";

export const UploadImage = () => {
  const selectFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const input = document.querySelector(
      "input[type=file]"
    ) as HTMLInputElement;
    input.click();
  };

  const onFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 1024 * 1024 * 10)
      return alert("File size is larger than 10MB");

    console.log(
      `File selected: ${file.name} (${fileSizeFormatter(file.size)})`
    );
  };

  return (
    <form encType="multipart/form-data">
      <input hidden type="file" accept="image/*" onChange={onFileSelection} />
      <button
        className="bg-gray-500 text-white p-2 rounded-md"
        onClick={selectFile}
      >
        Upload
      </button>
    </form>
  );
};
