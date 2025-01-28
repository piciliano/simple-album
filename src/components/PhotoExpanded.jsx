export const PhotoExpanded = ({ photo, setPhotoExpanded }) => {
  if (!photo) return null;

  const imageUrl = photo.urls?.regular || "";
  const description = photo.alt_description || "Sem descrição";

  return (
    <div
      className="photo-expanded-backdrop"
      onClick={() => setPhotoExpanded(null)}
    >
      <div className="photo-expanded-container">
        <img src={imageUrl} alt={description} />
      </div>
    </div>
  );
};
