export default function TestItem({test}) {
    return (
      <div>
        <h3>{test.title}</h3>
        <button>Пройти тест</button>
      </div>
    );
  }