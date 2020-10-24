import React from 'react';
import Kontak from './Kontak';

const Contact = () => {
  const listName = ['Whatsapp = +6282326080937 '];
  const headerMapped = listName.map((name) => {
    return <Kontak headerName={name} />;
  });

  return (
    <div className="conten">
      <h2>Contact Me</h2>
      {headerMapped}

      <div className="footer">
        <p className="copy">Copyright@ 2020. Felia Citra</p>
      </div>
    </div>
  );
};

export default Contact;
