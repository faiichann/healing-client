import { Modal } from "antd";
import { useState } from "react";

const Header = () => {
   const [visible, setVisibleModal] = useState(false)

  const HandleButton = () => {
   setVisibleModal(!visible)
  };
  const handleOk = () => {
    setVisibleModal(false);
  };

  const handleCancel = () => {
    setVisibleModal(false);
  };

  return (
    <>
      <Modal title="Information" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>you have to guess the word correctly</p>
      </Modal>
      <h1>React Hangman Games</h1>
      <p>Find the hidden word!</p>
      <button onClick={HandleButton}>Rules</button>
    </>
  );
};

export default Header;