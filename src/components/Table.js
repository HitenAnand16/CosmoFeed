import React from "react";

const Table = ({ data, handleMemberClick }) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Total Onboarding</th>
          <th style={styles.th}>Pending</th>
          <th style={styles.th}>Approved</th>
          <th style={styles.th}>Rejected</th>
          <th style={styles.th}>Unique</th>
          <th style={styles.th}>Duplicate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((member) => (
          <tr
            key={member.id}
            onClick={() => handleMemberClick(member.id)}
            style={styles.tr}
          >
            <td style={styles.td}>{member.name}</td>
            <td style={styles.td}>{member.totalOnboarding}</td>
            <td style={styles.td}>{member.pending}</td>
            <td style={styles.td}>{member.approved}</td>
            <td style={styles.td}>{member.rejected}</td>
            <td style={styles.td}>{member.unique}</td>
            <td style={styles.td}>{member.duplicate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  th: {
    backgroundColor: "#f2f2f2",
    padding: "8px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },
  td: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },
  tr: {
    cursor: "pointer",
  },
};

export default Table;
