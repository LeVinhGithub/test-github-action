//Table
export const tableListLocator = async (tableName: string): Promise<string> => {
  return `//ul[@data-rbd-droppable-id]//span[text()='${tableName}s']`;
};

export const tableLocator = async (): Promise<string> => {
  return `ul[data-rbd-droppable-id]`;
};

// Relation
export const relationLocator = async (
  relationName: string
): Promise<string> => {
  return `//div[div/div/span[text()='${relationName}']]`;
};

export const relationAddButtonLocator = async (
  relationName: string
): Promise<string> => {
  const relation = await relationLocator(relationName);
  return `${relation}//button`;
};

export const relationDropdownLocator = async (
  relationName: string,
  index: number
): Promise<string> => {
  const relation = await relationLocator(relationName);
  return `${relation}/div[2]/div[${index}]`;
};

//Checkbox
export const checkboxLabelLocator = async (label: string): Promise<string> => {
  return `//div[label[text()='${label}']]`;
};

export const checkboxInputLocator = async (label: string): Promise<string> => {
  const checkboxLabel = await checkboxLabelLocator(label);
  return `${checkboxLabel}/input`;
};
