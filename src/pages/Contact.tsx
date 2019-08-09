import * as React from "react";

import Header from "../components/Header";

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
        <Header />
      </div>
    );
  }
}

export default Contact;
