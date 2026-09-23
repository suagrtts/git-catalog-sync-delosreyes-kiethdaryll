function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {w
  return Math.round(daysLate * ratePerDay);
}

module.exports = { isValidLoan, calculateLateFee };
