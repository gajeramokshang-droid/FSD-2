
function Comp3() {
    const n = 'lju';
    return (
      <>
        <h1>{n}</h1>
        <h1>"{n}"</h1>
        <h1>{"{n}"}</h1>
        <h1>{'n'}</h1>
        <h1>{n + 'test'}</h1>
        <h1>{n.toUpperCase()}</h1>
        <h1>{5 + 5}</h1>
        <h1>{[1, 2, 3]}</h1>
        <h1>{[1, 2, 3].join(',')}</h1>
      </>
    );
  }
export default Comp3; 

