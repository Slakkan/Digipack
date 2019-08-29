import * as React from "react";

export interface ContactProps {
  userID: string | undefined
}

export interface ContactState {
  userID: string | undefined;
}

class Contact extends React.Component<ContactProps, ContactState> {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Contact;
