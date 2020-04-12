export function convertToRupiah(angka) {
  var rupiah = '';
  var angkarev = angka
    .toString()
    .split('')
    .reverse()
    .join('');
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
  return (
    'Rp ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
}

export function tConvert(time) {
  // Check correct time format and split into components
  time = time.substr(0, 5);
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }

  return time.join(''); // return adjusted time or original string
}

export function convertToAngka(rupiah) {
  return parseInt(rupiah.replace(/[^0-9]/g, ''), 10);
}

export function converDate(date) {
  var d = new Date(date);
  return d.toUTCString().substring(0, 17);
}
