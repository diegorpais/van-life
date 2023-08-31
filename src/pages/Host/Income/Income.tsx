

import { useState, useEffect } from 'react';

import './style.css';

import IncomeTransactions from '../../../core/models/income-transactions.model';
import IncomeModel from '../../../core/models/income.model';
import ChartBar from './ChartBar';
import { getIncomeData } from '../../../core/services/vans.service';

export default function Income() {
  const [chartLabels, setChartLabels] = useState<Array<string>>([]);
  const [chartData, setChartData] = useState<Array<number>>([]);
  const [amount, setAmount] = useState<string>('');
  const [transactions, setTransactions] = useState<Array<IncomeTransactions>>([]);

  useEffect(() => {
    getIncomeData()
      .then(res => getInitialData(res));
  }, []);

  function getInitialData(data: IncomeModel) {
    setChartLabels(data.chart.labels);
    setChartData(data.chart.data);
    setAmount(data.amount);
    setTransactions(data.transactions);
  }

  const transactionsElements = transactions.map(transaction => (
    <div className="transaction" key={transaction.date}>
      <h2>${transaction.amount}</h2>
      <p>{transaction.date}</p>
    </div>
  ));

  return (
    <section className='container container-min-height income-page'>

      <header className='income-header'>
        <h3>Income</h3>
        <p>last <span>30 days</span></p>
        <h1>${amount ? (amount) : '0'}</h1>
      </header>

      <ChartBar
        labels={chartLabels}
        data={chartData} />

      <div className="transactions">

        <div className="title">
          <h3>Your transactions ({transactions.length})</h3>
          <p>Last <span>30 days</span></p>
        </div>

        <div className="transaction-list">
          {transactionsElements}
        </div>
      </div>

    </section>
  )
}