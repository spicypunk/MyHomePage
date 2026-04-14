export default function CryptoArbitrageResearchPage() {
  return (
    <>
      <h1 className="text-xl font-normal mb-6">Quantitative Research on Crypto Arbitrage</h1>

      <p className="text-sm mb-3 max-w-lg text-center text-black/70 dark:text-white/70">
        Tipping the Iceberg of CEX-DEX MEV.
      </p>
      <p className="text-sm mb-8 max-w-lg text-center text-black/50 dark:text-white/50">
        A deep dive into the mechanics of centralized exchange and decentralized exchange arbitrage, exploring maximal extractable value (MEV) and the quantitative strategies behind cross-venue price discrepancies.
      </p>

      <img
        src="/mev-dashboard.png"
        alt="CEX-DEX MEV Dashboard showing opportunity size across OSMOUSDT, OSMOBUSD, and ATOMBUSD pairs"
        className="max-w-2xl w-full rounded mb-8"
      />

      <img
        src="/block-diagram.png"
        alt="Block diagram showing DEX top-of-block execution price inference from previous block pool balance"
        className="max-w-2xl w-full rounded mb-8"
      />

      <a
        href="https://spicypunk.substack.com/p/tipping-the-iceberg-of-cex-dex-mev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
      >
        Read full article on Substack &rarr;
      </a>
    </>
  )
}
