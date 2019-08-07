import * as React from "react";

import Header from "../components/Header";

export interface ContactProps {}

export interface ContactState {
  userID: string | undefined;
}

class Contact extends React.Component<ContactProps, ContactState> {
  state = { userID: undefined };
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Contact;
