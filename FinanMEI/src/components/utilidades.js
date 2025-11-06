export function formatCurrency(value) {
  const number = parseFloat(value.replace(/[^\d,-]/g, '').replace(',', '.'));
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}
