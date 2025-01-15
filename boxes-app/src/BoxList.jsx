import { useState } from 'react';
import Box from './Box.jsx';
import NewBoxForm from './NewBoxForm.jsx';
import './styles/BoxList.css';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  // Function for adding new box
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, newBox]);
  };

  // Function for removing a box (by ID)
  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <div className="BoxList-container">
        {boxes.map((box) => (
          <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;