import { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Booking submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Book a Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required 
          />
          <select 
            name="service" 
            value={formData.service} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Service</option>
            <option value="towing">Towing</option>
            <option value="recovery">Recovery</option>
            <option value="roadside">Roadside Assistance</option>
          </select>
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required 
          />
          <input 
            type="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required 
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;

