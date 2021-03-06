import React, { Component, Fragment } from "react";
import { Table, Form } from "react-bootstrap";

import PrescriptionModal from "../Prescriptions/PrescriptionModal";
import DiagnosisModal from "../Diagnoses/DiagnosisModal";
import providers from "../../../../data/providers";
import providersSocial from "../../../../data/providersSocial";

class ActiveProvider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showPrescription: false,
      showDiagnosis: false
    };
  }

  handleClose(item) {
    this.setState({ [item]: false });
  }

  handleShow(item) {
    this.setState({ [item]: true });
  }

  render() {
    const { record, back } = this.props;
    return (
      <Fragment>
        <div className="record-heading-wrapper d-flex justify-content-between align-items-center pt-5 pb-2 mb-3">
          <div>
            <h2>{record.name}</h2>
            <p className="subheading">{record.clinic}</p>
          </div>
          <button onClick={back} className="button--reset">
            <img src="/images/icons/arrow-back.png" alt="" className="mr-2" />
            Go back to providers
          </button>
        </div>
        <h3>Associated Records</h3>
        <Table hover responsive className="table--records">
          <thead>
            <tr>
              <th>Date</th>
              <th>Record Name</th>
              <th>Provider</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{record.date}</td>
              <td
                className="modal-link"
                onClick={() => this.handleShow("showPrescription")}
              >
                Prescription: Betaxolo (Beta Blocker)
              </td>
              <td>{record.name}</td>
            </tr>
            <tr>
              <td>{record.date}</td>
              <td
                className="modal-link"
                onClick={() => this.handleShow("showDiagnosis")}
              >
                High Blood Pressure
              </td>
              <td>{record.name}</td>
            </tr>
          </tbody>
        </Table>
        <PrescriptionModal
          show={this.state.showPrescription}
          handleClose={() => this.handleClose("showPrescription")}
          name={record.name}
        />
        <DiagnosisModal
          show={this.state.showDiagnosis}
          handleClose={() => this.handleClose("showDiagnosis")}
          name={record.name}
        />
      </Fragment>
    );
  }
}

class Providers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProvider: null
    };

    this.onClick = this.onClick.bind(this);
    this.back = this.back.bind(this);
  }

  onClick(record) {
    this.setState({ activeProvider: record });
  }

  back() {
    this.setState({ activeProvider: null });
  }

  render() {
    const { activeProvider } = this.state;
    if (activeProvider) {
      return <ActiveProvider record={activeProvider} back={this.back} />;
    }

    return (
      <Fragment>
        <div className="heading-with-sort d-flex justify-content-between align-items-center mt-5 mb-3">
          <h2>Social Providers</h2>
          <Form className="mb-2" inline>
            <Form.Group controlId="sortOption">
              <Form.Label className="mr-2 mb-0">Sort by</Form.Label>
              <Form.Control as="select">
                <option>Most Recent</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <Table hover className="table--records mt-2">
          <thead>
            <tr>
              <th>Agent Name</th>
              <th>Organization</th>
              <th>Date Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {providersSocial.map((record, key) => (
              <tr key={key}>
                <td className="modal-link">{record.name}</td>
                <td>{record.clinic}</td>
                <td>{record.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="heading-with-sort d-flex justify-content-between align-items-center mt-5 mb-3">
          <h2>Physician Providers</h2>
          <Form className="mb-2" inline>
            <Form.Group controlId="sortOption">
              <Form.Label className="mr-2 mb-0">Sort by</Form.Label>
              <Form.Control as="select">
                <option>Most Recent</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <Table hover className="table--records mt-2">
          <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Clinic</th>
            <th>Date Last Seen</th>
          </tr>
          </thead>
          <tbody>
          {providers.map((record, key) => (
            <tr key={key}>
              <td className="modal-link" onClick={() => this.onClick(record)}>
                {record.name}
              </td>
              <td>{record.clinic}</td>
              <td>{record.date}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default Providers;
