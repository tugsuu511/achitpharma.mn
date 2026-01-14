export type OrderStatus = "NEW" | "CONFIRMED" | "SHIPPED" | "CANCELLED";

export type OrderItemDTO = {
  qty: number;
  priceMnt: number;
  product: {
    name: string;
    sku: string | null;
  };
};

export type OrderDTO = {
  id: string;
  createdAt: Date;
  name: string;
  phone: string;
  address: string | null;
  status: OrderStatus;
  totalMnt: number;
  items: OrderItemDTO[];
};
