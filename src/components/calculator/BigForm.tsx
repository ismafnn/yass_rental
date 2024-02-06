import React, { useState } from "react";

interface BigFormProps {
  handleForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

const BigForm: React.FC<BigFormProps> = ({ handleForm }) => {
  const [isCash, setIsCash] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState(0);
  const [isCalculateButtonVisible, setCalculateButtonVisible] = useState(true);

  console.log(clickCount);

  const handleCalculate = () => {
    // On the first click, change the button text to 'First Click'
    setClickCount(1);
    setCalculateButtonVisible(false);

    
  };

  const handleGeneratePDF = () => {
    // Generate PDF logic here
    window.print();
  };

  return (
    <form onSubmit={handleForm}>
      <div className={`mt-10 sm:mt-0 ${clickCount === 0 ? "" : "hidden"}`}>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Property Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter basic information about the property.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div id="purchaseForm">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="nickname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nickname
                      </label>
                      <input
                        type="text"
                        name="nickname"
                        id="nickname"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="zip"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        required
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={`mt-10 sm:mt-0 ${clickCount === 0 ? "" : "hidden"}`}>
      <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Rental Income
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter information about the potential income of the deal.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="grossMonthlyRentalIncome"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gross Monthly Rental Income
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="grossMonthlyRentalIncome"
                          id="grossMonthlyRentalIncome"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="grossMonthlyOtherIncome"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Other Monthly Rental Income
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="grossMonthlyOtherIncome"
                          id="grossMonthlyOtherIncome"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="annualIncomeGrowthPercent"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Annual Income Growth
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="annualIncomeGrowthPercent"
                          id="annualIncomeGrowthPercent"
                          min="0"
                          step="0.01"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={`mt-10 sm:mt-0 ${clickCount === 0 ? "" : "hidden"}`}>
<div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Purchase
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter information about the asking price of the deal.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="purchasePrice"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Purchase Price
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          name="purchasePrice"
                          id="purchasePrice"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="closingCost"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Closing Costs
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          name="closingCost"
                          id="closingCost"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="rehabCost"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Rehab Costs
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          name="rehabCost"
                          id="rehabCost"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="propertyValueGrowth"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Property Value Growth
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="propertyValueGrowth"
                          id="propertyValueGrowth"
                          step="0.01"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


      <div className={`mt-10 sm:mt-0 ${clickCount === 0 ? "" : "hidden"}`}>
<div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Financing
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter information about the financing of the deal.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          checked={isCash}
                          onChange={() => setIsCash((state) => !state)}
                          type="checkbox"
                          name="isCashPurchase"
                          id="isCashPurchase"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="isCashPurchase"
                          className="font-medium text-gray-700"
                        >
                          Cash Purchase?
                        </label>
                        <p className="text-gray-500">
                          A loan is not being used to make this purchase.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="loanAmount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Loan Amount
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="loanAmount"
                          required={isCash !== false}
                          disabled={isCash === true}
                          min={0}
                          id="loanAmount"
                          className="disabled:opacity-50 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="interestRate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Interest Rate
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="interestRate"
                          id="interestRate"
                          required={isCash !== false}
                          disabled={isCash === true}
                          step="0.01"
                          min={0.01}
                          className="disabled:opacity-50 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="pmi"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Points Charged
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="pmi"
                          id="pmi"
                          step="0.01"
                          min={0}
                          required={isCash !== false}
                          disabled={isCash === true}
                          className="disabled:opacity-50 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="loanTerm"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Loan Term
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="loanTerm"
                          id="loanTerm"
                          required={isCash !== false}
                          disabled={isCash === true}
                          min={0}
                          className="disabled:opacity-50 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Years
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className={`mt-10 sm:mt-0 ${clickCount === 0 ? "" : "hidden"}`}>

        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Rental Expenses - Ownership
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter information about the fixed expenses.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="annualPropertyTaxExpense"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Annual Property Taxes
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="annualPropertyTaxExpense"
                          id="annualPropertyTaxExpense"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="annualPropertyInsuranceExpense"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Annual Property Insurance
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="annualPropertyInsuranceExpense"
                          id="annualPropertyInsuranceExpense"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="maintenancePercentage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Maintenance
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="maintenancePercentage"
                          id="maintenancePercentage"
                          min="0"
                          step="0.01"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="vacancyPercentage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Vacancy
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="vacancyPercentage"
                          id="vacancyPercentage"
                          step="0.01"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="capexPercentage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CapEx
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="capexPercentage"
                          id="capexPercentage"
                          step="0.01"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="managementPercentage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Management
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="managementPercentage"
                          id="managementPercentage"
                          step="0.01"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-10 sm:mt-0 ${clickCount === 0 ? "" : "hidden"}`}>

        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Rental Expenses - Utilities
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="monthlyElectricityExpense"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Electricity
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="monthlyElectricityExpense"
                          id="monthlyElectricityExpense"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="monthlyGasExpense"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gas
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="monthlyGasExpense"
                          id="monthlyGasExpense"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="monthlyWaterAndSewerExpense"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {"Water & Sewer"}
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="monthlyWaterAndSewerExpense"
                          id="monthlyWaterAndSewerExpense"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="hoaExpense"
                        className="block text-sm font-medium text-gray-700"
                      >
                        HOA
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="hoaExpense"
                          id="hoaExpense"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="monthlyGarbageExpense"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Garbage
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="monthlyGarbageExpense"
                          id="monthlyGarbageExpense"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="monthlyOtherExpense"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Other
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          name="monthlyOtherExpense"
                          id="monthlyOtherExpense"
                          min="0"
                          required
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="annualExpenseGrowthPercent"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Annual Expense Growth
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          step="0.01"
                          name="annualExpenseGrowthPercent"
                          id="annualExpenseGrowthPercent"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="futureSalePercent"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Future Sales Expense
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          step="0.01"
                          name="futureSalePercent"
                          id="futureSalePercent"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse mt-5 w-full">
      <button
      id="calculateButton" // Add an id to the "Calculate" button
      style={{ display: isCalculateButtonVisible ? "block" : "none" }} // Dynamically set the display style
            onClick={handleCalculate}
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-52"
          >
            Calculate
          </button>
      </div>

      <style>
        {`
          @media print {
            .print-hidden {
              display: none !important;
            }
          }
        `}
      </style>

      
        <div className={`mt-10 sm:mt-0 ${clickCount === 1 ? "print-hidden" : "hidden"}`}>
          <button
            onClick={handleGeneratePDF}
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-52"
          >
            Generate PDF
          </button>
        </div>
        
    </form>
  );
};

export default BigForm;
