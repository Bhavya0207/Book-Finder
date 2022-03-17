import React from 'react'

function search(props) {
  return (
    <>
      <div style={{ width: "100%", height: "20%", textAlign: "center" }}>
        <input onChange={(e) => props.setSearch(e.target.value)} />
      </div>
    </>
  );
}


export default search
