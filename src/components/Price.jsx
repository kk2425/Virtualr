import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Price = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Pricing
      </h2>

      <div className="flex flex-wrap justify-center mt-10">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-3">
            <div className="rounded-lg border border-neutral-700 p-8 bg-neutral-800">
              <p className="mb-6 text-xl font-semibold">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-6 text-2xl font-bold">
                <span>{option.price}</span>
                <span className="text-neutral-400 tracking-tight text-lg"> /Month</span>
              </p>

              <ul className="mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="mt-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex w-full justify-center items-center text-center h-10 p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
