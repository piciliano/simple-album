import { Photo } from "./Photo";

export const PhotoList = ({ photos, setPhotoExpanded }) => {
  return (
    <div className="album">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          data={photo}
          setPhotoExpanded={setPhotoExpanded}
        />
      ))}
    </div>
  );
};
