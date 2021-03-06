import React, { useState, useContext } from 'react';
import ThemeContext from './theme-context';
const Kontak = (props) => {
  const { headerName } = props;
  const [name, setName] = useState(headerName);
  const listName = [
    'Instagram = @felia_citra',
    'Facebook = Felia Citra Dwiyani',
    'Whatsapp = +6282326080937',
  ];
  const [nameIndex, setNameIndex] = useState(0);
  const themes = useContext(ThemeContext);
  return (
    <div style={themes}>
      <p>{`Hello You Can Contact me on ${name}`}</p>
      <button
        type="submit"
        onClick={() => {
          setName(listName[nameIndex]);
          if (nameIndex === 2) {
            setNameIndex(0);
          } else {
            setNameIndex(nameIndex + 1);
          }
        }}
      >
        <p align="center"> Other Contact</p>
      </button>
    </div>
  );
};
export default Kontak;
