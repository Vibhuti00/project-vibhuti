let basicSalary = 30000;
let expYears = 6;
let bonus, totalSalary, netPaid;
if (expYears >= 5) 
{
    bonus = basicSalary * 0.08;
} 
else 
{
    bonus = basicSalary * 0.15;
}
totalSalary = basicSalary + bonus;
let deduction = totalSalary * 0.05;
netPaid = totalSalary - deduction;
console.log("Basic Salary:", basicSalary);
console.log("Experience (Years):", expYears);
console.log("Bonus:", bonus);
console.log("Total Salary:", totalSalary);
console.log("Net Paid Salary:", netPaid);
