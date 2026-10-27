// Formatos en español de Chile.

const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

/** 25000 → "$25.000" */
export function formatCLP(amount: number): string {
  return clp.format(amount);
}
