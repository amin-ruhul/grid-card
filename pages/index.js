import Card from "../components/ui/Card";
import MoreBtn from "../components/ui/button/MoreBtn";
import { ticketList } from "../utils/Data";

export default function Home() {
  return (
    <main>
      <section className="px-[1.25rem] md:px-[1.875rem] lg:px-[9.375rem] 3xl:px-[17.125rem] mx-auto">
        <h1 className="text-center text-3xl font-bold my-6 italic">
          Lorem ipsum dolor
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {ticketList.map((ticket) => (
            <Card
              key={ticket.id}
              ticketNumber={ticket.number}
              tickerBadge={ticket.badge}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-6">
          <MoreBtn btnText="Find More Ticket" onClick={() => {}} />
        </div>
      </section>
    </main>
  );
}
