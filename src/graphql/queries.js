/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDansInventory = /* GraphQL */ `
  query GetDansInventory($id: ID!) {
    getDansInventory(id: $id) {
      id
      name
      color
      price
      fabric
      type
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
