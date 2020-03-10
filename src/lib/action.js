const texasHoldem = require("./texas-holdem");
const { getState, updateState } = require("./db-utils");

module.exports = async (db, { tableId, playerId, type, amount = 0 }) => {
  await db.runTransaction(async tx => {
    let [players, table] = await getState(db, tx, tableId);

    texasHoldem(table, players, {
      type,
      playerId,
      amount
    });

    await updateState(db, tx, tableId, table, players);

    console.log(type, tableId, playerId);
  });
};