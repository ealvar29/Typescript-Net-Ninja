import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";

let docOne: hasFormatter;
let docTwo: hasFormatter;

docOne = new Invoice("Yoshi", "Web Work", 350);
docTwo = new Payment("Mario", "plumbing work", 200);

// New Instance of Invoice Class
const invoiceOne = new Invoice("Mario", "work on the mario website", 100);
const invoiceTwo = new Invoice("Luigi", "work on luigis website", 200);

let docs: hasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

//Array that only allows Invoice objects
let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

console.log(docs);
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
