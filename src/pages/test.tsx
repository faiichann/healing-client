import { Modal, Button} from "antd";
import { useEffect, useState } from "react";

function Test() {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
      };
    const handleCancel = () => {
        setIsModalVisible(false)
    };
    const handleOk = () => {
        setIsModalVisible(false)
    }

    useEffect(() => {
      console.log(isModalVisible)
    }, [isModalVisible])
    return (
       <>
       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
       <Button type="primary" onClick={showModal}>Modal</Button>
       </>
    );
}

export default  Test;