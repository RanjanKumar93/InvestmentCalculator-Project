import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const data = calculateInvestmentResults(userInput);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <div>
      <table id="result">
        <thead>
          <tr className="center">
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => {
            const totalIntesrest =
              x.valueEndOfYear -
              x.annualInvestment * x.year -
              initialInvestment;
            const totalAmountInvested = x.valueEndOfYear - totalIntesrest;

            return (
              <tr key={x.year}>
                <td>{x.year}</td>
                <td>{formatter.format(x.valueEndOfYear)}</td>
                <td>{formatter.format(x.interest)}</td>
                <td>{formatter.format(totalIntesrest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
