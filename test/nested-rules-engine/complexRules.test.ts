import { executeEngine } from 'nested-rules-engine';
import { expect } from '@jest/globals';

// Define a type for the result object
interface EngineResult {
  result: any;
  logs: any[];
}

describe('Nested Rules Engine: Complex Rules', () => {
  it('should handle deeply nested rules', () => {
    // Define complex nested rules
    const rules = {
      is_user_authenticated: {
        has_admin_role: {
          has_permission_level_high: 'perform_admin_action',
          has_permission_level_medium: 'perform_manager_action',
          default: 'perform_limited_admin_action',
        },
        has_manager_role: {
          has_permission_level_high: 'perform_manager_action',
          default: 'perform_limited_manager_action',
        },
        has_user_role: 'perform_user_action',
        default: 'perform_guest_action',
      },
      default: 'redirect_to_login',
    };

    // Define the functions for rule evaluation
    const functions = {
      // Authentication checks
      is_user_authenticated: ({ user }) => user && user.authenticated === true,

      // Role checks
      has_admin_role: ({ user }) => user.role === 'admin',
      has_manager_role: ({ user }) => user.role === 'manager',
      has_user_role: ({ user }) => user.role === 'user',

      // Permission level checks
      has_permission_level_high: ({ user }) => user.permissionLevel >= 8,
      has_permission_level_medium: ({ user }) => user.permissionLevel >= 5,

      // Default fallback
      default: () => true,

      // Actions
      perform_admin_action: () => ({
        action: 'admin',
        message: 'Full administrative access granted',
        level: 'high',
      }),
      perform_limited_admin_action: () => ({
        action: 'admin',
        message: 'Limited administrative access granted',
        level: 'medium',
      }),
      perform_manager_action: () => ({
        action: 'manager',
        message: 'Manager access granted',
        level: 'medium',
      }),
      perform_limited_manager_action: () => ({
        action: 'manager',
        message: 'Limited manager access granted',
        level: 'low',
      }),
      perform_user_action: () => ({
        action: 'user',
        message: 'Standard user access granted',
        level: 'low',
      }),
      perform_guest_action: () => ({
        action: 'guest',
        message: 'Guest access granted',
        level: 'minimal',
      }),
      redirect_to_login: () => ({
        action: 'redirect',
        message: 'Please log in to continue',
        level: 'none',
      }),
    };

    // Test case 1: Admin with high permission
    const adminHighInput = {
      user: {
        authenticated: true,
        role: 'admin',
        permissionLevel: 9,
      },
    };

    const adminHighResult = executeEngine(
      adminHighInput,
      functions,
      rules
    ) as EngineResult;
    expect(adminHighResult.result).toEqual({
      action: 'admin',
      message: 'Full administrative access granted',
      level: 'high',
    });

    // Test case 2: Admin with medium permission
    const adminMediumInput = {
      user: {
        authenticated: true,
        role: 'admin',
        permissionLevel: 6,
      },
    };

    const adminMediumResult = executeEngine(
      adminMediumInput,
      functions,
      rules
    ) as EngineResult;
    expect(adminMediumResult.result).toEqual({
      action: 'manager',
      message: 'Manager access granted',
      level: 'medium',
    });

    // Test case 3: Admin with low permission
    const adminLowInput = {
      user: {
        authenticated: true,
        role: 'admin',
        permissionLevel: 3,
      },
    };

    const adminLowResult = executeEngine(
      adminLowInput,
      functions,
      rules
    ) as EngineResult;
    expect(adminLowResult.result).toEqual({
      action: 'admin',
      message: 'Limited administrative access granted',
      level: 'medium',
    });

    // Test case 4: Manager with high permission
    const managerHighInput = {
      user: {
        authenticated: true,
        role: 'manager',
        permissionLevel: 9,
      },
    };

    const managerHighResult = executeEngine(
      managerHighInput,
      functions,
      rules
    ) as EngineResult;
    expect(managerHighResult.result).toEqual({
      action: 'manager',
      message: 'Manager access granted',
      level: 'medium',
    });

    // Test case 5: Regular user
    const userInput = {
      user: {
        authenticated: true,
        role: 'user',
        permissionLevel: 3,
      },
    };

    const userResult = executeEngine(
      userInput,
      functions,
      rules
    ) as EngineResult;
    expect(userResult.result).toEqual({
      action: 'user',
      message: 'Standard user access granted',
      level: 'low',
    });

    // Test case 6: Unauthenticated user
    const unauthenticatedInput = {
      user: {
        authenticated: false,
        role: 'user',
        permissionLevel: 1,
      },
    };

    const unauthenticatedResult = executeEngine(
      unauthenticatedInput,
      functions,
      rules
    ) as EngineResult;
    expect(unauthenticatedResult.result).toEqual({
      action: 'redirect',
      message: 'Please log in to continue',
      level: 'none',
    });
  });

  it('should handle rules with multiple conditions', () => {
    // Rules for an e-commerce order processing system
    const rules = {
      is_valid_order: {
        has_sufficient_inventory: {
          is_payment_approved: 'process_order',
          is_payment_pending: 'hold_order',
          default: 'request_payment',
        },
        default: 'notify_out_of_stock',
      },
      default: 'reject_invalid_order',
    };

    const functions = {
      // Order validation
      is_valid_order: ({ order }) =>
        order &&
        order.items &&
        order.items.length > 0 &&
        order.customer &&
        order.totalAmount > 0,

      // Inventory check
      has_sufficient_inventory: ({ order, inventory }) => {
        return order.items.every(
          (item) => inventory[item.id] && inventory[item.id] >= item.quantity
        );
      },

      // Payment checks
      is_payment_approved: ({ order }) => order.paymentStatus === 'approved',
      is_payment_pending: ({ order }) => order.paymentStatus === 'pending',

      // Default fallback
      default: () => true,

      // Actions
      process_order: () => ({
        status: 'processing',
        message: 'Order is being processed',
        nextStep: 'shipping',
      }),
      hold_order: () => ({
        status: 'on-hold',
        message: 'Order is on hold pending payment',
        nextStep: 'payment-verification',
      }),
      request_payment: () => ({
        status: 'awaiting-payment',
        message: 'Payment required to process order',
        nextStep: 'payment',
      }),
      notify_out_of_stock: () => ({
        status: 'out-of-stock',
        message: 'One or more items are out of stock',
        nextStep: 'inventory-notification',
      }),
      reject_invalid_order: () => ({
        status: 'rejected',
        message: 'Order is invalid',
        nextStep: 'customer-notification',
      }),
    };

    // Test case 1: Valid order, sufficient inventory, payment approved
    const validOrderInput = {
      order: {
        id: '12345',
        customer: { id: 'cust-001', name: 'John Doe' },
        items: [
          { id: 'prod-001', name: 'Widget', quantity: 2, price: 10.99 },
          { id: 'prod-002', name: 'Gadget', quantity: 1, price: 24.99 },
        ],
        totalAmount: 46.97,
        paymentStatus: 'approved',
      },
      inventory: {
        'prod-001': 10,
        'prod-002': 5,
      },
    };

    const validOrderResult = executeEngine(
      validOrderInput,
      functions,
      rules
    ) as EngineResult;
    expect(validOrderResult.result).toEqual({
      status: 'processing',
      message: 'Order is being processed',
      nextStep: 'shipping',
    });

    // Test case 2: Valid order, sufficient inventory, payment pending
    const pendingPaymentInput = {
      order: {
        id: '12346',
        customer: { id: 'cust-002', name: 'Jane Smith' },
        items: [{ id: 'prod-001', name: 'Widget', quantity: 1, price: 10.99 }],
        totalAmount: 10.99,
        paymentStatus: 'pending',
      },
      inventory: {
        'prod-001': 10,
        'prod-002': 5,
      },
    };

    const pendingPaymentResult = executeEngine(
      pendingPaymentInput,
      functions,
      rules
    ) as EngineResult;
    expect(pendingPaymentResult.result).toEqual({
      status: 'on-hold',
      message: 'Order is on hold pending payment',
      nextStep: 'payment-verification',
    });

    // Test case 3: Valid order, insufficient inventory
    const insufficientInventoryInput = {
      order: {
        id: '12347',
        customer: { id: 'cust-003', name: 'Bob Johnson' },
        items: [{ id: 'prod-001', name: 'Widget', quantity: 20, price: 10.99 }],
        totalAmount: 219.8,
        paymentStatus: 'approved',
      },
      inventory: {
        'prod-001': 10,
        'prod-002': 5,
      },
    };

    const insufficientInventoryResult = executeEngine(
      insufficientInventoryInput,
      functions,
      rules
    ) as EngineResult;
    expect(insufficientInventoryResult.result).toEqual({
      status: 'out-of-stock',
      message: 'One or more items are out of stock',
      nextStep: 'inventory-notification',
    });

    // Test case 4: Invalid order
    const invalidOrderInput = {
      order: {
        id: '12348',
        customer: { id: 'cust-004', name: 'Alice Brown' },
        items: [],
        totalAmount: 0,
        paymentStatus: 'approved',
      },
      inventory: {
        'prod-001': 10,
        'prod-002': 5,
      },
    };

    const invalidOrderResult = executeEngine(
      invalidOrderInput,
      functions,
      rules
    ) as EngineResult;
    expect(invalidOrderResult.result).toEqual({
      status: 'rejected',
      message: 'Order is invalid',
      nextStep: 'customer-notification',
    });
  });
});
