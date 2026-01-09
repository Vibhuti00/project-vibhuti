// Earnings
let basicSalary = 15000;
let hra = 6000;
let da = 2000;
let otherAllowance = 2000;
let totalEarnings = basicSalary + hra + da + otherAllowance;
let pf = 1800;
let professionalTax = 200;
let incomeTax = 1000;
let totalDeductions = pf + professionalTax + incomeTax;
let netSalary = totalEarnings - totalDeductions;
console.log("Total Earnings : ₹" + totalEarnings);
console.log("Total Deductions : ₹" + totalDeductions);
console.log("Net Salary : ₹" + netSalary);


// Component	                Amount (₹)
//-----------------------------------------
// Basic Salary	                15,000
// HRA	                        6,000
// DA	                        2,000
// Other Allowance	            2,000
//-----------------------------------------
// Total Earnings (A)	        25,000
//-----------------------------------------

// Component	                Amount(₹)
//-----------------------------------------
// PF	                        1, 800
// Professional Tax	            200
// Income Tax	                1,000
//-----------------------------------------
// Total Deductions(B)	        3,000
//-----------------------------------------

// Net Salary = Total Earnings − Total Deductions
// Net Salary = 25,000 − 3,000 = ₹22,000

// Gross Salary :               ₹25,000
// Total Deductions :           ₹3,000
// Net Pay (Take-Home Salary) : ₹22,000
