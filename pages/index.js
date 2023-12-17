import Card from "../components/ui/Card";
import MoreBtn from "../components/ui/button/MoreBtn";
import FilterBtn from "../components/ui/button/FilterBtn";

import { ticketList } from "../utils/Data";
import { filterOptions } from "../utils/Data";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [displayTicket, setDisplayTicket] = useState(ticketList);

  useEffect(() => {
    if (!router.query.filter) {
      return setDisplayTicket(ticketList);
    }

    setDisplayTicket(
      ticketList.filter((ticket) => ticket.type === router.query.filter)
    );
  }, [router.query]);

  const handleFilterTicket = (filterValue) => {
    router.push(
      {
        query: { ...router.query, filter: filterValue },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <main>
      <section className="px-[1.25rem] md:px-[1.875rem] lg:px-[9.375rem] 3xl:px-[17.125rem] mx-auto">
        <h1 className="text-center text-3xl font-bold my-6 italic">
          Lorem ipsum dolor
        </h1>

        <div className="mb-6 flex items-center justify-center flex-wrap space-x-3">
          {filterOptions.map((option) => (
            <FilterBtn
              key={option.value}
              filterLabel={option.label}
              filterValue={option.value}
              onClick={(value) => handleFilterTicket(value)}
            />
          ))}
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {displayTicket.map((ticket) => (
              <Card
                key={ticket.id}
                ticketNumber={ticket.number}
                tickerBadge={ticket.badge}
              />
            ))}
          </div>
        </AnimatePresence>

        <div className="flex items-center justify-center mt-12">
          <MoreBtn btnText="Find More Ticket" onClick={() => {}} />
        </div>
      </section>
    </main>
  );
}
