import moment from 'moment';

export const handleConvertTimestampToDate = (timestamp: string) => {
  if (!timestamp) return;
  // eslint-disable-next-line no-debugger
  debugger;
  return moment(Number(timestamp)).locale('vi').format('DD/MM/YYYY HH:mm');
};
