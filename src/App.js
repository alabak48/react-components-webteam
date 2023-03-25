import React from "react";

const data = [
  "Apple",
  "Banana",
  "Cherry",
  "Durian",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Jackfruit",
  "Kiwi",
];

const Table = () => {
  const rows = [];
  for (let i = 0; i < 4; i++) {
    const cells = [];
    for (let j = 0; j < 4; j++) {
      const index = i * 4 + j;
      if (index < data.length) {
        cells.push(<td key={j}>{data[index]}</td>);
      } else {
        cells.push(<td key={j}></td>);
      }
    }
    rows.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
