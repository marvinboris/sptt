import React from "react";

import StatCard from "./stat-card";

const blocks = {
  totalPurchase: "38.45k",
  totalTokenHolders: 102,
  totalCoursesPakcs: 18,
  todaysPurchase: "65.89k",
};

export default function AdminDashboardStatCardsSection() {
  return (
    <section
      id="stat-cards"
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
    >
      <StatCard icon="dollar" title={`Total purchase ($)`}>
        {blocks.totalPurchase}
      </StatCard>

      <StatCard icon="user-group" title={`Total token holders`}>
        {blocks.totalTokenHolders}
      </StatCard>

      <StatCard icon="book-mark" title={`Total courses packs`}>
        {blocks.totalCoursesPakcs}
      </StatCard>

      <StatCard icon="coins" title={`Today’s purchase`}>
        {blocks.todaysPurchase}
      </StatCard>
    </section>
  );
}
