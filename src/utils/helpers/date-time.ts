import moment from 'moment';

export const handleConvertTimestampToDate = (timestamp: string) => {
  if (!timestamp) return;
  return moment(timestamp).format('DD/MM/YYYY');
};
