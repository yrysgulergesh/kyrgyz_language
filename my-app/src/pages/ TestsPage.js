export default function TestsPage() {

    const tests = // получить список тестов
  
    return (
      <div>
        <h1>Тесты</h1>
  
        {tests.map(test => (
          <TestItem test={test} />
        ))}
      </div>
    );
  }