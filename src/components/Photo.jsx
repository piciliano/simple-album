export const Photo = ({ data, setPhotoExpanded }) => {
  return (
    <div className="photo" onClick={() => setPhotoExpanded(data)}>
      <img src={data.urls.small} alt={data.alt_description || "Photo"} />
    </div>
  );
};
