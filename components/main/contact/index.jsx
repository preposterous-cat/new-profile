"use client";
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import social_media from "@/data/social_media";
import { useState } from "react";

const ContactComponent = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const emailInputHandler = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendEmailHandler = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch("/contact/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      //   console.log(response);

      const data = await response.json();
      //   console.log(data);
      if (data?.success) {
        // setSendingEmailMessage(data?.message);
        setEmailData({
          name: "",

          email: "",
          message: "",
        });
        e.target.name.value = "";

        e.target.email.value = "";
        e.target.message.value = "";
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setIsSending(false);
  };

  return (
    <div className="flex flex-col">
      <div className=" text-2xl lg:text-3xl text-center text-white">
        Drop me a line using the form below.
        <br /> Let's chat or team up!
      </div>
      <form onSubmit={sendEmailHandler}>
        <div className="flex flex-row gap-1 my-5">
          <div className=" w-full max-w-sm items-center gap-1.5">
            <Input
              className="bg-themeblue text-thememaroon-muted"
              type="text"
              id="name"
              name="name"
              onChange={emailInputHandler}
              placeholder="Name"
              required
            />
          </div>
          <div className=" w-full max-w-sm items-center gap-1.5">
            <Input
              className="bg-themeblue text-thememaroon-muted"
              type="email"
              id="email"
              name="email"
              onChange={emailInputHandler}
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-row mb-5">
          <div className=" w-full items-center ">
            <Textarea
              className="bg-themeblue text-thememaroon-muted"
              placeholder="Type your message here..."
              name="message"
              onChange={emailInputHandler}
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <Button
            type="submit"
            className="bg-themeblue border-2 border-thememaroon hover:bg-thememaroon text-white"
            disabled={isSending ? "disabled" : ""}
          >
            {isSending ? (
              <>
                <span className="loading loading-spinner loading-sm me-2"></span>
                Sending...
              </>
            ) : (
              "Send"
            )}
          </Button>
        </div>
      </form>
      <div className="flex flex-row items-center gap-3 text-xl justify-center">
        <div className="text-white">Or, you can find me at</div>
        {social_media?.map((item, i) => (
          <a
            key={i}
            target="_blank"
            href={item.link}
            className="text-thememaroon-muted hover:text-thememaroon text-3xl"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactComponent;
