/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

function stringifyRange({ min, max } = {}) {
  if (Number.isFinite(min) && Number.isFinite(max)) return `${min}-a-${max}`;
  if (Number.isFinite(min)) return `${min}-o-mas`;
  if (Number.isFinite(max)) return `menos-de-${max}`;
  return undefined;
}

function stringifyDiscountRange({ min, max } = {}) {
  if (Number.isFinite(min) && Number.isFinite(max))
    return `${min}-a-${max}-off`;
  if (Number.isFinite(min)) return `desde-${min}-off`;
  if (Number.isFinite(max)) return `hasta-${max}-off`;
  return undefined;
}

function getCategoriesRouterQueryFromFilter({ categories } = {}) {
  return categories;
}

function getSortingRouterQueryFromFilter({ sorting } = {}) {
  return sorting;
}

function getIdsRouterQueryFromFilter({ ids } = {}) {
  return ids;
}

function getSkusRouterQueryFromFilter({ skus } = {}) {
  return skus;
}

function getKeywordsRouterQueryFromFilter({ keywords } = {}) {
  return keywords ? keywords.query : null;
}

function getBrandsRouterQueryFromFilter({ brands } = {}) {
  return brands;
}

function getCollectionsRouterQueryFromFilter({ collections } = {}) {
  return collections;
}

function getSellersRouterQueryFromFilter({ sellers } = {}) {
  return sellers;
}

function getAttributesRouterQueryFromFilter({ attributes } = {}) {
  const ranges =
    attributes && attributes.ranges
      ? attributes.ranges.map((range) => [range.valueKey, stringifyRange(range)])
      : [];
  const values =
    attributes && attributes.values
      ? attributes.values.map(({ valueKey, values } = {}) => [valueKey, values])
      : [];

  return Object.fromEntries(ranges.concat(values));
}

function getSalePriceAmountRouterQueryFromFilter({ salePriceAmount } = {}) {
  if (!salePriceAmount) return undefined;
  return stringifyRange(salePriceAmount);
}

function getSalePriceDiscountRouterQueryFromFilter({ salePriceDiscount } = {}) {
  if (!salePriceDiscount) return undefined;
  return stringifyDiscountRange(salePriceDiscount);
}

function translateAll(arr, dict) {
  return arr ? arr.map((key) => dict[key]) : null;
}

function getAvailableStockTypesRouterQueryFromFilter({ availableStock } = {}) {
  const deliveryTypesConstantsToQuery = {
    HOME_DELIVERY: "envio-a-domicilio",
    PICKUP: "retiro-en-sucursal",
  };

  const stock = availableStock ? availableStock.types : null;

  return translateAll(stock, deliveryTypesConstantsToQuery);
}

function getAvailableStockCostsRouterQueryFromFilter({ availableStock } = {}) {
  const deliveryCostsConstantToQuery = {
    FREE_COST: "gratis",
  };

  const stock = availableStock ? availableStock.costs : null;

  return translateAll(stock, deliveryCostsConstantToQuery);
}

function getAvailableStockDeliveryTermsRouterQueryFromFilter({
  availableStock,
} = {}) {
  const deliveryTermsConstantToQuery = {
    IMMEDIATE_AVAILABILITY: "entrega-inmediata",
    AVAILABLE_IN_0_HOURS: "disponible-hoy",
    AVAILABLE_IN_24_HOURS: "disponible-en-24-horas",
    AVAILABLE_IN_48_HOURS: "disponible-en-48-horas",
  };

  const stock = availableStock ? availableStock.deliveryTerms : null;

  return translateAll(stock, deliveryTermsConstantToQuery);
}

function getInstallmentsRouterQueryFromFilter({ installments } = {}) {
  return installments;
}

export function getRouterQueryFromListingFilteringVariables(filters) {
  const categories = getCategoriesRouterQueryFromFilter(filters);
  const sorting = getSortingRouterQueryFromFilter(filters);
  const ids = getIdsRouterQueryFromFilter(filters);
  const skus = getSkusRouterQueryFromFilter(filters);
  const keywords = getKeywordsRouterQueryFromFilter(filters);
  const brands = getBrandsRouterQueryFromFilter(filters);
  const collections = getCollectionsRouterQueryFromFilter(filters);
  const sellers = getSellersRouterQueryFromFilter(filters);
  const attributes = getAttributesRouterQueryFromFilter(filters);
  const salePriceAmount = getSalePriceAmountRouterQueryFromFilter(filters);
  const salePriceDiscount = getSalePriceDiscountRouterQueryFromFilter(filters);
  const availableStockTypes = getAvailableStockTypesRouterQueryFromFilter(
    filters,
  );
  const availableStockCosts = getAvailableStockCostsRouterQueryFromFilter(
    filters,
  );
  const availableStockDeliveryTerms = getAvailableStockDeliveryTermsRouterQueryFromFilter(
    filters,
  );
  const installments = getInstallmentsRouterQueryFromFilter(filters);
  const page = 0;

  return {
    page,
    sorting,
    categorias: categories,
    ids,
    skus,
    keyword: keywords,
    marcas: brands,
    promociones: collections,
    sellers,
    precio: salePriceAmount,
    descuento: salePriceDiscount,
    "tipo-de-entrega": availableStockTypes,
    "costo-de-entrega": availableStockCosts,
    "tiempo-de-entrega": availableStockDeliveryTerms,
    "formas-de-pago": installments,
    ...attributes,
  };
}
