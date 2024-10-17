import { DateFormatter } from './format';
import { DateManipulator } from './manipulate';
import { DateComparer } from './compare';
import { DateUtilities } from './utility';

export const formatter = new DateFormatter();
export const manipulator = new DateManipulator();
export const comparer = new DateComparer();
export const utils = new DateUtilities();