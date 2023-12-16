import Badge from "./Badge";

function Card() {
  return (
    <div className="w-full">
      <div className="w-full h-[230px] card-background spiky-border  relative">
        <div className="flex items-center justify-center h-full flex-col space-y-3">
          <div className="bg-[#497617] w-8 h-8 rounded-full"></div>
          <p className="text-4xl font-semibold italic">123.321</p>
        </div>
        <Badge badgeLabel="Lorem Ipsum" />
      </div>
      <button className="bg-[#497617] rounded text-white mt-2 py-3 w-full">
        Buy Now
      </button>
    </div>
  );
}

export default Card;
