export default function TabButton({ children, onSelect, isSelected }) {
  function handleSelect() {
    console.log("hello world - Selected!f"); 
  }
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
