interface InvoiceItem {
    name?: string;
    id?: number;
    description?: string;
    unit_cost?: number;
    quantity?: number;
    total?: number;
}

interface Address {
    owner?: string;
    line_1?: string;
    city?: string;
    state?: string;
    zip?: number;
    phone?: string;
    email?: string;
}

export interface Invoice {
    customer?: string;
    notes?: string;
    invoice_date?: string;
    invoice_id?: string;
    invoice_status?: string;
    order_date?: string;
    order_status?: string;
    order_id?: string;
    address?: Address;
    sellerAddress?: Address;
    items?: InvoiceItem[];
    sub_total: number;
    discount?: number;
    vat?: number;
    total: number;
    cgst: number;
    sgst: number;
};