import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './styles/NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data, 
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({...formData, id: uuid() });
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <form  className="NewBoxForm" onSubmit={handleSubmit}>
      <div className="NewBoxForm-field">
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>

      <div className="NewBoxForm-field">
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>

      <div className="NewBoxForm-field">
        <label htmlFor="backgroundColor">Box Color:</label>
        <input
          type="text"
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>

      <div className="NewBoxForm-button">
        <button>Add Box</button>
      </div>
    </form>
  );
}

export default NewBoxForm;