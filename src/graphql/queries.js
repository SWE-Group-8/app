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
      quantity
      discountCode {
        description
        code
        discountDecimal
        id
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          dansInventoryID
          orderID
          dansInventory {
            id
            name
            color
            price
            fabric
            type
            image
            quantity
            createdAt
            updatedAt
            dansInventoryDiscountCodeId
          }
          order {
            user
            totalPrice
            tax
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
      dansInventoryDiscountCodeId
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
        quantity
        discountCode {
          description
          code
          discountDecimal
          id
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            dansInventoryID
            orderID
            createdAt
            updatedAt
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
        dansInventoryDiscountCodeId
      }
      nextToken
    }
  }
`;
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
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      user
      totalPrice
      tax
      iventoriesItems {
        items {
          id
          dansInventoryID
          orderID
          dansInventory {
            id
            name
            color
            price
            fabric
            type
            image
            quantity
            createdAt
            updatedAt
            dansInventoryDiscountCodeId
          }
          order {
            user
            totalPrice
            tax
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      id
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
        user
        totalPrice
        tax
        iventoriesItems {
          items {
            id
            dansInventoryID
            orderID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInventoryOrder = /* GraphQL */ `
  query GetInventoryOrder($id: ID!) {
    getInventoryOrder(id: $id) {
      id
      dansInventoryID
      orderID
      dansInventory {
        id
        name
        color
        price
        fabric
        type
        image
        quantity
        discountCode {
          description
          code
          discountDecimal
          id
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            dansInventoryID
            orderID
            createdAt
            updatedAt
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
        dansInventoryDiscountCodeId
      }
      order {
        user
        totalPrice
        tax
        iventoriesItems {
          items {
            id
            dansInventoryID
            orderID
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listInventoryOrders = /* GraphQL */ `
  query ListInventoryOrders(
    $filter: ModelInventoryOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dansInventoryID
        orderID
        dansInventory {
          id
          name
          color
          price
          fabric
          type
          image
          quantity
          discountCode {
            description
            code
            discountDecimal
            id
            createdAt
            updatedAt
          }
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
          dansInventoryDiscountCodeId
        }
        order {
          user
          totalPrice
          tax
          iventoriesItems {
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
