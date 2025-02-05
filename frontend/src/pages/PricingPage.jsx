import { motion } from "framer-motion";

const PricingPage = () => {
  const pricingOptions = [
    { service: "Standard Tow", price: "$50" },
    { service: "Emergency Tow", price: "$80" },
    { service: "Long Distance Tow", price: "$150+" },
    { service: "Motorcycle Tow", price: "$40" },
    { service: "Heavy Duty Tow", price: "Custom Quote" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Pricing & Services</h2>
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white shadow-lg rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold">{option.service}</h3>
            <p className="text-blue-500 text-lg">{option.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PricingPage;

