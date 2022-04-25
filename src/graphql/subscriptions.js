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
export const onCreateDiscountCode = /* GraphQL */ `
  subscription OnCreateDiscountCode {
    onCreateDiscountCode {
      id
      description
      code
      discountDecimal
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDiscountCode = /* GraphQL */ `
  subscription OnUpdateDiscountCode {
    onUpdateDiscountCode {
      id
      description
      code
      discountDecimal
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDiscountCode = /* GraphQL */ `
  subscription OnDeleteDiscountCode {
    onDeleteDiscountCode {
      id
      description
      code
      discountDecimal
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateDansOrder = /* GraphQL */ `
  subscription OnCreateDansOrder {
    onCreateDansOrder {
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
export const onUpdateDansOrder = /* GraphQL */ `
  subscription OnUpdateDansOrder {
    onUpdateDansOrder {
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
export const onDeleteDansOrder = /* GraphQL */ `
  subscription OnDeleteDansOrder {
    onDeleteDansOrder {
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
