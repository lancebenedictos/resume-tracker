function AddButton({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <span className="flex">
      <button className="add-btn" onClick={onClick}>
        {title} +
      </button>
    </span>
  );
}

export default AddButton;
