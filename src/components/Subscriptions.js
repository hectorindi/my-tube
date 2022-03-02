import React from "react";

function Subscriptions() {
  const getSubscriptions = () => {
    return window.gapi.client.youtube.subscriptions
      .list({
        mine: true,
      })
      .then(function (response) {
        console.table(response);
      });
  };

  return (
    <div>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  );
}

export default Subscriptions;
