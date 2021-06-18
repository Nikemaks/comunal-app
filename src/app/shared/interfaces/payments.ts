export interface SimplePayments {
  type: TypePayments
  name: string;
  count: number;
}

export interface OtherPayments extends SimplePayments {
}

export enum PaymentsEnum {
  WATTER = 'Вода',
  LIGTH = 'Свет',
  GAS = 'Газ',
  OTHER_PAYMENTS = 'Другие Платежи'
}

export enum TypePayments {
  regular = 'regularPayments',
  other = 'otherPayments'
}
