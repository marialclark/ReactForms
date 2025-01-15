import './styles/Box.css';

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
  const handleRemove = () => removeBox(id);
  
  return (
    <div className="Box">
      <div className="Box-inner-div"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: backgroundColor,
        }} 
      >
      </div>
      <button className="Box-remove" onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;