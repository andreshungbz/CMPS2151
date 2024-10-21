/* add code below this */

const companies = JSON.parse(content);

function CompanyCard(company) {
  this.symbol = company.symbol;
  this.name = company.companyName;
  this.day50 = company.stats.day50MovingAvg;
  this.day200 = company.stats.day200MovingAvg;
  this.revenue = company.stats.operatingRevenue - company.stats.costOfRevenue;
  this.marketCap50 =
    company.stats.day50MovingAvg * company.stats.sharesOutstanding;
  this.marketCap200 =
    company.stats.day200MovingAvg * company.stats.sharesOutstanding;
  this.equity = company.stats.totalAssets - company.stats.totalLiabilities;
  this.tags = company.tags;

  this.currency = (num) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  this.billions = (num) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(num);
  };

  this.outputCard = function () {
    document.write(`
      <article class="card">
        <h2>${this.symbol} - ${this.name}</h2>
        <div>
          <p>Share Price (50day avg): <span>$${this.currency(
            this.day50
          )}</span></p>
          <p>Share Price (200day avg): <span>$${this.currency(
            this.day200
          )}</span></p>
          <p>Market Cap (50day avg): <span>$${this.billions(
            this.marketCap50
          )}</span></p>
          <p>Market Cap (200day avg): <span>$${this.billions(
            this.marketCap200
          )}</span></p>
          <p>Net Revenue: <span>$${this.billions(this.revenue)}</span></p>
          <p>Shareholder Equity: <span>$${this.billions(this.equity)}</span></p>
        </div>
        <footer>
    `);

    for (const tag of this.tags) {
      document.write(`<small>${tag}</small>`);
    }

    document.write(`
        </footer>
      </article>  
    `);
  };
}

const outputCompanyCards = (companies) => {
  for (const company of companies) {
    const companyCardObject = new CompanyCard(company);
    companyCardObject.outputCard();
  }
};

outputCompanyCards(companies);
