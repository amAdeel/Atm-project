# IAMADEEL ATM

IAMADEEL ATM is a TypeScript package designed for handling basic ATM functionalities.

## Installation

You can install this package via npm. Run the following command:

```bash
npm install iamadeel-atm

Usage
To use this package in your TypeScript project, you can import it as follows:

typescript
Copy code
import { ATM } from "iamadeel-atm";
Then you can create an instance of the ATM class and start using its methods.

typescript
Copy code
const atm = new ATM();
atm.checkBalance(userName, pin);
atm.withdraw(userName, pin, amount);
// Other methods...
Features
Check account balance
Withdraw funds
Deposit funds
Example
Here's a simple example of how you can use this package:

typescript
Copy code
import { ATM } from "iamadeel-atm";

const atm = new ATM();
atm.checkBalance("1234567890", 1234);
atm.withdraw("1234567890", 1234, 500);
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Thanks to Inquirer.js for interactive command-line prompts.