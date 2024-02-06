import { useEffect } from "react";
import { formatNumberAsCurrency } from "../../utils/helpers";
import { ResultCard } from "../common/ResultCard";

export default function KPISection(props: any) {
  useEffect(() => {
    localStorage.setItem("annualizedReturnValue", props.annualizedReturnValue);
    localStorage.setItem("mortgagePaymentValue", props.mortgagePaymentValue);
  }, [props.annualizedReturnValue, props.mortgagePaymentValue]);
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <ResultCard
          title="5-year Annualized Return"
          value={`${props.annualizedReturnValue}%`}
          highlight
        />
        <ResultCard
          title="Mortgage Payement"
          value={`$${formatNumberAsCurrency(props.mortgagePaymentValue)}`}
          highlight
        />
      </dl>
    </div>
  );
}
