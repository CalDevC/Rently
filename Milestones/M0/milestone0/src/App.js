function App() {
  function cancelHandler(props) {
    props.onCancel();
  }
  return (
    <div>
      <h1>About Me</h1>
      <p>Member1, Member2, Member3, Member4, Member5</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Member1
      </button>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Member2
      </button>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Member3
      </button>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Member4
      </button>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Member5
      </button>
    </div>
  );
}

export default App;
