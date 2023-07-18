import { IncomeChart } from './income-chart.model';
import IncomeTransactions from './income-transactions.model';

export default interface IncomeModel {
  amount: string;
  chart: IncomeChart;
  transactions: Array<IncomeTransactions>
}

