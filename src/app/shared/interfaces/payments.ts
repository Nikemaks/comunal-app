export interface SimplePayments {
  name: string;
  count: number;
}

export interface RegularPayments extends SimplePayments {
  indications: number;
  priceForOne: number;
}

export interface OtherPayments extends SimplePayments {
}

export enum PaymentsEnum {
  WATTER = 'Вода',
  LIGTH = 'Свет',
  GAS = 'Газ',
  OTHER_PAYMENTS = 'Другие Платежи'
}
