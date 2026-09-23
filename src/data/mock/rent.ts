export const rentDetails = {
  amount: 8500,
  month: 'March 2026',
  pgName: 'SRV Heritage',
  dueInDays: 3,
  room: '302',
  status: 'due' as const,
};

export const paymentMethods = [
  {id: 'gpay', name: 'GPay', subtitle: 'Google Pay · UPI', icon: 'G'},
  {id: 'phonepe', name: 'PhonePe', subtitle: 'PhonePe · UPI', icon: 'P'},
  {id: 'paytm', name: 'Paytm', subtitle: 'Paytm · UPI', icon: 'P'},
];
