// Classes

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
// New Instance of Invoice Class
const invoiceOne = new Invoice("Mario", "work on the mario website", 100);
const invoiceTwo = new Invoice("Luigi", "work on luigis website", 200);

//Array that only allows Invoice objects
let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
