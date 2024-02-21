import _ from "lodash";

export function getSum(transcation, type) {
  let sum = _(transcation)
    .groupBy("type")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount");
      return {
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
}

export function getLabels(transaction) {
  let amountSum = getSum(transaction, "type");
  let Total = _.sum(getSum(transaction));
  let percent = _(amountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();
  return percent;
}
