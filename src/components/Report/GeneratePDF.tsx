import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import PageBreak from "@react-pdf/renderer";

const GeneratePDF = () => {
  //logo
  const logo = require("../calculator/red.png").default;
  //user info
  const propertyNickname = JSON.parse(localStorage.getItem("property") || "");
  const propertyAddress = JSON.parse(localStorage.getItem("address") || "");
  const propertyCity = JSON.parse(localStorage.getItem("city") || "");
  const propertyState = JSON.parse(localStorage.getItem("state") || "");
  const propertyZip = JSON.parse(localStorage.getItem("zip") || "");

  // kpi info
  const annualizedReturnValue = localStorage.getItem("annualizedReturnValue");
  const mortgagePaymentValue = localStorage.getItem("mortgagePaymentValue");

  // return info
  const netOperatingIncome = localStorage.getItem("netOperatingIncome");
  const cashOnCashReturn = localStorage.getItem("cashOnCashReturn");
  const proFormaCap = localStorage.getItem("proFormaCap");
  const purchaseCap = localStorage.getItem("purchaseCap");

  //custom code by me
  const mortgage = localStorage.getItem("Mortgage");
  const ptax = localStorage.getItem("Property Tax");
  const pins = localStorage.getItem("Property Insurance");
  const hoa = localStorage.getItem("HOA");
  const maintenance = localStorage.getItem("Maintenance");
  const capex = localStorage.getItem("Capex");
  const vacancy = localStorage.getItem("Vacancy");
  const management = localStorage.getItem("Management");


  const electricity = localStorage.getItem("Electricity");
  const gas = localStorage.getItem("Gas");
  const watersewer = localStorage.getItem("Water & Sewer");
  const garbage = localStorage.getItem("Garbage");
  const other = localStorage.getItem("Other");

  // cashflow info
  const cleanCashFlow = localStorage.getItem("cleanCashFlow");
  const cleanIncome = localStorage.getItem("cleanIncome");
  const cleanExpense = localStorage.getItem("cleanExpense");
  const totalMonthlyIncome = localStorage.getItem("totalMonthlyIncome");
  const halfPercentMonthlyExpense = localStorage.getItem(
    "halfPercentMonthlyExpense"
  );
  const calculateMortgage = localStorage.getItem("calculateMortgage");
  const halfPercentRuleCashFlow = localStorage.getItem(
    "halfPercentRuleCashFlow"
  );

  let localStorageArray = [];

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key as string);
    localStorageArray.push({ key: key, value: value });
    }
    const graphImageValue = localStorageArray.find(item => item.key === "graphImage")?.value;
  

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFFFFF",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    header: {
      fontSize: 20,
      textAlign: "center",
      marginBottom: 10,
      marginTop: 30,
      textDecoration: "underline",
    },
    header_page: {
      fontSize: 20,
      textAlign: "center",
      marginTop: 30,

      textDecoration: "underline",
    },
    company_label: {
      fontSize: "50px",
      fontWeight: "bold",
    },
    company_email: {
      fontSize: "16px",
      fontWeight: 800,
      marginTop: 5,
    },
    company_address: {
      fontSize: "13px",
      fontWeight: "extrabold",
    },
    info_order: {
      marginTop: 30,
      fontSize: "13px",
      fontWeight: "extrabold",
      textDecoration: "underline",
    },
    info_customer: {
      display: "flex",
      flexDirection: "column",
      fontSize: "13px",
      fontWeight: "extrabold",
    },
    info_email: {
      fontSize: "13px",
      fontWeight: "extrabold",
    },
    common_order: {
      fontSize: "13px",
      fontWeight: "extrabold",
    },
    productRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottom: "1px solid #000000",
      paddingBottom: 5,
      paddingTop: 5,
    },
    productName: {
      flexGrow: 2,
    },
    productQuantity: {
      flexGrow: 1,
      textAlign: "center",
    },
    productPrice: {
      flexGrow: 1,
      textAlign: "right",
    },
    totalRow: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: 10,
    },
    totalLabel: {
      marginRight: 10,
    },
    totalPrice: {
      fontWeight: "bold",
    },
    table_header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#eeeee1",
      padding: "10",
      marginTop: "20",
      fontSize: "15px",
      fontWeight: "extrabold",
    },
    table_header_total: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // backgroundColor: "#eeeee1",
      borderTop: "1px solid #000000",
      padding: "10",
      marginTop: "10",
      fontSize: "15px",
      fontWeight: "extrabold",
    },
    table_total: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",

      padding: "10",
      fontSize: "15px",
      fontWeight: "extrabold",
    },
    table_body: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "10",
      fontSize: "15px",
      fontWeight: "extralight",
    },
    table_header_quantity: {
      marginLeft: 20,
    },
    table_body_product: {
      width: 400,
      fontSize: 10,
    },
    table_body_price: {
      fontSize: 10,
    },
    devider: {
      border: "0.5px",
    },
  });
  return (
    <div className="w-screen h-screen">
      <PDFViewer className="w-screen h-screen">
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.header}>Rental Property Report</Text>
              <Text style={styles.company_label}>
                <Image src={logo}></Image>
              </Text>
              <Text style={styles.company_email}>{propertyNickname}</Text>
              <Text style={styles.company_address}>
                {propertyAddress +
                  "," +
                  propertyCity +
                  "," +
                  propertyState +
                  "," +
                  propertyZip}
              </Text>

              <Text style={styles.info_order}>KPIs Information</Text>
              <View style={styles.info_customer}>
                <View
                  style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text>Annualized Return : $ {annualizedReturnValue} </Text>
                  <Text style={{ paddingLeft: "20px" }}>
                    Mortage Payment : ${" "}
                    {Number(mortgagePaymentValue).toFixed(2)}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  marginTop: "5px",
                  fontSize: "13px",
                  fontWeight: "extrabold",
                  textDecoration: "underline",
                }}
              >
                Returns Information
              </Text>
              <View style={styles.info_customer}>
                <View
                  style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text>NOI : $ {netOperatingIncome} </Text>
                  <Text style={{ paddingLeft: "20px" }}>
                    ROI : $ {cashOnCashReturn}
                  </Text>
                  <Text style={{ paddingLeft: "20px" }}>
                    Pro forma cap : $ {proFormaCap}
                  </Text>
                  <Text style={{ paddingLeft: "20px" }}>
                    Purchase cap : $ {purchaseCap}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  marginTop: "5px",
                  fontSize: "13px",
                  fontWeight: "extrabold",
                  textDecoration: "underline",
                }}
              >
                Cash Flow Information
              </Text>
              <View style={styles.info_customer}>
                <View
                  style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text>Income : $ {cleanIncome} </Text>
                  <Text style={{ paddingLeft: "20px" }}>
                    Expenses : $ {cleanExpense}
                  </Text>
                  <Text style={{ paddingLeft: "20px" }}>
                    Monthly Cash Flow : $ {cleanCashFlow}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text>Total Monthly Income : $ {totalMonthlyIncome}</Text>
                  <Text style={{ paddingLeft: "20px" }}>
                    50% extimation of expenses : $ {halfPercentMonthlyExpense}{" "}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text>Monthly Mortage(P&I) : $ {calculateMortgage}</Text>
                  <Text style={{ paddingLeft: "20px" }}>
                    50$ Rule cash flow : $ {halfPercentRuleCashFlow}
                  </Text>
                </View>
              </View>

              <View style={styles.table_header}>
                <Text style={styles.table_body_product}>Fixed Expense</Text>
                <Text style={styles.table_body_price}>Ammount</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Mortage</Text>
                <Text style={styles.table_body_price}>$ {mortgage}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Property TAX</Text>
                <Text style={styles.table_body_price}>$ {ptax}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>
                  Property Insurance
                </Text>
                <Text style={styles.table_body_price}>$ {pins}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>HOA</Text>
                <Text style={styles.table_body_price}>$ {hoa}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Maintenance</Text>
                <Text style={styles.table_body_price}>$ {maintenance}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Capex</Text>
                <Text style={styles.table_body_price}>$ {capex}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Vacancy</Text>
                <Text style={styles.table_body_price}>$ {vacancy}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Managment</Text>
                <Text style={styles.table_body_price}>$ {management}</Text>
              </View>
              <View style={styles.table_header_total}>
                <Text style={styles.table_body_product}>
                  Total Fixed Expense
                </Text>
                <Text style={styles.table_body_price}>
  ${(Number(mortgage) ?? 0) +
    (Number(ptax) ?? 0) +
    (Number(pins) ?? 0) +
    (Number(hoa) ?? 0) +
    (Number(maintenance) ?? 0) +
    (Number(capex) ?? 0) +
    (Number(vacancy) ?? 0) +
    (Number(management) ?? 0)
  }
