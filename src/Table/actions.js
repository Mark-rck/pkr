import React, { useContext } from "react";
import { FOLD } from "../lib/types";
import dispatch from "./dispatch";
import { TableContext } from "./index";

function Actions() {
  const { tableId } = useContext(TableContext);

  return (
    <div className="actions">
      <button>All-In</button>
      <button>Bet</button>
      <button>Check</button>
      <button
        onClick={async () => {
          const playerId = "pl";

          try {
            await dispatch({ type: FOLD, tableId, playerId });
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Fold
      </button>
    </div>
  );
}

export default Actions;