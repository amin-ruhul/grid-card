function MoreBtn({ btnText, onClick }) {
  return (
    <button
      className="border-2 border-primary py-3 w-[30%] rounded font-medium hover:bg-primary hover:text-white transition-all duration-300 delay-75"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default MoreBtn;
