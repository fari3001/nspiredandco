import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerStyles.css';
import { Send, Calendar, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// Formspree form ID for event bookings
const FORMSPREE_BOOKING_ID = 'xpwlklzd';

export default function Bookings() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    message: '',
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleBookingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!bookingData.name || !bookingData.email || !bookingData.eventType || !selectedDate) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_BOOKING_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingData,
          eventDate: formattedDate,
          _subject: `New Event Booking Request - ${bookingData.eventType} on ${formattedDate}`,
          formType: 'Event Booking',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setBookingData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          guestCount: '',
          message: '',
        });
        setSelectedDate(null);

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-8" />
            </div>
            <h1 className="text-6xl md:text-7xl font-extralight text-gray-900 mb-8 tracking-tight">
              Reserve Your Date
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Book our mobile perfume bar for your upcoming event and create unforgettable memories for you and your guests.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border border-stone-300 p-12 md:p-16 mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200/30 mb-8">
                <Calendar size={28} className="text-rose-400" strokeWidth={1.2} />
              </div>
              <h2 className="text-4xl font-extralight text-gray-900 mb-4 tracking-tight">
                Book Your Experience
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Tell us about your event and we'll create a magical fragrance experience
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingData.name}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 placeholder:text-gray-400"
                    placeholder="Your Name *"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 placeholder:text-gray-400"
                    placeholder="Your Email *"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleBookingChange}
                  className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 placeholder:text-gray-400"
                  placeholder="Phone Number (Optional)"
                />
              </div>

              {/* Event Type and Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <select
                    id="eventType"
                    name="eventType"
                    value={bookingData.eventType}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%226%22%20fill%3D%22none%22%3E%3Cpath%20stroke%3D%22%23666%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m1%201%205%204%205-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[center_right_1.5rem] bg-no-repeat"
                  >
                    <option value="" className="text-gray-400">Select Event Type *</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="bridal-shower">Bridal Shower</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private-party">Private Party</option>
                    <option value="pop-up">Pop-Up Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="relative custom-datepicker">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    placeholderText="Event Date *"
                    dateFormat="dd/MM/yyyy"
                    required
                    showMonthYearPicker={false}
                    showYearPicker={false}
                    className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 cursor-pointer"
                    calendarClassName="custom-calendar"
                    renderCustomHeader={({
                      date,
                      changeYear,
                      changeMonth,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled,
                    }) => (
                      <div className="custom-header">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                          type="button"
                          className="custom-nav-button prev"
                        >
                          <span className="custom-nav-icon">‹</span>
                        </button>
                        <div className="custom-header-text">
                          <button
                            type="button"
                            className="month-button"
                            onClick={() => {
                              const monthPicker = document.querySelector('.month-year-picker');
                              if (monthPicker) {
                                monthPicker.classList.toggle('show-months');
                                monthPicker.classList.remove('show-years');
                              }
                            }}
                          >
                            {date.toLocaleString('en-US', { month: 'long' })}
                          </button>
                          <button
                            type="button"
                            className="year-button"
                            onClick={() => {
                              const monthPicker = document.querySelector('.month-year-picker');
                              if (monthPicker) {
                                monthPicker.classList.toggle('show-years');
                                monthPicker.classList.remove('show-months');
                              }
                            }}
                          >
                            {date.getFullYear()}
                          </button>
                        </div>
                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                          type="button"
                          className="custom-nav-button next"
                        >
                          <span className="custom-nav-icon">›</span>
                        </button>

                        {/* Month Picker */}
                        <div className="month-year-picker">
                          <div className="month-list">
                            {Array.from({ length: 12 }, (_, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  changeMonth(i);
                                  document.querySelector('.month-year-picker')?.classList.remove('show-months');
                                }}
                                className={`month-item ${date.getMonth() === i ? 'selected' : ''}`}
                              >
                                {new Date(2000, i).toLocaleString('en-US', { month: 'short' })}
                              </button>
                            ))}
                          </div>

                          {/* Year Picker */}
                          <div className="year-list">
                            {Array.from({ length: 10 }, (_, i) => {
                              const year = new Date().getFullYear() + i;
                              return (
                                <button
                                  key={year}
                                  type="button"
                                  onClick={() => {
                                    changeYear(year);
                                    document.querySelector('.month-year-picker')?.classList.remove('show-years');
                                  }}
                                  className={`year-item ${date.getFullYear() === year ? 'selected' : ''}`}
                                >
                                  {year}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  value={bookingData.guestCount}
                  onChange={handleBookingChange}
                  min="1"
                  className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light text-gray-900 placeholder:text-gray-400"
                  placeholder="Expected Number of Guests (Optional)"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={bookingData.message}
                  onChange={handleBookingChange}
                  rows={4}
                  className="w-full px-6 py-4 bg-white border border-stone-300 focus:border-rose-300 focus:outline-none focus:ring-0 transition-all duration-300 font-light resize-none text-gray-900 placeholder:text-gray-400"
                  placeholder="Tell us more about your event (Optional)"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">Booking request sent successfully!</p>
                    <p className="text-green-700 text-sm mt-1">We'll contact you within 24 hours to confirm your date.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Oops! Something went wrong.</p>
                    <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-16 py-5 text-sm font-light tracking-widest uppercase hover:shadow-2xl hover:shadow-gray-900/20 hover:from-rose-400 hover:to-amber-400 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send size={18} strokeWidth={1.5} />
                      Book now
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-stone-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-6 h-6 text-rose-400" strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-600">24-Hour Response</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Users className="w-6 h-6 text-rose-400" strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-600">Events of All Sizes</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-6 h-6 text-rose-400" strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-600">Flexible Scheduling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
