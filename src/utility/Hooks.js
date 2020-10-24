import React, { useState } from 'react';
//ini adalah contoh hook usestate
//ini dipanggil di about untuk menjalankan komentar
const Coment = ({ addComent }) => {
  const [title, setTitle] = useState('');
  const handleSumbit = (e) => {
    e.preventDefault();
    addComent(title);
    setTitle();
  };
  return (
    <form onSubmit={handleSumbit}>
      <label>Komentar : </label>
      <input
        type="text"
        calue={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add Coment" />
    </form>
  );
};
export default Coment;
