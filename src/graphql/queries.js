/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDiscountCode = /* GraphQL */ `
  query GetDiscountCode($id: ID!) {
    getDiscountCode(id: $id) {
      description
      code
      discountDecimal
      id
      createdAt
      updatedAt
    }
  }
`;
export const listDiscountCodes = /* GraphQL */ `
  query ListDiscountCodes(
    $filter: ModelDiscountCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscountCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        description
        code
        discountDecimal
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDansInventory = /* GraphQL */ `
  query GetDansInventory($id: ID!) {
    getDansInventory(id: $id) {
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
export const listDansInventories = /* GraphQL */ `
  query ListDansInventories(
    $filter: ModelDansInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDansInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
