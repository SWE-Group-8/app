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
      image
      orders {
        items {
          order_id
          id
          dans_id
          createdAt
          updatedAt
          dansInventoryOrdersId
          orderDansId
          dansOrderDansId
          dansOrderOrderId
        }
        nextToken
      }
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
        orders {
          nextToken
        }
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
export const getDiscountCode = /* GraphQL */ `
  query GetDiscountCode($id: ID!) {
    getDiscountCode(id: $id) {
      id
      description
      code
      discountDecimal
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
        id
        description
        code
        discountDecimal
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      dans {
        items {
          order_id
          id
          dans_id
          createdAt
          updatedAt
          dansInventoryOrdersId
          orderDansId
          dansOrderDansId
          dansOrderOrderId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        dans {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDansOrder = /* GraphQL */ `
  query GetDansOrder($id: ID!) {
    getDansOrder(id: $id) {
      order_id
      id
      dans_id
      dans {
        id
        name
        color
        price
        fabric
        type
        image
        orders {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      order {
        id
        user
        date
        total
        dans {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      dansInventoryOrdersId
      orderDansId
      dansOrderDansId
      dansOrderOrderId
    }
  }
`;
export const listDansOrders = /* GraphQL */ `
  query ListDansOrders(
    $filter: ModelDansOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDansOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        order_id
        id
        dans_id
        dans {
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
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        dansInventoryOrdersId
        orderDansId
        dansOrderDansId
        dansOrderOrderId
      }
      nextToken
    }
  }
`;
