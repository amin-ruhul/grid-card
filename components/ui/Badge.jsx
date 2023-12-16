function Badge({ badgeLabel }) {
  return (
    <div className="bg-secondary spiky-border absolute bottom-0 w-full py-4 text-center">
      <p>{badgeLabel}</p>
    </div>
  );
}

export default Badge;
