import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import { Deal } from "../lib/deal";
import { Header, Divider, ReviewToggle } from "../components/index";
import Review from "../components/Review";
import Report from "../components/Report";
import CalculatorForm from "../components/CalculatorForm";

import { Link } from "react-router-dom";
import { h2image } from "../utils/helpers";
import { log } from "console";

export default function CalculatorPage() {
  const calculatorForm = useForm();
  const [isReviewSectionVisible, setReviewSectionVisibility] = useState(true);
  const logoDataURL = require("./red.png").default;
  const [graphImage, setGraphImage] = useState<string>();
const isVis =  sessionStorage.getItem('isVis');
 
  
  const html_id = document.getElementById("to-pdf-print") as HTMLElement;
  console.log(html_id);
  const [bi, setBi] = useState<string | null>();
  useEffect(() => {
    if (html_id) {
      h2image(html_id)
        .then((image) => {
          setBi(image);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },[html_id])
  console.log(bi);
  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      sessionStorage.clear();
      localStorage.clear();
    } else {
      console.log('The page was not reloaded.');
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("graphImage", bi as string);
  }, [bi]);
  return (
    <div className="container mx-auto p-6">
      <a href="/">
        <span className="sr-only">Workflow</span>
        <img
          className="h-12 w-auto sm:h-16 pdf-download"
          src={logoDataURL}
          alt="logo"
        />
      </a>

      <div className="">
        <Header />
        {calculatorForm.inReview && (
          <>
            <CalculatorForm
              setInfo={calculatorForm.setInfo}
              setPurchase={calculatorForm.setPurchase}
              setLoan={calculatorForm.setLoan}
              setOwnership={calculatorForm.setOwnership}
              setIncome={calculatorForm.setIncome}
              setUtility={calculatorForm.setUtility}
            />
          </>
        )}
      </div>
      <div className="container sm:prose-xl">
        <div className="mt-8 flex"></div>
        {calculatorForm.inReview && isReviewSectionVisible && (
          <Review
            info={calculatorForm.info}
            purchase={calculatorForm.purchase}
            loan={calculatorForm.loan}
            ownership={calculatorForm.ownership}
            income={calculatorForm.income}
            utility={calculatorForm.utility}
          />
        )}
      </div>
      <Divider />
      <div id="to-pdf" className="noka container sm:prose-xl">
        {calculatorForm.isComplete && (
          <Report
            deal={
              new Deal(
                calculatorForm.info,
                calculatorForm.purchase,
                calculatorForm.loan,
                calculatorForm.income,
                {
                  ...calculatorForm.ownership,
                  monthlyHOAExpense: 0,
                },
                calculatorForm.utility
              )
            }
            setGraphImage={setGraphImage}
          />
        )}
      </div>
     
    </div>
  );
}
