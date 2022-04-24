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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDansOrder = /* GraphQL */ `
  subscription OnCreateDansOrder {
    onCreateDansOrder {
      id
      order_id
      dans_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDansOrder = /* GraphQL */ `
  subscription OnUpdateDansOrder {
    onUpdateDansOrder {
      id
      order_id
      dans_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDansOrder = /* GraphQL */ `
  subscription OnDeleteDansOrder {
    onDeleteDansOrder {
      id
      order_id
      dans_id
      createdAt
      updatedAt
    }
  }
`;
