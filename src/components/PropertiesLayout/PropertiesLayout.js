import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

import Grid from '../../components/Grid/Grid';

class PropertiesLayout extends Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSaveNewPropertyClick = this.handleSaveNewPropertyClick.bind(this);
  }

  handleOpen() {
    this.setState({
      modalOpen: true,
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false,
    });
  }

  handleSaveNewPropertyClick() {
    this.handleClose();
    // this.props.handleSaveNewProperty();
  }

  render() {
    const { propertiesList } = this.props;
    const { modalOpen } = this.state;

    return (
      <article>
        Here is the grid

        <Grid data={propertiesList} />

        <Modal
          trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
          open={modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Header</Modal.Header>
          <Modal.Content>Content</Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleSaveNewPropertyClick}>Got it</Button>
          </Modal.Actions>
        </Modal>
      </article>
    );
  }
}

PropertiesLayout.propTypes = {
  // handleSaveNewProperty: PropTypes.func.isRequired,
  propertiesList: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PropertiesLayout;
