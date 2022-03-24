import React from "react";

import { useHistory } from "react-router-dom";

const Main = (props) => {
  const history = useHistory();

  const day = ["월","화","수","목","금","토","일"]

  console.log(day);

  const week_rates =day.map((w, idx) => {
    return {
      day: w,
      rate:
        Math.floor(Math.random() * (5 - 1) + 1)
    };
  });

  console.log(week_rates);

  return (
    <>
      <div
        style={{
          maxWidth: "350px",
          width: "80vw",
          height: "90vh",
          margin: "5vh auto",
          padding: "5vh 0",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>내 일주일은?</h3>

        {week_rates.map((w, idx) => {
          return (
            <div
              key={`week_day_${idx}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0",
                width: "100%",
              }}
            >
         
              <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
                {w.day}
              </p>

              
              {Array.from({ length: 5 }, (item, idx) => {
                
                return (
                  <div
                    key={idx}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "5px",
                      backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                    }}
                  ></div>
                );
              })}

              <div
                style={{
                  appearance: "none",
                  backgroundColor: "transparent",
                  borderColor: "purple",
                  width: "0",
                  height: "0",
                  borderTop: "1rem solid transparent",
                  borderBottom: "1rem solid transparent",
                  borderLeft: "1.6rem solid purple",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  history.push(`/review/${w.day}`);
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
