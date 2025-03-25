import { useState, useEffect } from "react";
import "./App.css";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

import { sampleOrders } from "./data";
import darazLogo from "./assets/daraz.png";
import amazonLogo from "./assets/amazon.png";
import foodpandaLogo from "./assets/foodpanda.png";

const BRAND_THEME = {
  daraz: "#F85606",
  amazon: "#05A0D1",
  foodpanda: "#D60265",
};

const LOGO_MAP = {
  daraz: darazLogo,
  amazon: amazonLogo,
  foodpanda: foodpandaLogo,
};

const columns = [
  { id: "orderId", label: "Order ID", minWidth: 150 },
  { id: "customerName", label: "Customer Name", minWidth: 200 },
  {
    id: "amount",
    label: "Amount ($)",
    minWidth: 150,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "status", label: "Status", minWidth: 150 },
];

function App() {
  const [orders, setOrders] = useState([]);
  const [logo, setLogo] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [themeColor, setThemeColor] = useState("#000");

  useEffect(() => {
    const hostname = window.location.hostname;
    const parts = hostname.split(".")[0];
    setOrders(sampleOrders[parts] || []);
    setLogo(LOGO_MAP[parts] || null);
    setThemeColor(BRAND_THEME[parts] || "#000");
  }, []);

  const StyledTableRow = styled(TableRow)(() => ({
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: themeColor + "20", 
      transform: "scale(1.02)",
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div
      style={{
        backgroundColor: themeColor + "10",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {logo && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src={logo} alt="Brand Logo" style={{ height: "80px" }} />
        </div>
      )}

      <h1 style={{ color: themeColor, textAlign: "center" }}>Order List</h1>

      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 640 }}>
          <Table stickyHeader aria-label="Order Table">
            <TableHead>
              <TableRow style={{ backgroundColor: themeColor }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: themeColor,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {orders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={order.orderId}
                  >
                    {columns.map((column) => {
                      const value = order[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default App;
