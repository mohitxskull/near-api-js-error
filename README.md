```bash
➜  Array deserialize git:(main) ✗ yarn start
yarn run v1.22.19
$ node build/src/main.js
Account.viewFunction(contractId, methodName, args, options) deprecated use `Account.viewFunction(ViewFunctionCallOptions)` instead <anonymous>:null:null
Receipt: 5UJWuVeBGQx7LhyhEA5uhXisNSRqn9uutohmDTkrRpp7
        Failure [dev-1673270766973-64615875457732]: Error: {"index":0,"kind":{"ExecutionError":"Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error(\"Invalid last symbol 51, offset 29.\", line: 1, column: 185)', nft/src/lib.rs:91:1"}}
/home/skull/Projects/Owlski/Final/Back/Error/Array deserialize/node_modules/near-api-js/lib/utils/rpc_errors.js:31
    const server_tx_error = new ServerTransactionError();
                            ^

ServerTransactionError: {"index":0,"kind":{"ExecutionError":"Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error(\"Invalid last symbol 51, offset 29.\", line: 1, column: 185)', nft/src/lib.rs:91:1"}}
    at parseResultError (/home/skull/Projects/Owlski/Final/Back/Error/Array deserialize/node_modules/near-api-js/lib/utils/rpc_errors.js:31:29)
    at Account.<anonymous> (/home/skull/Projects/Owlski/Final/Back/Error/Array deserialize/node_modules/near-api-js/lib/account.js:156:61)
    at Generator.next (<anonymous>)
    at fulfilled (/home/skull/Projects/Owlski/Final/Back/Error/Array deserialize/node_modules/near-api-js/lib/account.js:5:58)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  type: 'FunctionCallError',
  context: undefined,
  index: 0,
  kind: {
    ExecutionError: `Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error("Invalid last symbol 51, offset 29.", line: 1, column: 185)', nft/src/lib.rs:91:1`
  },
  transaction_outcome: {
    block_hash: 'JDjDjM8rizryHWNkF2wbvJ4yGzDWgA1PVPRLtbH6b858',
    id: '2kJqaJhnd26eBUj2wD9RVeyps8bA8KdjAYpL31fRYz6E',
    outcome: {
      executor_id: 'dev-1673270766973-64615875457732',
      gas_burnt: 2429763409616,
      logs: [],
      metadata: { gas_profile: null, version: 1 },
      receipt_ids: [ '24WJCSoZ9o2RH12a5QeKFMXhvG5mNqCsDrGkvpMJkqYe' ],
      status: {
        SuccessReceiptId: '24WJCSoZ9o2RH12a5QeKFMXhvG5mNqCsDrGkvpMJkqYe'
      },
      tokens_burnt: '242976340961600000000'
    },
    proof: [
      {
        direction: 'Left',
        hash: '9VaRp7uKmk5G1pFXQX1Rfi1eRzGfdysL6trAg9bec1SJ'
      },
      {
        direction: 'Right',
        hash: '75etQ9b58nauSChJF1X2LYALefgR8nwhkjVNXiB5o4NU'
      },
      {
        direction: 'Right',
        hash: '5wBEQ7uihgXJi9YGr59XQv8vkuFXKq5dwEGRn6n7fK4v'
      }
    ]
  }
}

Node.js v18.13.0
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```