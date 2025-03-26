
import { CreateOrderRazorpayOption } from "./type";


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