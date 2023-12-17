import Badge from "./Badge";
import BuyNowBtn from "./button/BuyNowBtn";
import { motion } from "framer-motion";

function Card({ ticketNumber, tickerBadge }) {
  return (
    <motion.div layout className="w-full">
      <div className="w-full h-[14.938rem] card-background spiky-border relative">
        <div className="flex items-center justify-center h-full flex-col space-y-3">
          <div className="bg-primary w-8 h-8 rounded-full"></div>
          <p className="text-4xl font-semibold italic">{ticketNumber}</p>
        </div>
        <Badge badgeLabel={tickerBadge} />
      </div>
      <BuyNowBtn />
    </motion.div>
  );
}

export default Card;
