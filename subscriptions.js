/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDansInventory = /* GraphQL */ `
  subscription OnCreateDansInventory {
    onCreateDansInventory {
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
  }
`;
export const onUpdateDansInventory = /* GraphQL */ `
  subscription OnUpdateDansInventory {
    onUpdateDansInventory {
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
  }
`;
export const onDeleteDansInventory = /* GraphQL */ `
  subscription OnDeleteDansInventory {
    onDeleteDansInventory {
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
  }
`;
export const onCreateDiscountCode = /* GraphQL */ `
  subscription OnCreateDiscountCode {
    onCreateDiscountCode {
      description
      code
      discountDecimal
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDiscountCode = /* GraphQL */ `
  subscription OnUpdateDiscountCode {
    onUpdateDiscountCode {
      description
      code
      discountDecimal
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDiscountCode = /* GraphQL */ `
  subscription OnDeleteDiscountCode {
    onDeleteDiscountCode {
      description
      code
      discountDecimal
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
  }
`;
export const onCreateInventoryOrder = /* GraphQL */ `
  subscription OnCreateInventoryOrder {
    onCreateInventoryOrder {
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
  }
`;
export const onUpdateInventoryOrder = /* GraphQL */ `
  subscription OnUpdateInventoryOrder {
    onUpdateInventoryOrder {
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
  }
`;
export const onDeleteInventoryOrder = /* GraphQL */ `
  subscription OnDeleteInventoryOrder {
    onDeleteInventoryOrder {
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
  }
`;
