import { CreateOrderRazorpayOption } from "./type";

interface RazorpayOptions {
    key: string;
    amount: number;
    currency?: string;
    name?: string;
    description?: string;
    order_id?: string;
    handler?: (response: RazorpayResponse) => void;
    prefill?: {
      name?: string;
      email?: string;
      contact?: string;
    };
    theme?: {
      color?: string;
    };
  }
  
  interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }
  
  interface RazorpayInstance {
    open: () => void;
    close: () => void;
    on: (event: string, callback: (response) => void) => void;
  }
  
  declare global {
    interface Window {
      Razorpay: new (options:CreateOrderRazorpayOption) => RazorpayInstance;
    }
  }