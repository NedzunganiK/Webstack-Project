import { motion } from "framer-motion";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    vehicleType: "Car",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Request Submitted:", formData);
    alert("Your tow request has been submitted!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Book a Tow</h2>
      <motion.form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg"
        />
        <input
          type="text"
          name="dropoff"
          placeholder="Drop-off Location"
          value={formData.dropoff}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg"
        />
        <select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          className="p-3 border rounded-lg"
        >
          <option>Car</option>
          <option>Motorcycle</option>
          <option>Truck</option>
          <option>Other</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg"
        >
          Request Tow
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default BookingForm;

