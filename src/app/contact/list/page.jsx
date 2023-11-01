"use client"
import React, { useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";

const QueryTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "fullname",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Query",
        accessor: "description",
      },
    ],
    []
  );

  const [allQuery, setAllQuery] = useState(data || []);

  useEffect(() => {
    if (!data) {
      const fetchQuery = async () => {
        const response = await fetch("/api/userquery", { cache: "no-cache" });
        const data = await response.json();
        setAllQuery(data);
      };

      fetchQuery();
    }
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize, pageCount },
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data: allQuery,
      initialState: { pageIndex: 0 }, // Set initial page index to 0
    },
    usePagination
  );

  return (
    <div className="p-10">
      <div className="text-center mb-6">
        <h1 className="text-6xl font-bold mb-2 gradient-text">User Queries</h1>
        <p className="text-yellow-700">All your queries displayed here..</p>
      </div>
      <div className="mx-auto w-16 border-t-2 border-gray-400 mb-8"></div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="border border-gray-300 p-2">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="border border-gray-300 p-2">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <span>
          Page {pageIndex + 1} of {pageCount}
        </span>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {">>"}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default QueryTable;
