export default function DictionaryPage() {

    const words = // получить слова из словаря
  
    return (
      <div>
        <h1>Словарь</h1>
        
        <input placeholder="Поиск..." />
        
        {words.map(word => (
          <WordItem word={word} />
        ))}
      </div>
    );
  }