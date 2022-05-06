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
export const createDiscountCode = /* GraphQL */ `
  mutation CreateDiscountCode(
    $input: CreateDiscountCodeInput!
    $condition: ModelDiscountCodeConditionInput
  ) {
    createDiscountCode(input: $input, condition: $condition) {
      description
      code
      discountDecimal
      id
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
      description
      code
      discountDecimal
      id
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
      description
      code
      discountDecimal
      id
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createInventoryOrder = /* GraphQL */ `
  mutation CreateInventoryOrder(
    $input: CreateInventoryOrderInput!
    $condition: ModelInventoryOrderConditionInput
  ) {
    createInventoryOrder(input: $input, condition: $condition) {
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
export const updateInventoryOrder = /* GraphQL */ `
  mutation UpdateInventoryOrder(
    $input: UpdateInventoryOrderInput!
    $condition: ModelInventoryOrderConditionInput
  ) {
    updateInventoryOrder(input: $input, condition: $condition) {
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
export const deleteInventoryOrder = /* GraphQL */ `
  mutation DeleteInventoryOrder(
    $input: DeleteInventoryOrderInput!
    $condition: ModelInventoryOrderConditionInput
  ) {
    deleteInventoryOrder(input: $input, condition: $condition) {
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
