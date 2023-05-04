import React from "react";

import StatCard from "./stat-card";

const data = {
  courses: "122,456.42",
  commissions: "38.45k",
  rewards: (
    <div>
      <div>38.45k</div>
      <div className="flex items-center gap-1 text-xs text-[#ED9F58]">
        <div className="h-2.5 w-2.5 flex-none animate-spin rounded-full border border-[#ED9F58] border-t-transparent" />

        <span>23,481.42 (Pending)</span>
      </div>
    </div>
  ),
  balance: 2.89,
};

export default function CustomerDashboardStatCardsSection() {
  return (
    <section
      id="stat-cards"
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
    >
      <StatCard icon="dollar" title={`My courses`}>
        {data.courses}
      </StatCard>

      <StatCard icon="book-mark" title={`My commissions`} switchable>
        {data.commissions}
      </StatCard>

      <StatCard icon="book-mark" title={`Total rewards`} switchable>
        {data.rewards}
      </StatCard>

      <StatCard icon="coins" title={`SPTT Wallet balance`}>
        {data.balance}
      </StatCard>
    </section>
  );
}
