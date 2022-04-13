/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDansInventory = /* GraphQL */ `
  mutation CreateDansInventory(
    $input: CreateDansInventoryInput!
    $condition: ModelDansInventoryConditionInput
  ) {
    createDansInventory(input: $input, condition: $condition) {
      id
      name
      color
      price
      fabric
      type
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateDansInventory = /* GraphQL */ `
  mutation UpdateDansInventory(
    $input: UpdateDansInventoryInput!
    $condition: ModelDansInventoryConditionInput
  ) {
    updateDansInventory(input: $input, condition: $condition) {
      id
      name
      color
      price
      fabric
      type
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteDansInventory = /* GraphQL */ `
  mutation DeleteDansInventory(
    $input: DeleteDansInventoryInput!
    $condition: ModelDansInventoryConditionInput
  ) {
    deleteDansInventory(input: $input, condition: $condition) {
      id
      name
      color
      price
      fabric
      type
      image
      createdAt
      updatedAt
    }
  }
`;
