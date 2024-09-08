/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

import { Divide } from "lucide-react";
import { useDispatch } from "react-redux";
// import { rowValue } from "@/redux/Reducer/MainSlice";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PaginationDiv from "../ui/table/PaginationDiv";
import TableModel from "../ui/table/TableModel";
import FilterDiv from "../ui/table/FilterDiv";
import { getCategories } from "@/api/api";

const LatestNewsTable = () => {
  // ============ DATA FETCHING ============
  const {
    isLoading,
    isError,
    data: allCategories,
    refetch,
  } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getCategories(),
  });
  console.log("allCategories", allCategories);

  const [editData, setEditData] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [allNews, setAllNews] = useState([]);

  const dispatch = useDispatch();

  // const handleEdit = (rowData: any) => {
  // 	console.log("rowData", rowData);
  // 	dispatch(rowValue(rowData)); // Dispatching the action to update Redux store
  // 	setEditData(rowData); // Set the data to edit
  // 	setEditModalOpen(true); // Open the Edit Dialog
  // };

  // Close the Add modal
  const handleCloseAdd = () => {
    setAddModalOpen(false);
  };

  // ================ DEFINING COLUMN ===============
  const COLUMNS = [
    {
      header: "ID",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Short Name",
      accessorKey: "shortName",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Active Status",
      accessorKey: "active_status",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (row: any) => (
        <>
          {row.row.original.active_status ? (
            <div className="text-base font-bold text-[#49A700] text-center">
              Active
            </div>
          ) : (
            <div className="text-base font-bold text-[#F55050] text-center">
              Inactive
            </div>
          )}
        </>
      ),
    },
    {
      header: "Edit",
      accessor: "edit",
      enableSorting: false,
      cell: (row: any) => (
        <div className="flex justify-center items-center">
          <button
            // onClick={() => handleEdit(row.row.original)}
            className="bg-[#F17B25] text-[#FEFCFF] font-medium text-sm p-2 rounded"
          >
            <MdOutlineEdit className="w-4 h-4 text-[#FEFCFF]" />
          </button>
        </div>
      ),
    },
  ];

  // ================= MEMOIZATION ================
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => allCategories, [allCategories]);

  // ================ TABLE FUNCITONALITY ===============
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  // ================= TABLE INSTANCE PROPERTIES ===========
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnVisibility: columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });

  // console.log(table.getHeaderGroups());
  if (isLoading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        {/* <ScaleLoader color="#421957" height={70} radius={8} width={10} /> */}
      </div>
    );

  return (
    <>
      <section className="">
        <div className="text-3xl p-4 border-b-2 border-borderColor">
          All Categories
        </div>
        <div className="p-6">
        

          <FilterDiv
            filtering={filtering}
            setFiltering={setFiltering}
            data={data}
            table={table}
            title={"Add Latest News"}
            open={addModalOpen}
            onOpenChange={setAddModalOpen}
          >
            {/* <LatestNewsForm refetch={refetch} modalClose={handleCloseAdd} /> */}
          </FilterDiv>

          {isLoading ? (
            // <ScaleLoader color="#421957" height={70} radius={8} width={10} />
            <p>Loadin=g .......</p>
          ) : (
            // <p>ok</p>
            <TableModel table={table} />
          )}

          {!isLoading && <PaginationDiv table={table} />}

          <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
            <DialogContent className="bg-white w-[80vw]">
              {/* <EditLatesNewsForm
								setEditModalOpen={setEditModalOpen}
								refetch={refetch}
							/> */}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
};

export default LatestNewsTable;
