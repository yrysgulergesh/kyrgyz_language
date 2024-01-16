export default function WordItem({word}) {
    return (
      <div>
        <h3>{word.kyrgyzWord}</h3> 
        <p>{word.russianTranslation}</p>
      </div>
    );
  }