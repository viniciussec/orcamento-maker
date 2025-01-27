export type ServiceQuote = {
  company_name: string;
  responsible: string;
  address: string;
  phone: string;
  email: string;
  items: string[];
  value: number;
  payment_method: string;
  execution_time: string;
  client_name: string;
  bank_name?: string;
  agency?: string;
  account?: string;
  pix_key?: string;
  observations?: string;
  date: string;
};
