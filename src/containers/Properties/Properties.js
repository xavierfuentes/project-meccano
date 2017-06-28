import { connect } from 'react-redux';

import { getPropertiesList } from '../../data/properties/selectors';
import { createProperty } from '../../data/properties/actions';
import PropertiesLayout from '../../components/PropertiesLayout/PropertiesLayout';

const mapStateToProps = state => ({
  propertiesList: getPropertiesList(state),
});

const mapDispatchToProps = {
  handleSaveNewProperty: createProperty,
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesLayout);
