import { CreateCategoryInt } from "@/types/interfaces";

export const createCategory = async (newCategory: CreateCategoryInt) => {
  const formDate = new FormData();
  formDate.append("name", newCategory.name);
  formDate.append("shortNote", newCategory.shortNote);

  const res = await fetch(`/category`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formDate,
  });

  if(!res.ok){
    throw new Error(`Failed to create category: ${res.status}`);
  }

  return res.json();
};
