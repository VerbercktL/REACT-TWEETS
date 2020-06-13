import React, { useState } from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { name: "L", message: "first tweet", likes: 5 },
    { name: "LE", message: "second tweet", likes: 4 },
    { name: "LEN", message: "third tweet", likes: 3 },
    { name: "LENN", message: "fourth tweet", likes: 2 },
    { name: "LENN V", message: "fifth tweet", likes: 1 },
  ]);
  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} tweet={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;
