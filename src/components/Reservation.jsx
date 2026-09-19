
import { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Calendar,
  Clock,
  Users,
  Heart,
  CheckCircle2,
} from "lucide-react";

export default function Reservation({ isOpen, onClose, cart }) {
  const [bookingType, setBookingType] = useState("Table Booking");
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [timeSlot, setTimeSlot] = useState("4:00 PM");
  const [guests, setGuests] = useState("2 Guests");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleClose = () => {
  setGuestName("");
  setPhone("");
  setSubmitted(false);

  onClose();
};

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    confetti({
      particleCount: 60,
      spread: 80,
      colors: ["#B298E7", "#F5B8D5", "#B8E3E9", "#F9BEDD"],
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2135]/60 backdrop-blur-md">

      <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl border border-[#F5B8D5] max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#FFF9FC] text-[#2B2135] hover:bg-[#FDE8F3] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (

          /* Success Message */
          <div className="text-center py-8 space-y-4">

            <div className="w-16 h-16 rounded-full bg-[#E1F4F7] text-[#377580] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#2B2135]">
              Reservation Confirmed!
            </h3>

            <p className="text-sm text-[#6B5B7B] max-w-xs mx-auto">
              Thank you for trying out our reservation preview!
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                handleClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#B298E7] text-white font-bold text-xs hover:bg-[#AA326C] transition"
            >
              Close
            </button>

          </div>

        ) : (

          /* Reservation Form */
          <div>

            {/* Header */}
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-[#FDE8F3] text-[#AA326C] text-xs font-bold uppercase">
                Cozy Pre-Booking
              </span>

              <h3 className="text-2xl font-bold text-[#2B2135] mt-2">
                Reserve a Table & Pre-Order
              </h3>

              <p className="text-xs text-[#6B5B7B]">
                Book your table or pre-order your favorite café treats.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Booking Type */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#FFF9FC] rounded-2xl border border-[#D7C7F4]">

                {["Table Booking", "Takeaway Pre-Order"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setBookingType(type)}
                    className={`py-2 rounded-xl text-xs font-bold transition ${
                      bookingType === type
                        ? "bg-[#B298E7] text-white shadow-sm"
                        : "text-[#6B5B7B] hover:text-[#2B2135]"
                    }`}
                  >
                    {type}
                  </button>
                ))}

              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <div>
                  <label className="text-xs font-bold text-[#2B2135] block mb-1">
                    Your Name
                  </label>

                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FFF9FC] border border-[#D7C7F4] text-xs focus:outline-none focus:border-[#B298E7]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2B2135] block mb-1">
                    Phone / WhatsApp
                  </label>

                  <input
                    type="telephone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 Mobile No"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FFF9FC] border border-[#D7C7F4] text-xs focus:outline-none focus:border-[#B298E7]"
                  />
                </div>

              </div>

              {/* Date, Time & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                <div>
                  <label className="text-xs font-bold text-[#2B2135] block mb-1">
                    Date
                  </label>

                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FC] border border-[#D7C7F4] text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2B2135] block mb-1">
                    Preferred Time
                  </label>

                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FC] border border-[#D7C7F4] text-xs"
                  >
                    {[
                      "10:00 AM",
                      "12:30 AM",
                      "5:00 PM",
                      "6:30 PM",
                      "8:00 PM",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2B2135] block mb-1">
                    Guests
                  </label>

                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FC] border border-[#D7C7F4] text-xs"
                  >
                    {[
                      "1 Guest",
                      "2 Guests",
                      "3 Guests",
                      "4 Guests",
                      "5+ Guests",
                    ].map((guest) => (
                      <option key={guest} value={guest}>
                        {guest}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Cart Items */}
              {/* {cart.length > 0 && (
                <div className="p-3 rounded-2xl bg-[#FDE8F3] border border-[#F9BEDD] space-y-2">

                  <span className="text-[11px] font-bold text-[#AA326C] uppercase block">
                    Your Order
                  </span>

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-xs text-[#2B2135]"
                    >
                      <span>
                        {item.name} × {item.qty}
                      </span>

                      <strong className="text-[#AA326C]">
                        ₹{item.price * item.qty}
                      </strong>
                    </div>
                  ))}

                  <div className="pt-2 border-t border-[#F9BEDD] flex justify-between text-xs font-bold text-[#583A85]">
                    <span>Total:</span>
                    <span>₹{cartTotal}</span>
                  </div>

                </div>
              )} */}

              {/* Special Request */}
              <div>
                <label className="text-xs font-bold text-[#2B2135] block mb-1">
                  Special Request(optional)
                </label>

                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Birthday setup, window seat, etc."
                  className="w-full px-3 py-2 rounded-xl bg-[#FFF9FC] border border-[#D7C7F4] text-xs focus:outline-none focus:border-[#B298E7]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-linear-to-r from-[#B298E7] via-[#F5B8D5] to-[#F9BEDD] text-[#2B2135] font-bold text-sm hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#AA326C]" />
                <span>Confirm Reservation</span>
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
