import NonEmptyString from "./NonEmptyString";

type SearchType = "FULLTEXT" | "TYPEAHEAD";
type Operator = "AND" | "OR";

interface ByKeyword {
  query: NonEmptyString;
  searchType?: SearchType;
  operator?: Operator;
  fuzzy?: boolean;
}

interface ByAttributeValue {
  key: NonEmptyString;
  values: NonEmptyString[];
  operator?: Operator;
}
interface ByAttributeRange {
  key: NonEmptyString;
  min?: number;
  max?: number;
}
interface ByAttribute {
  values: ByAttributeValue[];
  ranges: ByAttributeRange[];
}

type PositiveIntOrZero = number;
interface BySalePriceAmount {
  min: PositiveIntOrZero;
  max: PositiveIntOrZero;
}
interface BySalePriceDiscount {
  min: PositiveIntOrZero;
  max: PositiveIntOrZero;
}
type PostalId = string;
type StockAvailabilityType = "PICKUP" | "HOME_DELIVERY";
type StockAvailabilityCost = "FREE_COST";
type StockAvailabilityDeliveryTerm =
  | "IMMEDIATE_AVAILABILITY"
  | "AVAILABLE_IN_0_HOURS"
  | "AVAILABLE_IN_24_HOURS"
  | "AVAILABLE_IN_48_HOURS";

interface ByAvailableStock {
  locations?: NonEmptyString[];
  postalCodes?: PostalId[];
  types?: StockAvailabilityType[];
  costs?: StockAvailabilityCost[];
  deliveryTerms?: StockAvailabilityDeliveryTerm[];
  includeThoseWithNoAvailableStockButListable?: boolean;
}

export default interface ItemFilteringInputType {
  ids?: NonEmptyString[];
  skus?: NonEmptyString[];
  keywords?: ByKeyword;
  brands?: NonEmptyString[];
  categories?: NonEmptyString[];
  collections?: NonEmptyString[];
  sellers?: NonEmptyString[];
  attributes?: ByAttribute;
  salePriceAmount?: BySalePriceAmount;
  salePriceDiscount?: BySalePriceDiscount;
  availableStock?: ByAvailableStock;
  installments?: NonEmptyString[];
  salesChannels?: NonEmptyString[];
  active?: boolean;
}
