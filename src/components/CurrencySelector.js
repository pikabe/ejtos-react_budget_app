import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'react-bootstrap';

const CurrencySelector = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (eventKey) => {
    const selectedCurrency = eventKey;
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedCurrency,
    });
  };

  let currencySymbol;
  switch (currency) {
    case '$':
      currencySymbol = 'Currency($ Dollar)';
      break;
    case '£':
      currencySymbol = 'Currency(£ Pound)';
      break;
    case '€':
      currencySymbol = 'Currency(€ Euro)';
      break;
    case '₹':
      currencySymbol = 'Currency(₹ Ruppee)';
      break;
    default:
      currencySymbol = 'Currency';
  }
  const dropdownStyles = {
    backgroundColor: 'lightgreen',
  };
  

  return (
    <Dropdown onSelect={handleCurrencyChange} >
      <Dropdown.Toggle variant="secondary" id="currencyDropdown" style={dropdownStyles}>
        {currencySymbol}
      </Dropdown.Toggle>

      <Dropdown.Menu style={dropdownStyles}>
        <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
        <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
        <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
        <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CurrencySelector;
