import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ["red", "blue", "green"];

const size = {
  width: 400,
  height: 200,
};

const Summary = () => {
  return (
    <>
      <h1>Summary</h1>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div>process bar</div>

          <div className="summary-income-expense">
            <div className="flex justify-between">
              <p>Income</p>
              <input
                className="text-right"
                disabled={true}
                type="number"
                name=""
                id=""
                value={0}
              />
            </div>
            <div className="flex justify-between">
              <p>Expense</p>
              <input
                className="text-right"
                disabled={true}
                type="number"
                name=""
                id=""
                value={400}
              />
            </div>
          </div>

          <ul className="summary-details pl-3">
            <li>fuel</li>
            <li>gas</li>
            <li>wine</li>
            <li>nodule</li>
          </ul>
          <div>------------------</div>

          <div className="summary-balance">
            <div className="flex justify-between">
              <p>Balance</p>
              <input
                className="text-right"
                disabled={true}
                type="number"
                name=""
                id=""
                value={-400}
              />
            </div>
          </div>

          <div className="summary-wrap-in-ex-btn mt-4 flex gap-6 justify-center">
            <button>+ Income</button>
            <button>- Expense</button>
          </div>
        </div>

        <div className="col-span-1">
          <Box flexGrow={1}>
            <div className="flex justify-center">
              <Typography>Item</Typography>
            </div>
            <PieChart
              series={[
                {
                  data: [
                    { value: 10, color: "orange" },
                    { value: 15 },
                    { value: 20 },
                  ],
                },
              ]}
              {...pieParams}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Summary;
