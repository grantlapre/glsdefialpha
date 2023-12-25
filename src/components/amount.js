import Dropdown from 'react-bootstrap/Dropdown';

import DropdownButton from 'react-bootstrap/DropdownButton';

function Amount() {
  return (
    <Dropdown>
      <DropdownButton id="amountButton" title="Dropdown button">
        <Dropdown.Item value='1'>1</Dropdown.Item>
        <Dropdown.Item value='2'>2</Dropdown.Item>
        <Dropdown.Item value='3'>3</Dropdown.Item>
        <Dropdown.Item value='4'>4</Dropdown.Item>
        <Dropdown.Item value='5'>5</Dropdown.Item>
        <Dropdown.Item value='6'>6</Dropdown.Item>
        <Dropdown.Item value='7'>7</Dropdown.Item>
        <Dropdown.Item value='8'>8</Dropdown.Item>
        <Dropdown.Item value='9'>9</Dropdown.Item>
        <Dropdown.Item value='10'>10</Dropdown.Item>
        <Dropdown.Item value='11'>11</Dropdown.Item>
        <Dropdown.Item value='12'>12</Dropdown.Item>
        <Dropdown.Item value='13'>13</Dropdown.Item>
        <Dropdown.Item value='14'>14</Dropdown.Item>
        <Dropdown.Item value='15'>15</Dropdown.Item>
    </DropdownButton>
    const symAmount = document.getElementById("amountButton").value;
    document.getElementById("amountButton").title.value = "${symAmount}";
  );
}

export default Amount;