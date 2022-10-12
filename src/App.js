import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "50px"}}>
      <Select options={options}></Select>
    </div>
  );
}

export default App;
