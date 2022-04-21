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
      file {
        bucket
        region
        key
      }
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
      file {
        bucket
        region
        key
      }
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
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDiscountCode = /* GraphQL */ `
  mutation CreateDiscountCode(
    $input: CreateDiscountCodeInput!
    $condition: ModelDiscountCodeConditionInput
  ) {
    createDiscountCode(input: $input, condition: $condition) {
      id
      description
      code
      discountDecimal
      createdAt
      updatedAt
    }
  }
`;
export const updateDiscountCode = /* GraphQL */ `
  mutation UpdateDiscountCode(
    $input: UpdateDiscountCodeInput!
    $condition: ModelDiscountCodeConditionInput
  ) {
    updateDiscountCode(input: $input, condition: $condition) {
      id
      description
      code
      discountDecimal
      createdAt
      updatedAt
    }
  }
`;
export const deleteDiscountCode = /* GraphQL */ `
  mutation DeleteDiscountCode(
    $input: DeleteDiscountCodeInput!
    $condition: ModelDiscountCodeConditionInput
  ) {
    deleteDiscountCode(input: $input, condition: $condition) {
      id
      description
      code
      discountDecimal
      createdAt
      updatedAt
    }
  }
`;
