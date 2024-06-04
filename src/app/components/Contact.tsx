"use client";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [businessEnglish, setBusinessEnglish] = useState(false);
  const [generalEnglish, setGeneralEnglish] = useState(false);
  const [examPreparation, setExamPreparation] = useState(false);
  const [editingYourResearchPaper, setEditingYourResearchPaper] =
    useState(false);
  const [conversationalEnglish, setConversationalEnglish] = useState(false);

  //function to call send API to send email
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    if (firstName == "" || lastName == "" || email == "") {
      setLoading(false);
      alert("Please fill all the fields");
      return false;
    }

    const requestBody: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      phone?: string;
      businessEnglish?: boolean;
      generalEnglish?: boolean;
      examPreparation?: boolean;
      editingYourResearchPaper?: boolean;
      conversationalEnglish?: boolean;
    } = {
      firstName,
      lastName,
      email,
      message,
      ...(phone && { phone }), // Include phone if it exists
      ...(businessEnglish && { businessEnglish }),
      ...(generalEnglish && { generalEnglish }),
      ...(examPreparation && { examPreparation }),
      ...(editingYourResearchPaper && { editingYourResearchPaper }),
      ...(conversationalEnglish && { conversationalEnglish }),
    };

    const response = await fetch("../api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody), // data can be `string` or {object}!
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        if (data.status === 200) {
          toast.success(
            `Thank you for your message ${firstName} ${lastName}! I will get back to you soon!`
          );
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
        } else {
          console.log("Data: " + data);
          console.log("data id:" + data.id);
          toast.error("Apologies! Please try again.");
        }

        // Add your logic here to send the email
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Ooops! unfortunately some error has occurred.");
      });
    return true;
  };

  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold text-[#5f3dc4]">Contact Me</h1>
        <p className="text-lg text-gray-600">
          Tel: 123-456-7890 / Email: info@mysite.com
        </p>
        <form className="mt-8 w-full max-w-3xl" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="first-name" className="mb-2 font-semibold">
                First Name *
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name" className="mb-2 font-semibold">
                Last Name *
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 font-semibold">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <span className="font-semibold">What are you looking for?</span>
            <div className="mt-2">
              <div className="flex items-center">
                <input
                  id="business-english"
                  type="checkbox"
                  className="mr-2"
                  checked={businessEnglish}
                  onChange={(e) => setBusinessEnglish(e.target.checked)}
                />
                <label htmlFor="business-english" className="mr-4">
                  Business English
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="general-english"
                  type="checkbox"
                  className="mr-2"
                  checked={generalEnglish}
                  onChange={(e) => setGeneralEnglish(e.target.checked)}
                />
                <label htmlFor="general-english" className="mr-4">
                  General English
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="exam-preparation"
                  type="checkbox"
                  className="mr-2"
                  checked={examPreparation}
                  onChange={(e) => setExamPreparation(e.target.checked)}
                />
                <label htmlFor="exam-preparation">Exam preparation</label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="editing-your-research-paper"
                  type="checkbox"
                  className="mr-2"
                  checked={editingYourResearchPaper}
                  onChange={(e) =>
                    setEditingYourResearchPaper(e.target.checked)
                  }
                />
                <label htmlFor="editing-your-research-paper">
                  Editing your research paper
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="conversational-english"
                  type="checkbox"
                  className="mr-2"
                  checked={conversationalEnglish}
                  onChange={(e) => setConversationalEnglish(e.target.checked)}
                />
                <label htmlFor="conversational-english">
                  Conversational English
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="flex justify-center rounded-md bg-background border-2 border-accent px-8 py-3 text-white font-semibold bg-[#f87171] shadow-sm hover:bg-accent hover:text-background transition duration-300 ease-in-out hover:scale-105"
              disabled={loading}
            >
              {loading ? (
                <div
                  style={{ borderTopColor: "transparent" }}
                  className="w-6 h-6 border-4  border-white rounded-full animate-spin"
                ></div>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
