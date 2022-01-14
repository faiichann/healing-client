const Notification = ({ showNotification }: any ) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;