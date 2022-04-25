/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createDansOrder = /* GraphQL */ `
  mutation CreateDansOrder(
    $input: CreateDansOrderInput!
    $condition: ModelDansOrderConditionInput
  ) {
    createDansOrder(input: $input, condition: $condition) {
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
export const updateDansOrder = /* GraphQL */ `
  mutation UpdateDansOrder(
    $input: UpdateDansOrderInput!
    $condition: ModelDansOrderConditionInput
  ) {
    updateDansOrder(input: $input, condition: $condition) {
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
export const deleteDansOrder = /* GraphQL */ `
  mutation DeleteDansOrder(
    $input: DeleteDansOrderInput!
    $condition: ModelDansOrderConditionInput
  ) {
    deleteDansOrder(input: $input, condition: $condition) {
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
