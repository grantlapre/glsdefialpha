import Dropdown from 'react-bootstrap/Dropdown';

function Amount() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Number of NFT to Mint
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >1</Dropdown.Item>
        <Dropdown.Item >2</Dropdown.Item>
        <Dropdown.Item >3</Dropdown.Item>
        <Dropdown.Item >4</Dropdown.Item>
        <Dropdown.Item >5</Dropdown.Item>
        <Dropdown.Item >6</Dropdown.Item>
        <Dropdown.Item >7</Dropdown.Item>
        <Dropdown.Item >8</Dropdown.Item>
        <Dropdown.Item >9</Dropdown.Item>
        <Dropdown.Item >10</Dropdown.Item>
        <Dropdown.Item >11</Dropdown.Item>
        <Dropdown.Item >12</Dropdown.Item>
        <Dropdown.Item >13</Dropdown.Item>
        <Dropdown.Item >14</Dropdown.Item>
        <Dropdown.Item >15</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Amount;