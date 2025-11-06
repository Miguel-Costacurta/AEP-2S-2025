export default function Button({ text, variant = 'solid' }) {
  const base = "py-2 px-4 rounded-lg font-semibold transition";
  const styles = {
    solid: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {text}
    </button>
  );
}