</Text>

              </View>
            </View>
            <View break style={styles.section}>
              <Text style={styles.header_page}>Rental Property Report</Text>
              <View break style={styles.table_header}>
                <Text style={styles.table_body_product}>Variable Expense</Text>
                <Text style={styles.table_body_price}>Ammount</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Electricity</Text>
                <Text style={styles.table_body_price}>$ {electricity}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Gas</Text>
                <Text style={styles.table_body_price}>$ {gas}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>
                  Water and Sewerage
                </Text>
                <Text style={styles.table_body_price}>$ {watersewer}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Garbage</Text>
                <Text style={styles.table_body_price}>$ {garbage}</Text>
              </View>
              <View style={styles.table_body}>
                <Text style={styles.table_body_product}>Others</Text>
                <Text style={styles.table_body_price}>$ {other}</Text>
              </View>
              <View style={styles.table_header_total}>
                <Text style={styles.table_body_product}>
                  Total Variable Expense
                </Text>
                <Text style={styles.table_body_price}>
  ${(Number(electricity) ?? 0) +
    (Number(gas) ?? 0) +
    (Number(watersewer) ?? 0) +
    (Number(garbage) ?? 0) +
    (Number(other) ?? 0)
  }
</Text>


              </View>
              <Text style={styles.header_page}>Mortgage Ammortization</Text>
              <Image style={{width:"500px",marginTop:"20px"}} src={graphImageValue || ""}></Image>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default GeneratePDF;
