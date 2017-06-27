const stateData   = require('./states');
const stationData = require('./stations');

let states     = new Set(stateData);
const stations = new Map(Object.entries(stationData));

stations.forEach((val, key) => stations.set(key, new Set(val)));

module.exports = () => {

  const finalSet = new Set;

  while (states.size) {

    let bestStation   = null;
    let statesCovered = new Set;

    for (const [station, stationStates] of stations) {

      const covered = new Set([...states].filter(state => stationStates.has(state)));

      if (covered.size > statesCovered.size) {
        bestStation   = station;
        statesCovered = covered;
      }

    }

    states = new Set([...states].filter(state => !statesCovered.has(state)));
    finalSet.add(bestStation);

  }

  return finalSet;

};
