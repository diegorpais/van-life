import DashIncome from './dash-income.model';
import DashReview from './dash-review.model';
import Van from './van.model';

export default interface HostDash {
  income: Array<DashIncome>;
  listedVans: Array<Van>;
  review: Array<DashReview>;
}