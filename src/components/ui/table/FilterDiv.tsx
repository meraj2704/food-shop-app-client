"use client";

import { useState } from "react";
import { MdVisibility } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import * as XLSX from "xlsx";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../dropdown-menu";
import { Button } from "../button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

interface FilterDivProps {
	filtering: string;
	setFiltering: React.Dispatch<React.SetStateAction<string>>;
	table: any;
	data: any;
	title:string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

type Checked = DropdownMenuCheckboxItemProps["checked"];

const FilterDiv: React.FC<FilterDivProps> = ({
	filtering,
	setFiltering,
	table,
	data,
	title,
	open,
    onOpenChange,
}) => {
	// const [showOptions, setShowOptions] = useState(false);

	// ============================= EXPORT STATES =============================
	const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
	const [showPanel, setShowPanel] = useState<Checked>(false);

	const handleExportExcel = () => {
		const worksheet = XLSX.utils.json_to_sheet(
			table
				.getPaginationRowModel()
				.flatRows.map((row: { original: any }) => row.original)
		);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
		const excelBuffer = XLSX.write(workbook, {
			bookType: "xlsx",
			type: "array",
		});
		const excelBlob = new Blob([excelBuffer], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});
		// saveAs(excelBlob, `${title}.xlsx`);
	};

	return (
		<div className="flex justify-between max-md:flex-col gap-4 mb-4 print:hidden">
			{/* ===================================== SEARCH INPUT ========================== */}
			<div>
				<label className="relative block">
					<span className="sr-only">Search</span>
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<TbSearch className="h-5 w-5 text-slate-300" />
					</span>
					<input
						className=" placeholder:text-slate-400 block bg-white w-full border border-indigo-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
						placeholder="Search for anything..."
						type="text"
						name="search"
						value={filtering || ""}
						onChange={(e) => setFiltering(e.target.value)}
						maxLength={50}
					/>
				</label>
			</div>

			{/* ======================================= EXPORT OPTION ================================== */}
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">Export</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuSeparator />
						<DropdownMenuCheckboxItem
							checked={showStatusBar}
							onCheckedChange={setShowStatusBar}
							className="pl-6"
						>
							PDF
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={showPanel}
							onCheckedChange={setShowPanel}
							className="pl-6"
						>
							Excel
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* <div className="flex justify-center items-center max-lg:w-full gap-2"> */}
			{/* =================================================== COLUMN DESCRIPTION DIV =============================== */}
			{/* <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-sm bg-white border-indigo-300 text-[#0B181C]  hover:bg-indigo-100 hover:text-indigo-600 flex gap-2 font-medium "
          >
            <MdVisibility /> Column Visibility
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-white"
          >
            <div className="card-body">
              <div className="inline-block">
                <div className="px-1 ">
                  <label>
                    <input
                      className="mr-2"
                      {...{
                        type: "checkbox",
                        checked: table.getIsAllColumnsVisible(),
                        onChange: table.getToggleAllColumnsVisibilityHandler(),
                      }}
                    />
                    Toggle All
                  </label>
                </div>
                {table.getAllLeafColumns().map((column: any) => {
                  return (
                    <div key={column.id} className="px-1">
                      <label>
                        <input
                          className="mr-2"
                          {...{
                            type: "checkbox",
                            checked: column.getIsVisible(),
                            onChange: column.getToggleVisibilityHandler(),
                          }}
                        />
                        {column.columnDef.header}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}
			{/* </div> */}

			{/* ======================================= ADD EVENT ======================================= */}
			<div className="bg-primary hover:bg-red-800  py-1 px-4 rounded-lg text-sm font-bold flex items-center justify-center border-2 border-red-800 text-red-800 hover:text-white">
				<button>Add Event</button>
			</div>

			{/* ================================= SHOW ENTRIES NO AT TOP =================================== */}
			{/* <div className="flex justify-center items-center">
<select
className=" placeholder:text-slate-400 block bg-white w-full border border-indigo-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm hover:bg-indigo-100 cursor-pointer hover:text-indigo-700"
// className="btn btn-sm bg-white border-indigo-300 text-[#0B181C]  hover:bg-indigo-100 hover:text-indigo-600 flex w-32 gap-2 font-medium"
value={table.setPageSize.length}
// value={pageSize}
onChange={(e) => {
const value =
e.target.value === "all" ? data.length : Number(e.target.value);
// setPageSize(value);
}}
>
{[10, 20, 30, 40, 50].map((pageSize) => (
<option
className="mr-4 cursor-pointer bg-white"
key={pageSize}
value={pageSize}
>
Show {pageSize}
</option>
))}
<option
className="mr-4 cursor-pointer animation bg-white"
value={data?.length}
>
Show All
</option>
</select>
</div> */}
		</div>
	);
};

export default FilterDiv;
